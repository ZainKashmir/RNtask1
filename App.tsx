import {Dimensions, ImageBackground, StyleSheet, View} from 'react-native';
import React from 'react';
import Card from './components/Card';
import Footer from './components/Footer';
import Swipper from './components/Swiper';
import BorderText from './components/BorderText';

export default function App() {
  return (
    <View>
      <View style={styles.container}>
        <ImageBackground
          style={styles.bgImage}
          source={require('./assets/image/img.png')}>
          <Card />
          <Swipper />
          <BorderText />
        </ImageBackground>
      </View>
      <Footer />
    </View>
  );
}

const deviceHeight = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    height: deviceHeight < 380 ? 250 : 500,
    marginTop: 150,
    marginHorizontal: 20,
    borderTopEndRadius: 20,
  },

  bgImage: {
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: 'hidden',
  },
});
