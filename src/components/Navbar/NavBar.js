import Icon from "react-native-vector-icons/FontAwesome";
// import {
//     useSharedValue,
//     useAnimatedStyle,
//     withSpring,
// } from "react-native-reanimated";

import {
    StyledNav,
    StyledLogo,
    StyledLogoBox,
    StyledSwitcher,
    StyledSwitcherIconBox,
    StyledSwitcherBox,
    StyledSwitcherCercle,
} from "./NavBar.Style";
import { useEffect } from "react";
import { Link } from "react-router-native";
const NavBar = ({ theme, setTheme, iconColor }) => {
    // const transX = useSharedValue(0);
    // const reanimatedStyle = useAnimatedStyle(() => {
    //     return {
    //         transform: [{ translateX: transX.value }],
    //     };
    // });
    // useEffect(() => {
    //     transX.value = withSpring(0);
    // }, []);
    return (
        <StyledNav>
            <StyledLogoBox>
                <Link to="/">
                    <StyledLogo
                        source={{
                            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/42_Logo.svg/1200px-42_Logo.svg.png",
                        }}
                    />
                </Link>
            </StyledLogoBox>
            <StyledSwitcherBox
                onPress={() => {
                    // transX.value = withSpring(theme);
                    setTheme(!theme);
                }}
            >
                <StyledSwitcher>
                    <StyledSwitcherIconBox>
                        <Icon name="moon-o" size={20} color={iconColor} />
                    </StyledSwitcherIconBox>
                    <StyledSwitcherIconBox>
                        <Icon name="sun-o" size={20} color={iconColor} />
                    </StyledSwitcherIconBox>
                </StyledSwitcher>
                <StyledSwitcherCercle
                    // style={[reanimatedStyle]}
                    isDarkMode={theme}
                />
            </StyledSwitcherBox>
        </StyledNav>
    );
};

export default NavBar;
