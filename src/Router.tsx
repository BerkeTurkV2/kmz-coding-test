import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

import Icon from "react-native-vector-icons/Ionicons";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './pages/Login/Login';
import TabNavigator from './navigators/TabNavigator';
import Menu from './pages/Menu/Menu';
import CategoryDetails from './pages/CategoryDetails/CategoryDetails';

const Stack = createNativeStackNavigator();

function Router() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
            headerBackVisible: false,
            headerTitle: () => (
                <View style={styles.container}>
                    <TouchableOpacity onPress={() => null}>
                        <Icon name="menu-sharp" size={32} color="#ff5a00" style={styles.iconMenu} />
                    </TouchableOpacity>
                    <Image source={require("./images/logo.png")} style={styles.image} />
                </View>
            ),
            headerRight: () => (
                <View style={styles.container}>
                    <Text style={styles.location}>Bayraklı</Text>
                    <Icon name="navigate" size={20} color="#3232ff" style={styles.iconNav} />
                    <View style={styles.separator} />
                    <Icon name="notifications-outline" size={24} color="black" style={styles.iconNoti} />
                </View>
            ),
        }}
            >
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="TabNavigator" component={TabNavigator} options={{ headerShown: false }} />
                <Stack.Screen name="Menu" component={Menu}/>
                <Stack.Screen name="CategoryDetails" component={CategoryDetails} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
    },
    iconMenu: {
        marginRight: 10
    },
    iconNav: {
        marginRight: 10
    },
    iconNoti: {
        marginRight: 20
    },
    image: {
        height: 50,
        width: 120
    },
    location: {
        color: "black",
        marginRight: 5,
        fontWeight: "bold"
    },
    separator: {
        height: 30,
        borderWidth: 0.8,
        borderColor: "black",
        marginRight: 10,
    }
});

export default Router;
