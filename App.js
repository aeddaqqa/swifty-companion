import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { View, SafeAreaView, TextInput, Text, Pressable } from "react-native";
import styled, { ThemeProvider } from "styled-components/native";
import { NativeRouter, Route, Link, Routes } from "react-router-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const StyledContainer = styled.SafeAreaView`
    background-color: ${(props) => props.theme.background};
    width: 100%;
    height: 100%;
    /* background-color: turquoise; */
    display: flex;
    flex-flow: column wrap;
`;

const StyledNav = styled.View`
    width: 100%;
    display: flex;
    padding: 5%;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-between;
`;

const StyledNavText = styled.Text`
    color: ${(props) => props.theme.text};
    font-size: 20px;
`;

const StyledContent = styled.View`
    width: 100%;
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const StyledTextIpnut = styled.TextInput`
    width: 50%;
    margin: 2%;
    padding: 10px;
    height: 40px;
    border: 1px solid ${(props) => props.theme.border};
    color: ${(props) => props.theme.text};
`;

const ButtonStyled = styled.Pressable`
    width: 50%;
    text-align: center;
    background-color: ${(props) => props.theme.buttonBackground};

    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ButtonStyledText = styled.Text`
    color: ${(props) => props.theme.buttonText};
`;

const storeData = async (value) => {
    try {
        await AsyncStorage.setItem("accesToken", value);
    } catch (e) {
        // saving error
    }
};

const getData = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key);
        if (value !== null) {
            console.log(value);
            // value previously stored
        }
    } catch (e) {
        // error reading value
    }
};

const HomePage = ({ theme }) => {
    const [login, onChangeLogin] = useState("");
    const [load, setLoad] = useState(false);
    const [access_token, setAccessToken] = useState(null);
    const client_id = "";
    const client_secret = "";
    const Search = () => {
        setLoad(true);
        const data = axios
            .post(`https://api.intra.42.fr/oauth/token/`, {
                client_id: client_id,
                client_secret: client_secret,
                grant_type: "client_credentials",
            })
            .then((res) => {
                const {
                    data: {
                        access_token: access_token,
                        created_at: created_at,
                        expires_in: expires_in,
                    },
                } = res;
                console.log(res);
                console.log(created_at, expires_in);
                setAccessToken(access_token);
                console.log(access_token);
                console.log(Date.now() / 1000);
                // AsyncStorage.setItem("accesToken", token).then(() => {
                //     AsyncStorage.getItem("accesToken").then((token) => {
                //         console.log(token);
                // });
                // });
                storeData(access_token);
                setLoad(false);
                getData("accesToken");
            })
            .catch((err) => {
                setLoad(false);
            });
    };
    return (
        <StyledContent>
            {/* <StyledNavText>Login</StyledNavText> */}
            <StyledTextIpnut
                onChangeText={onChangeLogin}
                value={login}
                placeholder="Login"
                placeholderTextColor={theme ? "#11468F" : "#DA1212"}
            ></StyledTextIpnut>
            <ButtonStyled>
                <ButtonStyledText onPress={Search}>Search</ButtonStyledText>
            </ButtonStyled>
        </StyledContent>
    );
};

const Details = () => {
    return (
        <StyledContent>
            <StyledNavText>Details</StyledNavText>
        </StyledContent>
    );
};

export default function App() {
    const [theme, setTheme] = useState(true);
    const [route, setRoute] = useState("/");
    const [isOn, setIsOn] = useState(false);
    return (
        <ThemeProvider theme={theme ? Theme.light : Theme.dark}>
            <NativeRouter>
                <StyledContainer>
                    <StyledNav>
                        <Link
                            to={route}
                            onPress={() => {
                                route === "/"
                                    ? setRoute("/details")
                                    : setRoute("/");
                            }}
                        >
                            <StyledNavText>logo</StyledNavText>
                        </Link>

                        <View>
                            <StyledNavText
                                onPress={() => {
                                    console.log("bigola");
                                    setTheme(!theme);
                                }}
                            >
                                switch
                            </StyledNavText>
                        </View>
                    </StyledNav>
                    <Routes>
                        <Route path="/" element={<HomePage theme={theme} />} />
                        <Route path="/details" element={<Details />} />
                    </Routes>
                </StyledContainer>
            </NativeRouter>
        </ThemeProvider>
    );
}
