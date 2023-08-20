import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import React from 'react';
import { COLORS, SIZES } from '../../constants';
import ProductCardView from './ProductCardView';
import useFetch from '../../hook/useFetch';

const ProductsRow = () => {
  const { data, isLoading, error } = useFetch();
  return (
    <View style={{ marginTop: 5, marginHorizontal: 1 }}>
      {isLoading ? (
        <ActivityIndicator size={SIZES.xxLarge} color={COLORS.primary} />
      ) : error ? (
        <Text> Something went wrong</Text>
      ) : (
        <FlatList
          data={data}
          initialNumToRender={3}
          keyExtractor={({ item }) => item?._id}
          renderItem={({ item }) => <ProductCardView item={item} />}
          horizontal
          contentContainerStyle={{ columnGap: SIZES.small }}
        />
      )}
    </View>
  );
};

export default ProductsRow;
