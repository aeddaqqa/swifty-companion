import {
    StyledHome,
    StyledHeaderBox,
    StyledHeaderText,
    StyledFormBox,
    StyledFormInput,
    StyledFormSubmit,
    StyledFormSubmitText,
} from "./HomePage.Style";
import { Link, useNavigate } from "react-router-native";
import { useEffect, useState } from "react";
import { getAccessToken, getUserData } from "../../utils/helpers";
import axios from "axios";

const Home = () => {
    let navigate = useNavigate();
    const [accessToken, setAccessToken] = useState(null);
    const [load, setLoad] = useState(true);
    const [text, setText] = useState("");
    // useEffect(() => {
    //     getAccessToken().then((res) => {
    //         setAccessToken(res);
    //     });
    // }, []);
    const getUser = () => {
        setLoad(true);
        if (text) {
            getUserData(text)
                .then((res) => {
                    // console.log(res);
                    navigate("/details", { state: res });
                })
                .catch((err) => console.log(err.response));
        }
        setLoad(false);
    };
    return (
        <StyledHome>
            <StyledHeaderBox>
                <StyledHeaderText>Swifty Companion</StyledHeaderText>
            </StyledHeaderBox>
            <StyledFormBox>
                <StyledFormInput
                    placeholderTextColor="#98BAE7"
                    placeholder="Login"
                    onChangeText={setText}
                    value={text}
                />
                <StyledFormSubmit>
                    <Link
                        to="/details"
                        // to={{ path: "/details", state: { bigola: "makinch" } }}
                    >
                        <StyledFormSubmitText onPress={getUser}>
                            Search
                        </StyledFormSubmitText>
                    </Link>
                </StyledFormSubmit>
            </StyledFormBox>
        </StyledHome>
    );
};

export default Home;
