import React from 'react';
import { View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import IconX from 'react-native-vector-icons/Ionicons';
import styles from './CartCompStyles';

interface InputProps {
    img: any;
    productName: string;
    weight: string;
    price: string;
}

function Cart({ img, productName, weight,price }: InputProps) {
    return (
        <View style={styles.container} >
            <Image source={img} style={styles.image} resizeMode='contain' />
            <View style={styles.box}>
                <Text style={styles.productName} >{productName}</Text>
                <View style={styles.underBox} >
                    <Icon style={styles.icon1} name='minus' size={22} color={"#ff5a00"} />
                    <Text style={styles.productWeight} >{weight}</Text>
                    <Icon style={styles.icon1} name='plus' size={22} color={"#ff5a00"} />
                </View>
            </View>
            <View style={styles.box}>
                <IconX style={styles.icon2} name='trash' size={26} color={"#dce2e5"} />
                <Text style={styles.price} >{price}</Text>
            </View>
        </View>
    )
};

export default Cart;