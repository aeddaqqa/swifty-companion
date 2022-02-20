import {
    StyledHome,
    StyledHeaderBox,
    StyledHeaderText,
    StyledFormBox,
    StyledFormInput,
    StyledFormSubmit,
    StyledFormSubmitText,
} from "./HomePage.Style";

const Home = () => {
    return (
        <StyledHome>
            <StyledHeaderBox>
                <StyledHeaderText>Swifty Companion</StyledHeaderText>
            </StyledHeaderBox>
            <StyledFormBox>
                <StyledFormInput
                    placeholderTextColor="#98BAE7"
                    placeholder="Login"
                />
                <StyledFormSubmit>
                    <StyledFormSubmitText>search</StyledFormSubmitText>
                </StyledFormSubmit>
            </StyledFormBox>
        </StyledHome>
    );
};

export default Home;
