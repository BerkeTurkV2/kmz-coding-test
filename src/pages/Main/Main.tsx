import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import Swiper from 'react-native-swiper';

import styles from "./MainStyles";

const products = require('../../json/product');

const images = [
    require('../../images/reklam1.png'),
    require('../../images/reklam1.png'),
    require('../../images/reklam1.png'),
    require('../../images/reklam1.png'),
];

function Main({ navigation }) {

    const navigateToCategoryDetails = (categoryId) => {
        navigation.navigate('CategoryDetails', { categoryId });
    };

    const renderCategory = ({ item }: any) => (
        <TouchableOpacity onPress={() => navigateToCategoryDetails(item.id)}>
            <View style={styles.categoryContainer}>
                <Image source={{ uri: item.image }} style={styles.categoryImage} resizeMode='contain' />
                <Text style={styles.categoryName}>{item.name}</Text>
            </View>
        </TouchableOpacity>

    );

    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <Swiper showsButtons={true} dotColor='#939799' activeDotColor='#ff5a00'>
                    {images.map((image, index) => (
                        <View key={index} style={styles.slide}>
                            <Image source={image} style={styles.reklamImg} resizeMode='cover' />
                        </View>
                    ))}
                </Swiper>
            </View>
            <View >
                <FlatList
                    data={products.categories}
                    keyExtractor={(item) => item.name}
                    renderItem={renderCategory}
                    numColumns={3}
                />
            </View>

        </View>
    )
}

export default Main;

/*

    useEffect(() => {
        
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        try {
            const response = await axios.get(
                'https://apiv5.akilliticaretim.com/api/v5/sf/product/categories?selectedCategoryId=1',
                {
                    headers: {
                        GUID: '24BE-DB0E-D75E-4060',
                    },
                }
            );

            console.log("================================");

            console.log("RESPONSE:", response.data.data);

            console.log("================================");


            // Kategori listesini güncellemek icin;
            const categoryData = response.data.data.categories; 
            setCategories(categoryData);
        } catch (error) {
            console.error(error);
        }
    };

    const renderCategoryItem = ({ item }) => (
        <TouchableOpacity onPress={() => handleCategoryPress(item)}>
            <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
                <Text>{item.categoryName}</Text>
                <Text>Product Count: {item.productCount}</Text>
            </View>
        </TouchableOpacity>
    );

    const handleCategoryPress = (category) => {
        // Kategoriye tıklandığında yapılacak işlemler gerekirse..
        console.log('Selected category:', category);
        
    };

    return (
        <View>
            <FlatList
                data={categories}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderCategoryItem}
            />
        </View>
    );
    */
