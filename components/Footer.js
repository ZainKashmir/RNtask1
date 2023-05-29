import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Footer() {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.Text}>£25.00 GBP</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.Text}>BUY ENTRY NOW</Text>
        <Text style={styles.subtitleText}>#ZM7861234567</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'black',
    justifyContent: 'space-between',
    width: '90%',
    marginVertical: 4,
    marginHorizontal: 20,
    paddingHorizontal: 8,
    paddingVertical: 12,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  textContainer: {
    alignItems: 'center',
  },
  Text: {
    fontSize: 15,
    color: 'white',
  },
  subtitleText: {
    fontSize: 10,
    color: 'gray',
    marginLeft: 30,
  },
});
