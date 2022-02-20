import styled from "styled-components/native";
export const StyledHome = styled.View`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const StyledHeaderBox = styled.View``;

export const StyledHeaderText = styled.Text`
    font-size: 30px;
    letter-spacing: 1px;
    color: ${(props) => props.theme.primaryColor};
`;

export const StyledFormBox = styled.View`
    padding: 30px;
`;

export const StyledFormInput = styled.TextInput`
    border-width: 2px;
    width: 300px;
    border-radius: 5px;
    height: 40px;
    padding: 5px 15px;
    margin: 20px 0;
    border: solid ${(props) => props.theme.primaryColor};
    color: ${(props) => props.theme.primaryColor};
`;

export const StyledFormSubmit = styled.Pressable`
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
export const StyledFormSubmitText = styled.Text`
    font-size: 16px;
    color: ${(props) => props.theme.tertiaryColor};
`;
