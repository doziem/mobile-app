import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';
import fnOne from '../../assets/images/fn1.jpg';
import FnTwo from '../../assets/images/fn2.jpg';
import FnThree from '../../assets/images/fn3.jpg';
import { COLORS } from '../../constants';

const Carousel = () => {
  const sliders = [
    'https://res.cloudinary.com/dt6mlbsv5/image/upload/v1691304920/tjkj4mksrtlb2nwa8edg.jpg',
    'https://res.cloudinary.com/dt6mlbsv5/image/upload/v1691304888/abwapjotutfbmg0m07ca.jpg',
    'https://res.cloudinary.com/dt6mlbsv5/image/upload/v1691304839/qjwbw1wqddvevpsllk8l.jpg',
  ];
  return (
    <View style={styles.carouselContainer}>
      <SliderBox
        images={sliders}
        dotColor={COLORS.primary}
        inactiveDotColor={COLORS.secondary}
        ImageComponentStyle={{
          borderRadius: 15,
          width: '95%',
          marginTop: 15,
        }}
        autoplay
        circleLoop
      />
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  carouselContainer: {
    flex: 1,
    alignItems: 'center',
  },
});
