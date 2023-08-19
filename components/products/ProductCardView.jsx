import { TouchableOpacity, Text, View, Image } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import styles from './productCardView.style';
import { COLORS } from '../../constants';

export default function ProductCardView({ item }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('productDetails')}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: 'https://res.cloudinary.com/dt6mlbsv5/image/upload/v1691304839/qjwbw1wqddvevpsllk8l.jpg',
            }}
            style={styles.image}
          />
        </View>
        <View style={styles.details}>
          <Text style={styles.title} numberOfLines={1}>
            {item?.title}
          </Text>
          <Text style={styles.supplier} numberOfLines={1}>
            Product:
          </Text>
          <Text style={styles.price}>$12,312</Text>
        </View>
        <TouchableOpacity style={styles.addBtn}>
          <Ionicons name="add-circle" size={35} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}
