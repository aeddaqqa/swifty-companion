import styled from "styled-components/native";

export const StyledView = styled.ScrollView``;

export const StyledUserInfo = styled.View`
    width: 100%;
    height: 300px;
    display: flex;
    flex-direction: row;
    padding: 10px;
`;

export const StyledProfileImageContainer = styled.View`
    flex-basis: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    /* justify-content: center; */
`;

export const StyledProfileImage = styled.ImageBackground`
    width: 80%;
    height: 80%;
    border: 3px solid black;
`;

export const StyledInfoBox = styled.View`
    flex: 1;
    display: flex;
    height: 80%;
    /* padding: 20px; */
    align-items: center;
    justify-content: space-around;
    justify-content: space-between;
`;

export const StyledText = styled.Text`
    font-size: 16px;
`;

export const StyledCoalitionContainer = styled.View`
    border: 3px solid black;
    width: 90%;
    height: 200px;
    margin: 0 auto;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

export const StyledPikala = styled.View`
    width: 100%;
    height: 300px;
    margin-bottom: 20px;
`;
