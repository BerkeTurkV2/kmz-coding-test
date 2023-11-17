import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    box: {
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 12,
        margin: 10,
        width: Dimensions.get("window").width / 3,
        backgroundColor: "#ff5a00"
    },
    text: {
        justifyContent: "center",
        alignSelf: "center",
        color: "white",
        fontSize: 14,
        fontWeight: "600",
        padding: 10,
    },
    logo: {
        width: Dimensions.get("window").width / 2,
        height: 80,
    }
});