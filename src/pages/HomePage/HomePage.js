import {
    StyledHome,
    StyledHeaderBox,
    StyledHeaderText,
    StyledFormBox,
    StyledFormInput,
    StyledFormSubmit,
    StyledFormSubmitText,
    StyledLoader,
} from "./HomePage.Style";
import { Link, useNavigate } from "react-router-native";
import { useEffect, useState } from "react";
import { getUserData } from "../../utils/helpers";
const Home = () => {
    let navigate = useNavigate();
    const [accessToken, setAccessToken] = useState(null);
    const [load, setLoad] = useState(false);
    const [text, setText] = useState("");
    // useEffect(() => {
    //     getAccessToken().then((res) => {
    //         setAccessToken(res);
    //     });
    // }, []);
    const getUser = () => {
        setLoad(true);
        if (text) {
            getUserData(text.trim())
                .then((res) => {
                    navigate("/details", { state: res });
                })
                .catch((err) => {
                    alert("not found");
                    setLoad(false);
                });
        }
    };
    return (
        <StyledHome>
            <StyledHeaderBox>
                <StyledHeaderText>Swifty Companion</StyledHeaderText>
            </StyledHeaderBox>
            {!load ? (
                <StyledFormBox>
                    <StyledFormInput
                        placeholderTextColor="#98BAE7"
                        placeholder="Login"
                        onChangeText={setText}
                        value={text}
                    />
                    <StyledFormSubmit>
                        <StyledFormSubmitText onPress={getUser}>
                            Search
                        </StyledFormSubmitText>
                    </StyledFormSubmit>
                </StyledFormBox>
            ) : (
                <StyledLoader size="large" color="#98BAE7" />
            )}
        </StyledHome>
    );
};

export default Home;
