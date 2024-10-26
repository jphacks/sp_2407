// app/tutorials.tsx
import { Link } from "expo-router";
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Dimensions,
  TouchableOpacity,
  FlatList,
  Button
} from 'react-native';

import MapView from 'react-native-maps';

const { width } = Dimensions.get('window');
import { styles } from '@/constants/styles';

export default function Tutorials() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={styles.title}>こんにちは！</Text>
      <Text style={styles.description}>今日も頑張って家を脱出しましょう！</Text>

      <MapView style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  );
}
