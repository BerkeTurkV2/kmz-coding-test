import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "white"
    },
    categoryContainer: {
        alignItems: 'center',
        width: Dimensions.get("window").width / 3,
        borderWidth: 0.2,
        borderColor: "#dce2e5"
    },
    categoryImage: {
        width: 60,
        height: 60,
        //borderRadius: 50,
    },
    categoryName: {
        marginTop:5,
        marginBottom:15,
        fontSize: 14,
        //fontWeight: 'bold',
        color: "black",
    },
    reklamImg: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height / 5,
    },
    wrapper: {
        flex: 1,
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});