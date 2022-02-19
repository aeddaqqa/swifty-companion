import { ThemeProvider } from "styled-components/native";
import { NativeRouter, Route, Routes, StatusBar } from "react-router-native";
import Home from "./src/pages/HomePage/HomePage.js";
import Details from "./src/pages/DetailsPage/DetailsPage.js";
import styled from "styled-components";
import { Theme } from "./src/utils/constants.js";
import NavBar from "./src/components/Navbar/NavBar.js";

const StyledApp = styled.SafeAreaView`
    flex: 1;
    background-color: ${(props) => props.theme.backgroundAPP};
`;

export default function App() {
    return (
        <ThemeProvider theme={Theme.dark}>
            <NativeRouter>
                <StyledApp>
                    <NavBar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/details" element={<Details />} />
                    </Routes>
                </StyledApp>
            </NativeRouter>
        </ThemeProvider>
    );
}
