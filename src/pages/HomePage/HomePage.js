import {
    StyledHome,
    StyledHeaderBox,
    StyledHeaderText,
    StyledFormBox,
    StyledFormInput,
    StyledFormSubmit,
    StyledFormSubmitText,
} from "./HomePage.Style";
import { Link } from "react-router-native";
import { useEffect, useState } from "react";
import { getAccessToken } from "../../utils/helpers";
import axios from "axios";

const Home = () => {
    const [accessToken, setAccessToken] = useState(null);
    const [load, setLoad] = useState(true);
    const [text, setText] = useState("");
    useEffect(() => {
        getAccessToken().then((res) => {
            setAccessToken(res);
        });
    }, []);
    const getUser = () => {
        setLoad(true);
        if (text) {
            axios
                .get(`https://api.intra.42.fr/v2/users/${text.toLowerCase()}`, {
                    headers: {
                        Authorization: `Bearer ${accessToken.access_token}`,
                    },
                })
                .then((res) => console.log(res))
                .catch((err) => console.log(err));
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
                    <Link to="/details">
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
