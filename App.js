import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { View, SafeAreaView, TextInput, Text } from "react-native";
import styled, { ThemeProvider } from "styled-components/native";

const Theme = {
    light: {
        background: "#ebebe3",
        text: "#2b2b28",
        textplaceholder: "#4a4a48",
        border: "#c19898",
    },
    dark: {
        background: "#041562",
        text: "#EEEEEE",
        textplaceholder: "#11468F",
        border: "#DA1212",
    },
};

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

// const Input = styled.TextInput.attrs({
//     placeholderTextColor: "red",
// });

const StyledTextIpnut = styled.TextInput`
    width: 50%;
    margin: 5%;
    padding: 10px;
    border: 1px solid ${(props) => props.theme.border};
    color: ${(props) => props.theme.text};
`;

export default function App() {
    const [text, onChangeText] = useState("Useless Text");
    const [theme, setTheme] = useState(true);
    return (
        <ThemeProvider theme={theme ? Theme.light : Theme.dark}>
            <StyledContainer>
                <StyledNav>
                    <StyledNavText>logo</StyledNavText>
                    <View>
                        <StyledNavText
                            onPress={() => {
                                console.log("bigola");
                                setTheme(!theme);
                            }}
                        >
                            Switcher
                        </StyledNavText>
                    </View>
                </StyledNav>
                <StyledContent>
                    <StyledNavText>{text}</StyledNavText>
                    <StyledTextIpnut
                        onChangeText={onChangeText}
                        value={text}
                    ></StyledTextIpnut>
                </StyledContent>
            </StyledContainer>
        </ThemeProvider>
    );
}
