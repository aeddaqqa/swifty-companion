import { useLocation } from "react-router-native";
import {
    StyledView,
    StyledUserInfo,
    StyledProfileImage,
    StyledInfoBox,
    StyledProfileImageContainer,
    StyledText,
    StyledCoalitionContainer,
    StyledPikala,
} from "./DetailsPage.Style";
import { View, StyleSheet, Text, FlatList } from "react-native";
import { useEffect, useState } from "react";
import SwitchSelector from "react-native-switch-selector";
import SelectDropdown from "react-native-select-dropdown";
import { SvgUri } from "react-native-svg";

const Item = ({ title }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
);

const Details = (props) => {
    const { state } = useLocation();
    const [cursus, setCursus] = useState(null);
    const [selectedData, setSelectedData] = useState("p");
    const countries = ["Egypt", "Canada", "Australia", "Ireland"];
    // console.log(state.cursus);
    useEffect(() => {
        console.log(cursus?.skills);
    }, [cursus]);
    const renderItem = ({ item }) => <Item title={item.title} />;
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
                    {cursus?.grade ? (
                        <StyledText>Grade : {cursus.grade}</StyledText>
                    ) : null}
                </StyledInfoBox>
            </StyledUserInfo>
            <View style={styles.dropDown}>
                <StyledText>Cursus : </StyledText>
                <SelectDropdown
                    defaultButtonText="Select Cursus"
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
            </View>
            <StyledCoalitionContainer
                style={{ backgroundColor: cursus?.coalition?.color }}
            >
                {cursus?.coalition?.hascoalition ? (
                    <SvgUri
                        width="50%"
                        height="50%"
                        uri={cursus.coalition.image_url}
                        fill={"#ffffff"}
                    />
                ) : (
                    <>
                        <SvgUri
                            width="60%"
                            height="60%"
                            uri="http://thenewcode.com/assets/images/thumbnails/homer-simpson.svg"
                        />
                        <StyledText>No Coalition</StyledText>
                    </>
                )}
                {cursus?.coalition?.hascoalition && (
                    <>
                        <StyledText>Name : {cursus.coalition.name}</StyledText>
                        <StyledText>
                            Score : {cursus.coalition.score}
                        </StyledText>
                    </>
                )}
            </StyledCoalitionContainer>
            <SwitchSelector
                initial={0}
                onPress={(value) => setSelectedData(value)}
                hasPadding
                options={[
                    {
                        label: "projects",
                        value: "p",
                    },
                    {
                        label: "Skills",
                        value: "s",
                    },
                ]}
                testID="gender-switch-selector"
                accessibilityLabel="gender-switch-selector"
                style={{ width: "90%", height: "10%", margin: "0% auto" }}
            />
            <StyledPikala>
                {cursus?.skills?.length > 0 ? (
                    <FlatList
                        data={cursus.projects}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                    />
                ) : null}
            </StyledPikala>
        </StyledView>
    );
};

const styles = StyleSheet.create({
    dropDown: {
        display: "flex",
        flexDirection: "row",
        marginTop: "-10%",
        width: "100%",
        height: "15%",
        alignItems: "center",
        justifyContent: "center",
    },
    item: {
        backgroundColor: "#f9c2ff",
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});

export default Details;
