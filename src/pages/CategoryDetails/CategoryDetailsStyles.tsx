import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: "white",
        shadowColor: "blue",
        elevation: 8,
    },
    categoryItem: {
        marginHorizontal: 12,
        alignItems: 'center',
    },
    categoryImage: {
        width: 50,
        height: 50,
        borderRadius: 10,
    },
    categoryName: {
        marginTop: 8,
        paddingBottom: 10,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    mainCategoryName: {
        marginTop: 8,
        marginBottom: 8,
        textAlign: 'center',
        fontWeight: 'bold',
        color: "#ff5a00",
        fontSize: 16,
    },
    separator: {
        borderBottomWidth: 0.2,
        borderColor: '#dce2e5',
        marginVertical: 5,
    },
    subCategoryBox: {
        backgroundColor: "#dce2e5",
        borderWidth: 0.2,
        borderColor: "white",
        borderRadius: 16,
        paddingHorizontal: 22,
        marginLeft: 10,
        marginBottom: 5,
    },
    firstSubCategoryBox: {
        backgroundColor: '#ff5a00',
    },
    firstSubCategoryName: {
        color: "white",
    },
    productItemBox: {
        width: Dimensions.get("window").width /3,
        //borderWidth: 1,
        backgroundColor: "white",
        padding: 4,
        marginTop: 10,
    },
    productImage: {
        alignSelf: "center",
        width: 90,
        height: 90,
        borderRadius: 10,
    },
    productName: {
        textAlign: "center",
        fontWeight: "bold",
    },
    productPrice: {
        textAlign: "center",
        color: "#ff5a00",
        fontWeight:"bold",
        fontSize: 16,
    },
    productIcon: {
        alignSelf: "flex-end",
        paddingRight: 8,
    }
});