import { TouchableOpacity, Text, View, Image } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import styles from './productCardView.style';
import { COLORS } from '../../constants';

export default function ProductCardView({ item }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('productDetails', item)}
    >
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: item?.imageUrl,
            }}
            style={styles.image}
          />
        </View>
        <View style={styles.details}>
          <Text style={styles.title} numberOfLines={2}>
            {item?.title}
          </Text>
          <Text style={styles.supplier} numberOfLines={2}>
            Product:
          </Text>
          <Text style={styles.price}>{item?.price} </Text>
        </View>
        <TouchableOpacity style={styles.addBtn}>
          <Ionicons name="add-circle" size={35} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}
