// screens/Tutorials.tsx
import React from 'react';
import { View, Text, Button } from 'react-native';

export default function Tutorials({ navigation  }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to the Tutorials Screen!</Text>
      <Button
        title="확인"
        onPress={() => navigation.navigate('mainScreen')} // OtherScreen으로 이동
      />
    </View>
  );
}