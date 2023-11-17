import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './MenuStyles';

const Menu = ({navigation}) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {

    const products = require('../../json/product.json');
    
    setCategories(products.categories);
  }, []);

  const navigateToCategoryDetails = (categoryId) => {
    navigation.navigate('CategoryDetails', { categoryId });
  };

  const renderCategoryItem = ({ item, index }) => {
    let textColor = 'black';
    let fontSize = 16;

    if (index === categories.length - 1) {
      textColor = 'green'; // Son kategori indirim olan
      fontSize = 19;
    } else if (index === categories.length - 2) {
      textColor = '#ff5a00';
      fontSize = 19; // Sondan önceki kategori basdas ürünleri
    }

    return (
      <TouchableOpacity onPress={() => navigateToCategoryDetails(item.id)}>
      <View style={styles.container}>
        <Text style={{ ...styles.text, color: textColor, fontSize }}>{item.name}</Text>
        <Icon style={styles.icon} name="chevron-forward-outline" size={22} color="black" />
      </View>
    </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={categories}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderCategoryItem}
    />
  );
};

export default Menu;
