import styled from "styled-components";
import Icon from "react-native-vector-icons/FontAwesome";
import { Button } from "react-native";
import { useState } from "react";

const StyledNav = styled.View`
    width: 100%;
    padding: 10px;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-between;
`;

const StyledTextNav = styled.Text`
    font-size: 20px;
    background-color: #f5f000;
`;

const StyledLogo = styled.Image`
    width: 100%
    height: 100%;
`;

const StyledLogoBox = styled.View`
    width: 60px;
    height: 60px;
    padding: 5px;
`;

const StyledSwitcher = styled.View`
    width: 100%;
    height: 80%;
    background-color: #000000;
    border-radius: 50px;
    /* position: relative; */
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
    overflow: hidden;
`;

const StyledSwitcherIconBox = styled.View`
    width: 50%;
    height: 100%;
    background-color: #fa1a23;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const StyledSwitcherBox = styled.Pressable`
    width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    padding: 5px;
    background: #ffffff;
    position: relative;
`;

const StyledSwitcherCercle = styled.View`
    width: 50%;
    height: 80%;
    background-color: #fdd0ff;
    position: absolute;
    left: ${(props) => (props.isDarkMode ? "5%" : "auto")};
    right: ${(props) => (props.isDarkMode ? "auto" : "5%")};
    border-radius: 80px;
`;

const NavBar = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    return (
        <StyledNav>
            <StyledLogoBox>
                <StyledLogo
                    source={{
                        uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/42_Logo.svg/1200px-42_Logo.svg.png",
                    }}
                />
            </StyledLogoBox>
            <StyledSwitcherBox
                onPress={() => {
                    console.log("bigola");
                    setIsDarkMode(!isDarkMode);
                }}
            >
                <StyledSwitcher>
                    <StyledSwitcherIconBox>
                        <Icon name="moon-o" size={20} color="#fdaf00" />
                    </StyledSwitcherIconBox>
                    <StyledSwitcherIconBox>
                        <Icon name="sun-o" size={20} color="#fdaf00" />
                    </StyledSwitcherIconBox>
                </StyledSwitcher>
                <StyledSwitcherCercle isDarkMode={isDarkMode} />
            </StyledSwitcherBox>
        </StyledNav>
    );
};

export default NavBar;
