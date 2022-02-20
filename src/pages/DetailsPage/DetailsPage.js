import { useEffect } from "react";
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    withSpring,
    withRepeat,
} from "react-native-reanimated";
import styled from "styled-components/native";

const StyledView = styled.View`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledAnimation = styled(Animated.View)``;

const Details = () => {
    const progress = useSharedValue(1);
    const scale = useSharedValue(1);
    const reanimatedStyle = useAnimatedStyle(() => {
        return {
            opacity: progress.value,
            transform: [{ scale: scale.value }],
        };
    }, []);
    useEffect(() => {
        progress.value = withTiming(0.2, { duration: 5000 });
        scale.value = withRepeat(withSpring(2, { duration: 5000 }), 10, true);
    }, []);
    return (
        <StyledView>
            <StyledAnimation
                style={[
                    {
                        height: 100,
                        width: 100,
                        backgroundColor: "rgba(255, 0, 255, 1)",
                    },
                    reanimatedStyle,
                ]}
            />
        </StyledView>
    );
};

export default Details;
