import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from "./CartStyles";

import CartComp from "../../components/Cart/CartComp";

function Cart() {
    return (
        <View style={styles.container} >
            <Text style={styles.title} >Favorilerim</Text>
            <View style={styles.separator} />
            <CartComp img={{ uri: "https://www.aftamarket.com.tr/sebze-38-sebzeler-manav-23805-26-B.jpg" }} productName='Tarla Domates(kg)' weight='1.25 kg' price='12.25 tl' />
            <CartComp img={{ uri: "https://www.verita.com.tr/wp-content/uploads/2014/08/muz.jpg" }} productName='Çikita Muz(kg)' weight='1.25 kg' price='17.25 tl' />
            <CartComp img={{ uri: "https://www.verita.com.tr/wp-content/uploads/2014/08/elma.jpg" }} productName='Kırmızı Elma(kg)' weight='4.00 kg' price='21.25 tl' />
            <TouchableOpacity style={styles.button1}>
                <Text>İndirim Kuponu Gir Ya Da Seç</Text>
                <Icon style={{ alignSelf: "center", paddingLeft: 8 }} name='chevron-down-sharp' size={16} color={"black"} />
            </TouchableOpacity>
            <View style={{backgroundColor: "#e3e7ea",}} >
                <Text style={{padding: 8, fontSize:13, textAlign: "center"}}>Ücretsiz teslimat için 57,50 tl değerinde alışveriş yapmalısınız.</Text>
            </View>
            <Text style={{padding: 8, fontSize:12, textAlign: "center", color: "red", fontWeight: "800", marginBottom:10}}>Devam etmek için sepetinize {'\n'}
            7,25 Tl değerinde ürün eklemelisiniz.</Text>
            <View style={styles.underBox}>
                <Text style={styles.price} >50,25 tl</Text>
                <Text style={{fontSize:10}} >Tesimat ücreti: 2,50 tl</Text>
                <TouchableOpacity style={styles.button2}>
                    <Text style={{paddingHorizontal:24, color: "white", paddingVertical: 10, textAlign: "center", fontSize: 16, fontWeight: "800"}} >Sepeti Onayla</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};

export default Cart;