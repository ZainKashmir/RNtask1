import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function BorderText() {
  return (
    <View>
      <Text style={styles.bordertext}>
        SHELTON STREET COVENT GARDEN LONDON WC2H UNITED KINGDOM
      </Text>
      <Text style={styles.subText}>#ZM7861234567</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  bordertext: {
    color: 'white',
    fontSize: 10,
    marginLeft: 12,
  },
  subText: {
    fontSize: 10,
    color: 'white',
    marginLeft: '75%',
  },
});
