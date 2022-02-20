import styled from "styled-components/native";
import Animated from "react-native-reanimated";
export const StyledNav = styled.View`
    width: 100%;
    padding: 10px;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-between;
`;

export const StyledLogo = styled.Image`
    width: 100%;
    height: 100%;
`;

export const StyledLogoBox = styled.View`
    width: 60px;
    height: 60px;
    padding: 5px;
`;

export const StyledSwitcher = styled.View`
    border: solid ${(props) => props.theme.secondaryColor};
    border-width: 1px;
    width: 100%;
    height: 80%;
    background-color: #000000;
    border-radius: 50px;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background-color: #e2dae2;
`;

export const StyledSwitcherIconBox = styled.View`
    width: 50%;
    height: 100%;
    background-color: ${(props) => props.theme.primaryColor};
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const StyledSwitcherBox = styled.Pressable`
    width: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    padding: 5px;
    position: relative;
`;

export const StyledSwitcherCercle = styled(Animated.View)`
    width: 50%;
    height: 90%;
    background-color: ${(props) => props.theme.secondaryColor};
    position: absolute;
    left: 6%;
    border-radius: 80px;
`;
