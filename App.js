import styled, { ThemeProvider } from "styled-components/native";
import {
    NativeRouter,
    Navigate,
    Route,
    Routes,
    useNavigate,
} from "react-router-native";
import Home from "./src/pages/HomePage/HomePage.js";
import Details from "./src/pages/DetailsPage/DetailsPage.js";
import { Theme } from "./src/utils/constants.js";
import NavBar from "./src/components/Navbar/NavBar.js";
import { StatusBar, Platform } from "react-native";
import { useState } from "react";
import { Pressable, View, Text } from "react-native";
import { useAuthRequest } from "expo-auth-session";
import { useEffect } from "react";

const StyledApp = styled.SafeAreaView`
    flex: 1;
    background-color: ${(props) => props.theme.backgroundAPP};
    background-color: ${(props) => props.theme.backgroundAPP};
`;

const config = {
    authorizationEndpoint: "https://api.intra.42.fr/oauth/authorize",
    tokenEndpoint: "https://api.intra.42.fr/oauth/token",
};

export default function App() {
    const [theme, setTheme] = useState(true);
    const [request, response, promptAsync] = useAuthRequest(
        {
            clientId:
                "192a1edb35080133cfec1769349a81734b35f9e901e8945f41c4df83ff3aab73",
            redirectUri: "exp://pikala",
        },
        config
    );
    useEffect(() => {
        console.log(response);
        // if (response.type == "success")
        // Navigate("")
    }, [response]);
    return (
        <ThemeProvider theme={!theme ? Theme.dark : Theme.light}>
            <NativeRouter>
                <StyledApp
                    style={{
                        marginTop:
                            Platform.OS === "IOS" ? 0 : StatusBar.currentHeight,
                    }}
                >
                    <NavBar
                        theme={theme ? 45 : 0}
                        setTheme={setTheme}
                        iconColor={Theme.light.tertiaryColor}
                    />
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <View
                                    style={{
                                        flex: 1,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <Pressable
                                        onPress={() => {
                                            promptAsync();
                                        }}
                                    >
                                        <Text style={{ fontSize: 40 }}>
                                            hello
                                        </Text>
                                    </Pressable>
                                </View>
                            }
                        />

                        <Route path="/home" element={<Home />} />
                        <Route path="/details" element={<Details />} />
                    </Routes>
                </StyledApp>
            </NativeRouter>
        </ThemeProvider>
    );
}
