import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';

import Icon from "react-native-vector-icons/Ionicons";

import styles from "./CategoryDetailsStyles";

const CategoryDetails = ({ route }) => {
    const [categories, setCategories] = useState([]);
    const [subCategories, setSubCategories] = useState([]);

    const { categoryId } = route.params;
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedSubCategory, setSelectedSubCategory] = useState(null);

    useEffect(() => {
        // JSON'dan kategorileri al
        const products = require('../../json/product.json');
        setCategories(products.categories);
    }, []);

    useEffect(() => {
        if (categoryId && categories.length > 0) {
            // categoryId'ye sahip kategoriyi bul
            const category = categories.find(cat => cat.id === categoryId);
            setSelectedCategory(category);
            if (category && category.subcategories) {
                setSubCategories(category.subcategories);
                if (category.subcategories.length > 0) {
                    setSelectedSubCategory(category.subcategories[0]);
                }
            } else {
                setSubCategories([]);
            }
        }
    }, [categoryId, categories]);

    const renderCategoryItem = ({ item }) => (
        <View style={styles.categoryItem}>
            <Image source={{ uri: item.image }} style={styles.categoryImage} />
            <Text style={styles.categoryName}>{item.name}</Text>
        </View>
    );

    const renderSubCategoryItem = ({ item, index }) => (
        <TouchableOpacity onPress={() => handleSubCategoryPress(item)}>
            <View style={[styles.subCategoryBox, index === 0 ? styles.firstSubCategoryBox : null]}>
                <Text style={[styles.categoryName, index === 0 ? styles.firstSubCategoryName : null]}>{item.name}</Text>
            </View>
        </TouchableOpacity>
    );

    const renderProductItem = ({ item }) => (
        <View style={styles.productItemBox}>
            <Icon style={styles.productIcon} name='add-circle' size={28} color={"#dce2e5"} />
            <Image source={{ uri: item.image }} style={styles.productImage} resizeMode='contain' />
            <Text style={styles.productPrice}>{item.price}</Text>
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productName}>{item.weight}</Text>
        </View>
    );

    const handleSubCategoryPress = (subCategory) => {
        setSelectedSubCategory(subCategory);
    };

    return (
        <View style={{ flex: 1, backgroundColor: "white" }} >
            <View style={styles.container} >
                <FlatList
                    data={categories}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={renderCategoryItem}
                    horizontal
                />
                <View style={styles.separator} />
                {selectedCategory && (
                    <>
                        <Text style={styles.mainCategoryName}>{selectedCategory.name} Ürünleri</Text>
                    </>
                )}
                <FlatList
                    data={subCategories}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={renderSubCategoryItem}
                    horizontal
                />
            </View>
            <View>
                {selectedSubCategory && selectedSubCategory.products && (
                    <FlatList
                        data={selectedSubCategory.products}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={renderProductItem}
                        numColumns={3}
                    />
                )}
            </View>
        </View>

    );
};

export default CategoryDetails;