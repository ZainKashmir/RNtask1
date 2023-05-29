import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Swiper from 'react-native-swiper';

export default function Swipper() {
  return (
    <View style={styles.swiperContainer}>
      <Swiper
        height={100}
        autoplay={true}
        dotStyle={styles.dot}
        showsButtons={false}
        activeDotStyle={styles.activeDot}
        removeClippedSubviews={false}>
        <View style={styles.slide}>
          <View>
            <Text style={styles.text}>£5,000,000 GBP</Text>
          </View>
          <View>
            <Text style={styles.textbold}>Sotheby's</Text>
            <Text style={styles.text}>International Reality</Text>
          </View>
        </View>
        <View style={styles.slide}>
          <View>
            <Text style={styles.text}>£5,000,000 GBP</Text>
          </View>
          <View>
            <Text style={styles.textbold}>Sotheby's</Text>
            <Text style={styles.text}>International Reality</Text>
          </View>
        </View>
        <View style={styles.slide}>
          <View>
            <Text style={styles.text}>£5,000,000 GBP</Text>
          </View>
          <View>
            <Text style={styles.textbold}>Sotheby's</Text>
            <Text style={styles.text}>International Reality</Text>
          </View>
        </View>
        <View style={styles.slide}>
          <View>
            <Text style={styles.text}>£5,000,000 GBP</Text>
          </View>
          <View>
            <Text style={styles.textbold}>Sotheby's</Text>
            <Text style={styles.text}>International Reality</Text>
          </View>
        </View>
        <View style={styles.slide}>
          <View>
            <Text style={styles.text}>£5,000,000 GBP</Text>
          </View>
          <View>
            <Text style={styles.textbold}>Sotheby's</Text>
            <Text style={styles.text}>International Reality</Text>
          </View>
        </View>
        <View style={styles.slide}>
          <View>
            <Text style={styles.text}>£5,000,000 GBP</Text>
          </View>
          <View>
            <Text style={styles.textbold}>Sotheby's</Text>
            <Text style={styles.text}>International Reality</Text>
          </View>
        </View>
        <View style={styles.slide}>
          <View>
            <Text style={styles.text}>£5,000,000 GBP</Text>
          </View>
          <View>
            <Text style={styles.textbold}>Sotheby's</Text>
            <Text style={styles.text}>International Reality</Text>
          </View>
        </View>
        <View style={styles.slide}>
          <View>
            <Text style={styles.text}>£5,000,000 GBP</Text>
          </View>
          <View>
            <Text style={styles.textbold}>Sotheby's</Text>
            <Text style={styles.text}>International Reality</Text>
          </View>
        </View>
      </Swiper>
    </View>
  );
}

const styles = StyleSheet.create({
  swiperContainer: {
    marginTop: '100%',
    ...StyleSheet.absoluteFillObject,
    marginBottom: '10%',
  },
  slide: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: '30%',
    // marginTop: '15%',
    marginRight: 10,
  },
  text: {
    color: 'white',
    fontSize: 10,
  },
  textbold: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  dot: {
    backgroundColor: 'white',
    width: 20,
    height: 2,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
  },
  activeDot: {
    backgroundColor: '#FFFF80',
    width: 20,
    height: 2,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
  },
});
