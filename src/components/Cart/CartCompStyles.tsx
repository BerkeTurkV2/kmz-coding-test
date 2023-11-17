import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    container: {
        flexDirection: "row",
        borderBottomWidth: 1,
        backgroundColor: "white",
        borderColor: "#c2edff"
    },
    image: {
        flex: 1,
        height: 60,
        width: 60,
        margin: 20,
    },
    box: {
        flex: 2,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    underBox: {
        flexDirection: "row",
    },
    productName: {
        fontWeight: "700",
        paddingBottom: 15,
    },
    icon1: {
        paddingHorizontal: 12,
        elevation:20,
        shadowColor: "gray"
    },
    icon2: {
        alignSelf: "flex-end",
        paddingRight: 33,
        paddingBottom: 10
    },
    price: {
        color: "#ff5a00",
        fontSize: 18,
        fontWeight: "bold",
    },
    productWeight: {
        fontWeight: "700",
    },
});