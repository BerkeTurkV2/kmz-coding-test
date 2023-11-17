import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Main from "../pages/Main/Main";
import Search from "../pages/Search/Search";
import Cart from "../pages/Cart/Cart";
import Discount from "../pages/Discount/Discount";
import Profile from "../pages/Profile/Profile";
import Menu from "../pages/Menu/Menu";
import CategoryDetails from "../pages/CategoryDetails/CategoryDetails";

import Icon from "react-native-vector-icons/Ionicons";

import styles from "./TabNavigatorStyles";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MainStack = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Main" component={Main} options={{headerShown: false}} />
            <Stack.Screen name="CategoryDetails" component={CategoryDetails} options={{headerShown: false}} />
        </Stack.Navigator>
    )
}


const TabNavigator = ({navigation}: any) => (
    <Tab.Navigator
        screenOptions={{
            tabBarActiveBackgroundColor: "#cc4800",
            tabBarShowLabel: false,
            tabBarInactiveBackgroundColor: "#ff5a00",
            headerTitle: () => (
                <View style={styles.container}>
                    <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
                        <Icon name="menu-sharp" size={32} color="#ff5a00" style={styles.iconMenu} />
                    </TouchableOpacity>
                    <Image source={require("../images/logo.png")} style={styles.image} />
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
        }}>
        <Tab.Screen name="MainStack" component={MainStack}
            options={
                {
                    tabBarIcon: () => (<Icon name="home-outline" size={26} color={"white"} />),
                    tabBarShowLabel: false,
                }
            } />
        <Tab.Screen name="Search" component={Search}
            options={
                {
                    tabBarIcon: () => (<Icon name="search" size={26} color={"white"} />),
                }
            } />
        <Tab.Screen name="Cart" component={Cart}
            options={
                {
                    tabBarIcon: () => (<Icon name="cart-outline" size={26} color={"white"} />),
                }
            } />
        <Tab.Screen name="Discount" component={Discount}
            options={
                {
                    tabBarIcon: () => (<Icon name="pricetags-outline" size={24} color={"white"} />),
                }
            } />
        <Tab.Screen name="Profile" component={Profile}
            options={
                {
                    tabBarIcon: () => (<Icon name="person-circle-outline" size={26} color={"white"} />),
                }
            } />
    </Tab.Navigator>
);
/*
const AppNavigator = ({navigation}: any) => (
    <Stack.Navigator>
        <Stack.Screen
            name="TabNavigator"
            component={TabNavigator}
            options={{ headerShown: false }} 
        />
        <Stack.Screen
            name="Menu"
            component={Menu}
            options={{
                headerTitle: () => (
                    <View style={styles.container}>
                        <TouchableOpacity onPress={() => navigation.navigate('Main')}>
                            <Icon name="menu-sharp" size={32} color="#ff5a00" style={styles.iconMenu} />
                        </TouchableOpacity>
                        <Image source={require("../images/logo.png")} style={styles.image} />
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
                headerBackVisible: false,
            }}
        />
        <Stack.Screen
            name="CategoryDetails"
            component={CategoryDetails}
            options={{
                headerTitle: () => (
                    <View style={styles.container}>
                        <TouchableOpacity onPress={() => navigation.navigate('Main')}>
                            <Icon name="menu-sharp" size={32} color="#ff5a00" style={styles.iconMenu} />
                        </TouchableOpacity>
                        <Image source={require("../images/logo.png")} style={styles.image} />
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
                headerBackVisible: false,
            }}
        />
    </Stack.Navigator>
);
*/

export default TabNavigator;

