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
  action: () => void;
};

export function EmojiButton({ emoji, title, action }: EmojiTitleProps) {
  const [waveAnimation] = useState(new Animated.Value(0)); // Create an animated value
  const router = useRouter();

  return (
    <TouchableOpacity onPress={()=>{action();}}
      style={[styles.container, styles.containerStack]}
    >
        <Animated.Text style={[styles.emojiTitle, {marginTop : 15, fontSize: 70}]}>
          {emoji}
        </Animated.Text>
        <Text style={[styles.description, ]}>{title}</Text>
    </TouchableOpacity>
  );
}