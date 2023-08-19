import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import React from 'react';
import { COLORS, SIZES } from '../../constants';
import ProductCardView from './ProductCardView';
import useFetch from '../../hook/useFetch';

const ProductsRow = () => {
  const { data, isLoading, error } = useFetch();
  console.log('DATA::', data);
  return (
    <View style={{ marginTop: 5, marginHorizontal: 12 }}>
      {isLoading ? (
        <ActivityIndicator size={SIZES.xxLarge} color={COLORS.primary} />
      ) : error ? (
        <Text> Something went wrong</Text>
      ) : (
        <FlatList
          data={data}
          keyExtractor={({ item }) => item?._id}
          renderItem={({ item }) => <ProductCardView item={item} />}
          horizontal
          contentContainerStyle={{ columnGap: SIZES.medium }}
        />
      )}
    </View>
  );
};

export default ProductsRow;
