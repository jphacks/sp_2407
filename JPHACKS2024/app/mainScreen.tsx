import { EmojiTitle } from '@/components/EmojiTitle';
import Constants from 'expo-constants';
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { styles } from '@/constants/styles';
import { HatenaBox } from '@/components/HatenaBox';
import { router } from 'expo-router';
import MapView from 'react-native-maps';

import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState, AppDispatch } from '@/context/AppStateProvider';
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
const useAppDispatch = () => useDispatch<AppDispatch>();

const toRadians = (degrees:number) => {
  return degrees * (Math.PI / 180);
};

// ２地点間の距離を計算する関数（Haversine公式）
const calculateDistance = (lat1:number, lon1: number, lat2: number, lon2:number) => {
  const R = 6371; // 地球の半径（km）
  
  // 緯度・経度の差を計算
  const dLat = toRadians(lat2 - lat1);
  const dLon = toRadians(lon2 - lon1);
  
  // 出発地点と到着地点のラジアン
  const radLat1 = toRadians(lat1);
  const radLat2 = toRadians(lat2);
  
  // Haversineの公式
  const a = 
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(radLat1) * Math.cos(radLat2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c; // 距離を計算
  
  return distance;
};

const App = () => {
  
  const dispatch = useAppDispatch();
  const team = useAppSelector((state) => state.team);
  const redEmoji = useAppSelector((state) => state.teamRedEmoji);
  const greenEmoji = useAppSelector((state) => state.teamGreenEmoji);
  return (
    <View style={styles.fullScreenView}>
      <View style={styles.emojiTitleHeader}>
        <EmojiTitle emoji='👋' title='こんにちは！' animation={2} action={()=>{dispatch({ type: 'SET_TUTORIALS_SEEN', payload: false });}}/>
      </View>
      <View style={[styles.containerStack, {alignSelf: 'center'}]}>
        <Text style={{fontSize: 25}}>
          あなたは{
            team=="RED"?redEmoji:greenEmoji
          }チームです。
        </Text>
      </View>
      <View style={[styles.containerStack]}>
        <HatenaBox answer='博物館' availableIndex={[false, false, false]}></HatenaBox>
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
          <Text style={{fontSize: 15, alignItems: "flex-start", marginTop: 5}}>
            あなたから
          </Text>
        </View>

      </View>
      <View style={[styles.containerStack, {alignItems: 'center', marginLeft: 0}]}>
          <TouchableOpacity style={[styles.button, {backgroundColor: '#ddddff', marginTop: -10}]} onPress={() => router.push("/checkIn")}>
            <Text  style={{fontSize : 20}}>チェックインする</Text>
          </TouchableOpacity>
      </View>
    </View>

  );
};

export default App;
