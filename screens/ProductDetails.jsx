import { Image, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import styles from './productDetails.style';
import { COLORS } from '../constants';

const ProductDetails = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.upperRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-circle" size={34} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}}>
          <Ionicons name="heart" size={34} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
      <Image
        source={{
          uri: 'https://res.cloudinary.com/dt6mlbsv5/image/upload/v1691304920/tjkj4mksrtlb2nwa8edg.jpg',
        }}
        style={styles.image}
      />

      <View style={styles.details}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>Product</Text>
          <View style={styles.priceWrapper}>
            <Text style={styles.price}>$104.99</Text>
          </View>
        </View>
        <View style={styles.ratingRow}>
          <View style={styles.rating}>
            {[1, 2, 3, 4, 5].map((index) => (
              <Ionicons name="star" key={index} size={24} color="gold" />
            ))}
            <Text>(4.5)</Text>
          </View>
          <View style={styles.rating}>
            {[1, 2, 3, 4, 5].map((index) => (
              <Ionicons name="star" key={index} size={24} color="gold" />
            ))}
            <Text>(4.5)</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProductDetails;
