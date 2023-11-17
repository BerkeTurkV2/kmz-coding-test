import React from 'react';
import { View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './InputStyles';

interface InputProps {
    iconName: string;
    placeText: string;
    value: string;
    security: boolean;
    onChangeText: (text: string) => void;
}

function Input({iconName, placeText,value,security,onChangeText}: InputProps) {
    return (
        <View style={styles.box} >
            <Icon name={iconName} size={18} color={"black"} style={styles.icon} />
            <TextInput placeholder={placeText} style={styles.input} value={value} onChangeText={onChangeText} secureTextEntry={security} />
        </View>
    )
};

export default Input;