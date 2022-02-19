import { ThemeProvider } from "styled-components/native";
import { NativeRouter, Route, Routes } from "react-router-native";
import Home from "./src/pages/HomePage/HomePage.js";
import Details from "./src/pages/DetailsPage/DetailsPage.js";
import styled from "styled-components";
import { Theme } from "./src/utils/constants.js";
import NavBar from "./src/components/Navbar/NavBar.js";
import { StatusBar, Platform } from "react-native";
import { useState } from "react";
const StyledApp = styled.SafeAreaView`
    flex: 1;
    background-color: ${(props) => props.theme.backgroundAPP};
    margin-top: ${Platform.OS === "IOS" ? 0 : StatusBar.currentHeight}px;
    background-color: ${(props) => props.theme.backgroundAPP};
`;

export default function App() {
    const [theme, setTheme] = useState(true);
    return (
        <ThemeProvider theme={!theme ? Theme.dark : Theme.light}>
            <NativeRouter>
                <StyledApp>
                    <NavBar
                        theme={theme}
                        setTheme={setTheme}
                        iconColor={Theme.light.tertiaryColor}
                    />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/details" element={<Details />} />
                    </Routes>
                </StyledApp>
            </NativeRouter>
        </ThemeProvider>
    );
}
