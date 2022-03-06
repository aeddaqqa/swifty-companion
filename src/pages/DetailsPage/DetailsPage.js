import { useLocation } from "react-router-native";
import { useState } from "react";
import { StyledView } from "./DetailsPage.Style";

const Details = (props) => {
    const { state } = useLocation();
    console.log(state);
    return <StyledView></StyledView>;
};

export default Details;
