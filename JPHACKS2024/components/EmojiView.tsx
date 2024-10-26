import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Dimensions,
  TouchableOpacity,
  FlatList
} from 'react-native';
import { styles } from '@/constants/styles';

const { width } = Dimensions.get('window');
import { Href, useRouter } from 'expo-router'; 

type EmojiViewProps = {
    emoji: string; // emoji는 string 타입으로 정의
    title: string;
    subtext: string;
    description: React.ReactNode; // description을 ReactNode 타입으로 변경
    action: () => void;
    confirmText: string;
  };

export function EmojiView({ emoji, title, subtext,description, action, confirmText }: EmojiViewProps) {
    const router = useRouter(); 

    return (
        <View style={[styles.page, { justifyContent: 'center', alignItems: 'center' }]}>
            <Animated.Text style={[styles.emoji]}>{emoji}</Animated.Text>
            <Animated.Text style={[styles.title]}>
                {title}
            </Animated.Text>
            {/* description을 View로 감싸기 */}
            <Animated.Text style={[styles.description]}>
                {subtext}
            </Animated.Text>
            <View>
                {description}
            </View>
            {action !== null && (
                <TouchableOpacity style={styles.button} onPress={() => {action();}}>
                    <Text style={{fontSize : 20}}>{confirmText}</Text>
                </TouchableOpacity>
            )}
        </View>
    );
}
