import React from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, Fontisto } from '@expo/vector-icons';

import styles from './home.style';
import { ProductsRow, Welcome } from '../components';
import Carousel from '../components/home/Carousel';
import Headings from '../components/home/Headings';

const Home = () => {
  return (
    <SafeAreaView>
      <View style={styles.appBarWrapper}>
        <View style={styles.appBar}>
          <View style={{ flexDirection: 'row' }}>
            <Ionicons name="location-outline" size={24} />
            <Text style={styles.location}>Enugu</Text>
          </View>
          <View style={{ alignItems: 'flex-end' }}>
            <View style={styles.cartCount}>
              <Text style={styles.cartNumber}>8</Text>
            </View>
            <TouchableOpacity>
              <Fontisto name="shopping-bag" size={24} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ScrollView>
        <Welcome />
        <Carousel />
        <Headings />
        <ProductsRow />
        <ProductsRow />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
