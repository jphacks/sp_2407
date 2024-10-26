import { EmojiTitle } from '@/components/EmojiTitle';
import Constants from 'expo-constants';
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { styles } from '@/constants/styles';
import { HatenaBox } from '@/components/HatenaBox';
import { router } from 'expo-router';
import MapView from 'react-native-maps';
const App = () => {
  return (
    <View style={styles.fullScreenView}>
      <View style={[styles.emojiTitleHeader, {marginTop: 0}]}>
        <EmojiTitle emoji='🤑' title='チェックインしました！' animation={2} action={()=>{}}/>
      </View>
      <View style={[styles.containerStack, {alignSelf: 'center'}]}>
        <Text style={{fontSize: 25}}>
          文字を取得しました！
        </Text>
      </View>
      <View style={[styles.containerStack]}>
        <HatenaBox answer='博物館' availableIndex={[true, true, true]}></HatenaBox>
      </View>

      <View style={{alignSelf: 'center', marginTop: 40}}>
        <View style = {[styles.designContainer, {minWidth : '90%', justifyContent: 'flex-start', minHeight: '45%'}]}>
          <Text style={{fontSize: 25, alignItems: "flex-start", marginTop: 15}}>
            ヒントになれるかも？
          </Text>
          <MapView style={[styles.map, {marginTop: 5}]}
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          />
        </View>

      </View>
      <View style={[styles.containerStack, {alignItems: 'center', marginLeft: 0}]}>
          <TouchableOpacity style={[styles.button, {backgroundColor: '#ddddff', marginTop: -10}]} onPress={() => router.push("/checkIn")}>
            <Text style={{fontSize : 20}}>チェックインする</Text>
          </TouchableOpacity>
      </View>
    </View>

  );
};

export default App;
