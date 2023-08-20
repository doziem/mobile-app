import { Image, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

import styles from './searchProduct.style';

const SearchProducts = ({ item }) => {
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity
        style={styles.container}
        onPress={() => navigation.navigate('productDetails', { item })}
      >
        <View style={styles.searchImage}>
          <Image source={{ uri: item?.imageUrl }} style={styles.productImg} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.productTitle}>{item?.title}</Text>
          <Text style={styles.supplier}>{item?.supplier}</Text>
          <Text style={styles.supplier}>{item?.price}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SearchProducts;
