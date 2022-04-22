import styled from "styled-components/native";

export const StyledView = styled.ScrollView`
    /* padding: 20px; */
`;

export const StyledUserInfo = styled.View`
    width: 100%;
    height: 200px;
    display: flex;
    flex-direction: row;
    padding: 10px;
    align-items: center;
    justify-content: center;
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
    height: 100%;
    border: 3px solid black;
`;

export const StyledInfoBox = styled.View`
    flex: 1;
    display: flex;
    height: 80%;
    /* padding: 20px; */
    align-items: center;
    justify-content: space-between;
`;

export const StyledText = styled.Text`
    font-size: 16px;
    color: ${(props) => props.theme.primaryColor};
    /* padding: 5px; */
`;

export const StyledFlatList = styled.Text`
    font-size: 16px;
    color: ${(props) => props.theme.primaryColor};
    /* padding: 5px; */
`;

export const StyledTextLevel = styled.Text`
    font-size: 16px;
    color: ${(props) => props.theme.primaryColor};
    /* padding: 5px; */
`;

export const StyledCoalitionContainer = styled.View`
    border: 3px solid black;
    /* width: 90%; */
    flex-basis: 45%;
    height: 100px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding-bottom: 10px;
`;

export const StyledPikala = styled.View`
    width: 100%;
    /* flex: 1; */
    height: 300px;
    /* margin-bottom: 20px; */
    padding: 0 20px;
`;

export const StyledLevel = styled.View`
    height: 40px;
    border: 1px solid #000000;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    margin: 0px 30px;
    overflow: hidden;
    position: relative;
`;
export const StyledFull = styled.View`
    border-radius: 20px;
    position: absolute;
    left: 0;
    width: ${(props) => props.level}%;
    height: 100%;
    background-color: ${(props) => props.theme.primaryColor};
    z-index: -10;
`;
