import { Text, TextInput, Pressable } from "react-native";
import styled from "styled-components";

const StyledHome = styled.View`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const StyledHeaderBox = styled.View``;

const StyledHeaderText = styled.Text`
    font-size: 30px;
    letter-spacing: 1px;
    color: ${(props) => props.theme.primaryColor};
`;

const StyledFormBox = styled.View`
    padding: 30px;
`;

const StyledFormInput = styled.TextInput`
    border-width: 2px;
    width: 300px;
    border-radius: 5px;
    height: 40px;
    padding: 5px 15px;
    margin: 20px 0;
    border: solid ${(props) => props.theme.primaryColor};
    color: ${(props) => props.theme.primaryColor};
`;

const StyledFormSubmit = styled.Pressable`
    border: solid ${(props) => props.theme.secondaryColor};
    border-width: 2px;
    border-radius: 5px;
    width: 300px;
    height: 40px;
    background-color: ${(props) => props.theme.primaryColor};
    display: flex;
    align-items: center;
    justify-content: center;
`;
const StyledFormSubmitText = styled.Text`
    font-size: 16px;
    color: ${(props) => props.theme.tertiaryColor};
`;
// const StyledFormBox = styled.View``;

const Home = () => {
    return (
        <StyledHome>
            <StyledHeaderBox>
                <StyledHeaderText>Swifty Companion</StyledHeaderText>
            </StyledHeaderBox>
            <StyledFormBox>
                <StyledFormInput
                    placeholderTextColor="#98BAE7"
                    placeholder="Login"
                />
                <StyledFormSubmit>
                    <StyledFormSubmitText>search</StyledFormSubmitText>
                </StyledFormSubmit>
            </StyledFormBox>
        </StyledHome>
    );
};

export default Home;
