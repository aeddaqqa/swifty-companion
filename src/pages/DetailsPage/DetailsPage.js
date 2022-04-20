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
import { useEffect, useState } from "react";
import SwitchSelector from "react-native-switch-selector";
import SelectDropdown from "react-native-select-dropdown";

const Details = (props) => {
    const { state } = useLocation();
    const [cursus, setCursus] = useState(null);
    const [selectedData, setSelectedData] = useState("p");
    const countries = ["Egypt", "Canada", "Australia", "Ireland"];
    // console.log(state.cursus);
    useEffect(() => {
        console.log(cursus);
    }, [cursus]);
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
            <SwitchSelector
                initial={0}
                onPress={(value) => setSelectedData(value)}
                // textColor={colors.purple} //'#7a44cf'
                // selectedColor={colors.white}
                // buttonColor={colors.purple}
                // borderColor={colors.purple}
                hasPadding
                options={[
                    {
                        label: "projects",
                        value: "p",
                        // imageIcon: images.feminino,
                    }, //images.feminino = require('./path_to/assets/img/feminino.png')
                    {
                        label: "Skills",
                        value: "s",
                        // imageIcon: images.masculino,
                    }, //images.masculino = require('./path_to/assets/img/masculino.png')
                ]}
                testID="gender-switch-selector"
                accessibilityLabel="gender-switch-selector"
                style={{ width: "100%", height: 60 }}
            />
            <SelectDropdown
                style={{ width: "100%", height: 60 }}
                data={state.cursus}
                onSelect={(selectedItem, index) => {
                    setCursus(selectedItem);
                    console.log(selectedItem.name, index);
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                    // text represented after item is selected
                    // if data array is an array of objects then return selectedItem.property to render after item is selected
                    return selectedItem.name;
                }}
                rowTextForSelection={(item, index) => {
                    // text represented for each item in dropdown
                    // if data array is an array of objects then return item.property to represent item in dropdown
                    return item.name;
                }}
            />
        </StyledView>
    );
};

export default Details;
