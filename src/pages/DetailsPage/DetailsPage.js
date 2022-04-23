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
    StyledLevel,
    StyledFull,
    StyledTextLevel,
    StyledFlatList,
} from "./DetailsPage.Style";
import { View, StyleSheet, Text, FlatList } from "react-native";
import { useEffect, useState } from "react";
import SwitchSelector from "react-native-switch-selector";
import SelectDropdown from "react-native-select-dropdown";
import { SvgUri } from "react-native-svg";
import { Theme } from "../../utils/constants";

const Skills = ({ item }) => (
    <View style={styles.item}>
        <StyledFlatList>{item.name}</StyledFlatList>
        <StyledFlatList>{item.level}</StyledFlatList>
    </View>
);
const Projects = ({ item }) => {
    let final_mark = !item.final_mark ? 0 : item.final_mark;
    let finalMarkColor = item["validated?"] ? "#32CD32" : "#ff0000";
    return (
        <View style={styles.item}>
            <StyledFlatList>{item.project.name}</StyledFlatList>
            {/* <StyledText>{item.status}</StyledText> */}
            {item.status == "finished" ? (
                <StyledFlatList style={{ color: finalMarkColor }}>
                    {final_mark}
                </StyledFlatList>
            ) : (
                <StyledFlatList>{item.status}</StyledFlatList>
            )}
        </View>
    );
};

const Details = (props) => {
    const { state } = useLocation();
    const [cursus, setCursus] = useState(null);
    const [selectedData, setSelectedData] = useState("p");

    const renderSkills = ({ item }) => <Skills item={item} />;
    const renderProjects = ({ item }) => <Projects item={item} />;
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
            <View style={styles.cursusContainer}>
                <View style={styles.dropDown}>
                    <StyledText>Cursus : </StyledText>
                    <SelectDropdown
                        defaultButtonText="Select Cursus"
                        buttonStyle={{
                            height: 40,
                            width: "60%",
                        }}
                        data={state.cursus}
                        onSelect={(selectedItem, index) => {
                            setCursus(selectedItem);
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
                            <StyledText>
                                Name : {cursus.coalition.name}
                            </StyledText>
                            <StyledText>
                                Score : {cursus.coalition.score}
                            </StyledText>
                        </>
                    )}
                </StyledCoalitionContainer>
            </View>
            {cursus && (
                <>
                    <SwitchSelector
                        initial={0}
                        onPress={(value) => setSelectedData(value)}
                        hasPadding
                        options={[
                            {
                                label: "projects",
                                value: 0,
                            },
                            {
                                label: "Skills",
                                value: 1,
                            },
                        ]}
                        testID="gender-switch-selector"
                        accessibilityLabel="gender-switch-selector"
                        style={{
                            width: "100%",
                            height: "10%",
                            paddingLeft: "10%",
                            paddingRight: "10%",
                        }}
                        buttonColor="#9CB9D8"
                        // backgroundColor="#ff00ff"
                    />
                    <StyledLevel>
                        <StyledFull
                            level={(cursus?.level + "").split(".")[1]}
                        ></StyledFull>
                        <StyledTextLevel>
                            level : {cursus.level}
                        </StyledTextLevel>
                    </StyledLevel>
                </>
            )}

            {selectedData == 1 ? (
                <StyledPikala>
                    {cursus?.skills?.length > 0 ? (
                        <FlatList
                            style={{ flex: 1 }}
                            data={cursus.skills}
                            renderItem={renderSkills}
                            keyExtractor={(item) => item.id}
                        />
                    ) : null}
                </StyledPikala>
            ) : (
                <StyledPikala>
                    {cursus?.projects?.length > 0 ? (
                        <FlatList
                            style={{ flex: 1, marginTop: 20 }}
                            data={cursus.projects}
                            renderItem={renderProjects}
                            keyExtractor={(item) => item.id}
                        />
                    ) : null}
                </StyledPikala>
            )}
        </StyledView>
    );
};

const styles = StyleSheet.create({
    dropDown: {
        display: "flex",
        flexDirection: "row",
        paddingLeft: 20,
        height: "15%",
        alignItems: "center",
        justifyContent: "center",
        flexBasis: "45%",
        flexWrap: "wrap",
    },
    item: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#FFFAFA",
        padding: 20,
        flexWrap: "wrap",
        marginVertical: 8,
        marginHorizontal: 16,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    cursusContainer: {
        marginBottom: 20,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        display: "flex",
        flexDirection: "row",
    },
});

export default Details;
