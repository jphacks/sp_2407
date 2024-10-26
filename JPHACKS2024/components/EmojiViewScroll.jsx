// App.js
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
import { useRouter, Href } from 'expo-router'; // useRouter를 import


export function EmojiViewScroll({pages = [], action}) {
  const [scrollX] = useState(new Animated.Value(0));
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter(); 
  const onViewableItemsChanged = ({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  };

  const viewabilityConfig = {
    itemVisiblePercentThreshold: 50
  };

  const renderPages = ({ item, index }) => {
    const opacity = scrollX.interpolate({
      inputRange: [(index - 1) * width, index * width, (index + 1) * width],
      outputRange: [0, 1, 0],
      extrapolate: 'clamp',
    });

    return (
      <View style={[styles.page, {justifyContent: 'center', alignItems: 'center'}]}>
        <Animated.Text style={[styles.emoji, { opacity }]}>{item.emoji}</Animated.Text>
        <Animated.Text style={[styles.title, { opacity }]}>
          {item.title}
        </Animated.Text>
        <Animated.Text style={[styles.description, { opacity }]}>
          {item.description}
        </Animated.Text>
        {index === pages.length - 1 && (
          <TouchableOpacity style={styles.button} onPress={()=>{action();}}>
            <Text color="#000" style={{fontSize : 20}}>OK</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={pages}
        renderItem={renderPages}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
        snapToInterval={width} // 페이지 크기만큼 자동 스냅
        snapToAlignment="center" // 중앙에 스냅
        decelerationRate="fast" // 스크롤 속도 감속
      />
      <View style={styles.paginationContainer}>
        <View style={styles.dotsContainer}>
          {pages.map((_, i) => (
            <View
              key={i}
              style={[
                styles.dot,
                { backgroundColor: i === currentIndex ? '#3498db' : '#ccc' }
              ]}
            />
          ))}
        </View>
      </View>
    </View>
  );
};
