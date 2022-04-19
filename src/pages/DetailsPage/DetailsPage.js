import { useLocation } from "react-router-native";
import {
    StyledView,
    StyledUserInfo,
    StyledProfileImage,
    StyledInfoBox,
    StyledProfileImageContainer,
    StyledText,
} from "./DetailsPage.Style";
import { View } from "react-native";
import { useState } from "react";

const Details = (props) => {
    const { state } = useLocation();
    const [cursusIndex, setCursusIndex] = useState(0);
    // console.log(state.image_url);
    return (
        <StyledView>
            <StyledUserInfo>
                <StyledProfileImageContainer>
                    <StyledProfileImage
                        source={{ uri: state.image_url }}
                        resizeMode="cover"
                    />
                </StyledProfileImageContainer>
                <StyledInfoBox>
                    <StyledText>{state.login}</StyledText>
                    {state.location ? (
                        <View>
                            <StyledText>Available</StyledText>
                            <StyledText>{state.location}</StyledText>
                        </View>
                    ) : (
                        <StyledText>Unavailabale</StyledText>
                    )}
                    <StyledText>
                        Evaluation points : {state.correction_point}
                    </StyledText>
                    <StyledText>Wallet : {state.wallet}</StyledText>
                </StyledInfoBox>
            </StyledUserInfo>
        </StyledView>
    );
};

export default Details;
