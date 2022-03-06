import { useLocation } from "react-router-native";
import styled from "styled-components/native";
import { useState } from "react";

const StyledView = styled.View`
    z-index: 0;
    width: 100%;
    margin: 40px 0;
`;

const StyledUser = styled.ImageBackground`
    margin: auto;
    width: 95%;
    height: 250px;
    display: flex;
    flex-direction: row;
    border-radius: 10px;
    background-color: #aafaff;
`;

const StyledUserInfo = styled.View`
    display: flex;
    align-items: center;
    flex: 1;
`;

const StyledCoalitionInfo = styled.View`
    display: flex;
    flex: 1;
    align-items: center;
`;
const StyledUserLogin = styled.View`
    margin: 5px 0;
`;

const StyledText = styled.Text`
    font-size: 16px;
    z-index: 50;
    text-align: center;
`;
const StyledUserPhoto = styled.ImageBackground`
    width: 120px;
    height: 120px;
    background-color: #f0aa0f;
    border-radius: 100px;
    margin: 10px 0;
    overflow: hidden;
`;
const StyledUserLocation = styled.View`
    margin: 10px 0;
    height: 50px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const image = { uri: "https://reactjs.org/logo-og.png" };

const StyledData = styled.View`
    width: 95%;
    /* height: 150px; */
    /* background-color: #f0aa0f; */
    margin: auto;
    margin-top: -20px;
    padding: 0 10px;
    display: flex;
    justify-content: center;
`;

const Container = styled.View`
    margin: 20px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;

const StyledLevel = styled.View`
    height: 40px;
    border: 1px solid #000000;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    overflow: hidden;
    position: relative;
`;
const StyledFull = styled.View`
    border-radius: 20px;
    position: absolute;
    left: 0;
    width: 50%;
    height: 100%;
    background-color: #00f000;
    z-index: -10;
`;

const StyledCursusData = styled.View`
    width: 90%;
    margin: 20px auto;
`;
const StyledHead = styled.View`
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    border: 1px solid #000000;
    position: relative;
    border-radius: 10px;
    overflow: hidden;
`;
const StyledItem = styled.Pressable`
    flex-basis: 33%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
`;
const StyledItemSelected = styled.View`
    position: absolute;
    left: 0;
    width: 35%;
    height: 100%;
    border-radius: 10px;
    background-color: #eeeeee;
    transform: translate(0px, 0);
    z-index: -10;
`;

const StyledContent = styled.FlatList``;

const Details = (props) => {
    const { state } = useLocation();
    const [index, setIndex] = useState(-1);
    const [select, setSelect] = useState(0);
    const { image_url, cursus } = state;
    // const { coalition } = cursus[2];
    // console.log(cursus[2].projects);
    return (
        <StyledView>
            <StyledUser resizeMode="cover" source={{ iru: image_url }}>
                <StyledUserInfo>
                    <StyledUserPhoto
                        resizeMode="cover"
                        source={{ uri: image_url }}
                    />
                    <StyledUserLogin>
                        <StyledText>{state.login}</StyledText>
                    </StyledUserLogin>
                    <StyledUserLocation>
                        {state.location === null ? (
                            <StyledText>Unavailabale</StyledText>
                        ) : (
                            <>
                                <StyledText>Available</StyledText>
                                <StyledText>{state.location}</StyledText>
                            </>
                        )}
                    </StyledUserLocation>
                </StyledUserInfo>
                {cursus.length > 0 && (
                    <StyledCoalitionInfo>
                        <StyledUserPhoto
                            resizeMode="cover"
                            source={{
                                uri: coalition.hascoalition
                                    ? coalition.image_url
                                    : "https://reactjs.org/logo-og.png",
                            }}
                        />
                        <StyledUserLogin>
                            <StyledText>
                                {coalition.hascoalition
                                    ? coalition.name
                                    : "nan"}
                            </StyledText>
                        </StyledUserLogin>
                        <StyledUserLocation>
                            <StyledText>
                                score :{" "}
                                {coalition.hascoalition ? coalition.score : ""}
                            </StyledText>
                            <StyledText>{cursus[2].grade}</StyledText>
                        </StyledUserLocation>
                    </StyledCoalitionInfo>
                )}
            </StyledUser>

            <StyledData>
                <Container>
                    <StyledText>wallet : {state.wallet}</StyledText>

                    <StyledText>
                        evaluation points: {state.correction_point}
                    </StyledText>
                </Container>
                {cursus.length > 0 && (
                    <>
                        <StyledLevel>
                            <StyledFull></StyledFull>
                            <StyledText>level : 1</StyledText>
                        </StyledLevel>
                        <StyledCursusData>
                            <StyledHead>
                                <StyledItem>
                                    <StyledText
                                        onPress={() => {
                                            console.log(0);
                                            setSelect(0);
                                        }}
                                    >
                                        cursus
                                    </StyledText>
                                </StyledItem>
                                <StyledItem
                                    onPress={() => {
                                        console.log(1);
                                        setSelect(1);
                                    }}
                                >
                                    <StyledText>projects</StyledText>
                                </StyledItem>
                                <StyledItem
                                    onPress={() => {
                                        console.log(2);
                                        setSelect(2);
                                    }}
                                >
                                    <StyledText>skills</StyledText>
                                </StyledItem>
                                <StyledItemSelected />
                            </StyledHead>
                            <StyledContent></StyledContent>
                        </StyledCursusData>
                    </>
                )}
            </StyledData>
        </StyledView>
    );
};

export default Details;
