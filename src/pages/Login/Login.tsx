import React, { useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, Image, Alert } from 'react-native';

import LoginInput from '../../components/Input/Input';
import axios from 'react-native-axios';

import styles from './LoginStyles';

function Login({ navigation }) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post(
                'https://apiv5.akilliticaretim.com/api/v5/sf/auth/login',
                {
                    username,
                    password,
                },
                {
                    headers: {
                        GUID: '24BE-DB0E-D75E-4060',
                        'Content-Type': 'application/json',
                    },
                }
            );

            //Token lazim olursa verisi
            console.log(response.data);

            goToMainPage();

        } catch (error) {
            // Handle login error
            Alert.alert('Login Error', 'Invalid username or password');
            console.error(error);
        }
    };

    function goToMainPage() {
        navigation.navigate("TabNavigator");
    }

    return (
        <SafeAreaView style={{ flex: 1 }} >
            <View style={styles.container} >
                <Text style={{ fontSize: 18, paddingBottom: 20 }} >Hoşgeldiniz Lütfen Giriş Yapınız</Text>
                <Image source={require("../../images/logo.png")} style={styles.logo} />
                <LoginInput iconName={"person"} placeText={"Kullanıcı Adı"} value={username} security={false} onChangeText={(text) => setUsername(text)} />
                <LoginInput iconName={"key"} placeText={"Şifre"} value={password} security={true} onChangeText={(text) => setPassword(text)} />
                <TouchableOpacity onPress={handleLogin} style={styles.box}>
                    <Text style={styles.text} >Giriş Yap</Text>
                </TouchableOpacity>
                <View style={{ flexDirection: "row" }} >
                    <Text>Henüz Hesabın Yok Mu? </Text>
                    <Text style={{ color: "#ff5a00" }} >Kaydol!</Text>
                </View>

            </View>
        </SafeAreaView>
    )
};

export default Login;