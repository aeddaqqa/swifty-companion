import { useEffect } from "react";
import { useLocation } from "react-router-native";
// import Animated, {
//     useSharedValue,
//     useAnimatedStyle,
//     withTiming,
//     withSpring,
//     withRepeat,
// } from "react-native-reanimated";
import styled from "styled-components/native";

const StyledView = styled.View`
    z-index: -5;
    /* background-color: #fff034; */
    width: 100%;
    /* height: 100%; */
    position: absolute;
    top: 0;
    left: 0;
`;

const StyledHeaderCoalition = styled.ImageBackground`
    height: 500px;
    width: 100%;
    /* background-size: cover;
    background-repeat: no-repeat;
    background-position: right; */
    /* background-color: #11f034; */
    position: relative;
`;

const StyledHeaderUser = styled.View`
    height: 200px;
    width: 50%;
    background-color: #f034;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
`;
const StyledHeaderCoealLogo = styled.View`
    height: 200px;
    width: 50%;
    background-color: #f034;
`;
const StyledHeader = styled.View``;

const Details = (props) => {
    const { state } = useLocation();
    console.log(state);
    console.log(state.coalition[0].cover_url);
    return (
        <StyledView>
            <StyledHeaderCoalition
                style={{
                    resizeMode: "cover",
                    // width: 3,
                }}
                // source={require(`${state.coalition[0].cover_url}`)}
                source={{ uri: state.coalition[0].cover_url }}
            >
                <StyledHeaderUser />
            </StyledHeaderCoalition>
        </StyledView>
    );
};

export default Details;
