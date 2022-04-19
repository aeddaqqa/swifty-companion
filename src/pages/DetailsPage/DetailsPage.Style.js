import styled from "styled-components/native";

export const StyledView = styled.ScrollView``;

export const StyledUserInfo = styled.View`
    width: 100%;
    height: 300px;
    background-color: yellow;
    display: flex;
    flex-direction: row;
    padding: 20px;
    /* align-items: center; */
    /* justify-content: center; */
`;

export const StyledProfileImageContainer = styled.View`
    flex-basis: 45%;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const StyledProfileImage = styled.ImageBackground`
    border: 3px solid black;
    width: 75%;
    height: 60%;
    border: 3px solid black;
`;

export const StyledInfoBox = styled.View`
    flex: 1;
    display: flex;
    padding: 20px;
    align-items: center;
    background: red;
`;

export const StyledText = styled.Text`
    font-size: 16px;
`;
