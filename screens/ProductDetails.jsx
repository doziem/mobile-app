import { Image, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import {
  Ionicons,
  SimpleLineIcons,
  MaterialCommunityIcons,
  Fontisto,
} from '@expo/vector-icons';

import styles from './productDetails.style';
import { COLORS, SIZES } from '../constants';

const ProductDetails = ({ navigation }) => {
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
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
            <TouchableOpacity onPress={() => increment()}>
              <SimpleLineIcons name="plus" size={20} />
            </TouchableOpacity>
            <Text style={{ marginHorizontal: 10 }}>{count} </Text>

            <TouchableOpacity onPress={() => decrement()}>
              <SimpleLineIcons name="minus" size={20} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.descriptionWrapper}>
          <Text style={styles.description}>Description</Text>
          <Text style={styles.descText}>
            This way, you can add the . env file to the React Project. When
            working on a large-scale project, you must add separate custom
            variables for production and development. For instance, you have the
            live API link for production and the test API link for development,
          </Text>
        </View>
        <View style={{ marginBottom: SIZES.small }}>
          <View style={styles.location}>
            <View style={{ flexDirection: 'row' }}>
              <Ionicons name="location-outline" size={20} />
              <Text> Enugu </Text>
            </View>

            <View style={{ flexDirection: 'row' }}>
              <MaterialCommunityIcons name="truck-delivery-outline" size={20} />
              <Text> Free Delivery </Text>
            </View>
          </View>
        </View>
        <View style={styles.cartRow}>
          <TouchableOpacity style={styles.cartBtn}>
            <Text style={styles.cartTitle}>BUY NOW</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.addToCart}>
            <Fontisto name="shopping-bag" size={24} color={COLORS.lightWhite} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProductDetails;
