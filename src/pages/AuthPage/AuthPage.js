import { useNavigate } from "react-router-native";
import { View, Pressable, Text } from "react-native";
import { useAuthRequest } from "expo-auth-session";
import { useEffect } from "react";
const config = {
    authorizationEndpoint: "https://api.intra.42.fr/oauth/authorize",
    tokenEndpoint: "https://api.intra.42.fr/oauth/token",
};
const AuthPage = () => {
    let navigate = useNavigate();
    const [request, response, promptAsync] = useAuthRequest(
        {
            clientId:
                "192a1edb35080133cfec1769349a81734b35f9e901e8945f41c4df83ff3aab73",
            redirectUri: "exp://pikala",
        },
        config
    );
    useEffect(() => {
        if (response?.type == "success") navigate("/home");
        // Navigate("")
    }, [response]);
    return (
        <View
            style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Pressable
                onPress={() => {
                    promptAsync();
                }}
            >
                <Text style={{ fontSize: 40 }}>Authorize</Text>
            </Pressable>
        </View>
    );
};
export default AuthPage;
