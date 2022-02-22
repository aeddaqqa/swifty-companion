import axios from "axios";
const client_id =
    "192a1edb35080133cfec1769349a81734b35f9e901e8945f41c4df83ff3aab73";
const client_secret =
    "f59565541acaf37c558f940461118e7b72322b36871b9618906c74d5a8fa884a";

import AsyncStorage from "@react-native-async-storage/async-storage";

const storeDataToStorage = async (value) => {
    try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem("accessToken", jsonValue);
    } catch (e) {
        // saving error
    }
};

const getDataFromStorage = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem("accessToken");
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        console.log(e);
    }
};

export const getNewAccessToken = () => {
    return new Promise((resolve, reject) => {
        axios
            .post("https://api.intra.42.fr/oauth/token", {
                grant_type: "client_credentials",
                client_id,
                client_secret,
            })
            .then((res) => resolve(res.data))
            .catch((err) => reject(err));
    });
};

export const getAccessToken = () => {
    return new Promise(async (resolve, reject) => {
        const data = await getDataFromStorage();
        if (data) {
            {
                const diffTime =
                    data.created_at + data.expires_in - Date.now() / 1000;
                if (diffTime > 0) resolve(data);
                else
                    getNewAccessToken()
                        .then((res) => {
                            storeDataToStorage(res);
                            resolve(res);
                        })
                        .catch((err) => reject(err));
            }
        } else {
            getNewAccessToken()
                .then((res) => {
                    storeDataToStorage(res);
                    resolve(res);
                })
                .catch((err) => reject(err));
        }
    });
};
