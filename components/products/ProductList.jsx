import { Text, View, ActivityIndicator, FlatList } from 'react-native';
import React from 'react';

import styles from './productList.style';
import useFetch from '../../hook/useFetch';
import { COLORS, SIZES } from '../../constants';
import ProductCardView from './ProductCardView';

const ProductList = () => {
  const { data, error, isLoading } = useFetch();
  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator color={COLORS.primary} size={SIZES.xxLarge} />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        numColumns={2}
        // initialNumToRender={4}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ProductCardView item={item} />}
        contentContainerStyle={styles.container}
        ItemSeparatorComponent={() => <View style={styles.seperator} />}
      />
    </View>
  );
};

export default ProductList;
