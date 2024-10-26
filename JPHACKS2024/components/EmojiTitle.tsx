import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import { useRouter } from 'expo-router';
import { styles } from '@/constants/styles';
const { width } = Dimensions.get('window');

type EmojiTitleProps = {
  emoji: string;
  title: string;
  animation: number;
  action: () => void;
};

export function EmojiTitle({ emoji, title, animation, action }: EmojiTitleProps) {
  const [waveAnimation] = useState(new Animated.Value(0)); // Create an animated value
  const router = useRouter();

  useEffect(() => {
    // Start a looping animation for the waving hand
    Animated.loop(
      Animated.sequence([
        Animated.timing(waveAnimation, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true
        }),
        Animated.timing(waveAnimation, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true
        })
      ]),
      {
        iterations: animation
      }
    ).start();
  }, [waveAnimation]);

  // Interpolating the rotation effect for the hand wave
  const waveInterpolate = waveAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '-20deg'] // Slight rotation for the waving effect
  });

  return (
    <TouchableOpacity onPress={()=>{action();}}
      style={styles.container}
    >
      <View style={styles.row}>
        <Animated.Text style={[styles.emojiTitle, { transform: [{ rotate: waveInterpolate }] }, {marginTop : 15}]}>
          {emoji}
        </Animated.Text>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}