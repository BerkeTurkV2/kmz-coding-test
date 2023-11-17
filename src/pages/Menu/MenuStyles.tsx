import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    container: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        padding: 10,
        borderBottomWidth:0.2
    },
    text: {
        color: "black",
        fontWeight: "bold",
        paddingLeft: 10,
        fontSize:16,
    },
    icon: {
        paddingRight: 10,
    }
});