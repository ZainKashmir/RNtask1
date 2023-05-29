import {Animated, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useRef} from 'react';

export default function ProgressBar({progress}) {
  const fillAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fillAnimation, {
      toValue: progress,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, [progress]);

  const fillWidth = fillAnimation.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '100%'],
    extrapolate: 'clamp',
  });

  return (
    <View style={styles.progressBar}>
      <View style={styles.innerBorder}>
        <Animated.View style={[styles.fill, {width: fillWidth}]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  progressBar: {
    width: 200,
    height: 10,
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 4,
    overflow: 'hidden',
  },
  innerBorder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 4,
    margin: 4,
    overflow: 'hidden',
  },
  fill: {
    height: '100%',
    backgroundColor: '#69c',
  },
});
