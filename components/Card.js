import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import ProgressBar from './ProgressBar';

export default function Card() {
  const [time, setTime] = useState({
    days: 78,
    hours: 6,
    minutes: 0,
    seconds: 5,
  });

  useEffect(() => {
    // Update the timer every second
    const timerInterval = setInterval(() => {
      setTime(prevTime => {
        let {days, hours, minutes, seconds} = prevTime;
        seconds++;

        if (seconds >= 60) {
          seconds = 0;
          minutes++;

          if (minutes >= 60) {
            minutes = 0;
            hours++;

            if (hours >= 24) {
              hours = 0;
              days++;
            }
          }
        }

        return {days, hours, minutes, seconds};
      });
    }, 1000);

    return () => clearInterval(timerInterval); // Clean up the interval on unmount
  }, []);

  const formatTime = num => {
    return num < 10 ? '0' + num : num;
  };
  return (
    <View style={styles.card}>
      <View style={styles.cardTimer}>
        <Text style={styles.timerText}>{`${formatTime(time.days)} ${formatTime(
          time.hours,
        )} ${formatTime(time.minutes)} ${formatTime(time.seconds)}`}</Text>
      </View>
      <View style={styles.timeTextContainer}>
        <Text style={styles.timeText}>Days</Text>
        <Text style={styles.timeText}>Hours</Text>
        <Text style={styles.timeText}>Minutes</Text>
        <Text style={styles.timeText}>Seconds</Text>
      </View>
      <View style={styles.heart}>
        <Image source={require('../assets/image/heart.png')} />
      </View>
      <View style={styles.progress}>
        <Image source={require('../assets/image/progres.png')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
  },
  cardTimer: {
    alignItems: 'center',
  },
  timerText: {
    fontSize: 50,
    justifyContent: 'space-between',
    color: 'white',
  },
  progress: {
    marginTop: '75%',
  },
  heart: {
    marginLeft: '70%',
    marginTop: 20,
  },
  timeTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 30,
    paddingLeft: 10,
  },
  timeText: {
    fontSize: 14,
    color: 'white',
  },
});
