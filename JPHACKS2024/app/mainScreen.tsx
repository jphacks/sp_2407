import { EmojiTitle } from '@/components/EmojiTitle';
import Constants from 'expo-constants';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { styles } from '@/constants/styles';
import { HatenaBox } from '@/components/HatenaBox';
import { router } from 'expo-router';
import MapView, { Marker } from 'react-native-maps';

import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState, AppDispatch } from '@/context/AppStateProvider';
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
const useAppDispatch = () => useDispatch<AppDispatch>();

import apiClient from "@/util/apiClient";
import { StationInformation } from '@/api/@types';

const getNearbyStations = async (latitude: number, longitude: number, radius = 1000) => {
  try {
    if (!apiClient || !apiClient.stations || !apiClient.stations.nearby) {
      throw new Error('API client または nearby エンドポイントが未定義です');
    }

    // クエリパラメータを設定
    const query = {
      latitude,
      longitude,
      radius, // デフォルトは1000メートル
    };

    const nearbyStationsData = await apiClient.stations.nearby.$get({ query });
    console.log('Nearby Stations Data:', nearbyStationsData);
    return nearbyStationsData; // 取得したデータを返す
  } catch (error) {
    console.error('周辺ステーション情報の取得に失敗しました:', error);
    return null; // nullを返すか、エラー処理を適切に行う
  }
};


const NearestStation = ({ stationsInfo, currentLocation } : {stationsInfo: any; currentLocation: any;}) => {
  const dispatch = useAppDispatch();
  if (!currentLocation || !currentLocation.coords) return null;

  const { latitude: currentLat, longitude: currentLon } = currentLocation.coords;

  // 가장 가까운 스テーション 찾기
  const nearestStation = stationsInfo.reduce((closest: any, station: any) => {
    const { latitude, longitude } = station.coordinates || {};
    if (latitude !== undefined && longitude !== undefined) {
      const distance = calculateDistance(currentLat, currentLon, latitude, longitude);
      return !closest || distance < closest.distance
        ? { station, distance }
        : closest;
    }
    return closest;
  }, null);
  if(nearestStation?.station)
    dispatch({ type: 'SET_NEAREST_STATION', payload: 
      nearestStation.station });
  return (
    <Text style={{ fontSize: 15, alignItems: "flex-start", marginTop: 5 }}>
      最寄りのステーションは{nearestStation ? nearestStation.station.stationName : "見つかりませんでした"}

    </Text>
  );
};

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
  const currentLocation = useAppSelector((state) => state.homeCoordinates);
  const team = useAppSelector((state) => state.team);
  const redEmoji = useAppSelector((state) => state.teamRedEmoji);
  const greenEmoji = useAppSelector((state) => state.teamGreenEmoji);

  const [stationsInfo, setStationsInfo] = useState<StationInformation[]>([]);
  const [nearest, setNearesest] = useState<StationInformation>();
  useEffect(() => {
    const fetchTeamsData = async () => {
      const data = await getNearbyStations(currentLocation.coords.latitude, currentLocation.coords.longitude);
      if (data) {
        setStationsInfo(data);       
      }
    };

    fetchTeamsData();
  }, [currentLocation]);



  return (
    <View style={styles.fullScreenView}>
      <View style={styles.emojiTitleHeader}>
        <EmojiTitle emoji='👋' title='絶好の散歩日和だ！' animation={2} action={()=>{dispatch({ type: 'SET_TUTORIALS_SEEN', payload: false });}}/>
      </View>
      <View style={[styles.containerStack, {alignSelf: 'center'}]}>
        <Text style={{fontSize: 25, alignSelf: 'center'}}>
        いまは{
            team=="Red"?redEmoji:greenEmoji
          }チームにいるぞ！
        </Text>
        <Text style={{fontSize: 20, alignSelf: 'center'}}>
          ステーションを訪問してポイントを稼ごう！
        </Text>
      </View>

      <View style={{alignSelf: 'center', marginTop: 40}}>
        <View style = {[styles.designContainer, {minWidth : '90%', justifyContent: 'flex-start', minHeight: '45%'}]}>
          <Text style={{fontSize: 20, alignItems: "flex-start", marginTop: 15}}>
          ポイントが得られる場所はここだ！
          </Text>
          <MapView style={[styles.map, {marginTop: 5}]}
            initialRegion={{
              latitude: currentLocation.coords.latitude,
              longitude: currentLocation.coords.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}>

          {stationsInfo.map((station) => {
            const id = station._id
            const latitude = station.coordinates?.latitude;
            const longitude = station.coordinates?.longitude;

            return latitude !== undefined && longitude !== undefined ? (
              <Marker
                key={id}
                coordinate={{ latitude, longitude }}
                title={station.stationName}
                pinColor={(station.totalVotes?.Red == undefined ? 0 : station.totalVotes?.Red > (station.totalVotes?.Green == undefined ? 0 : station.totalVotes?.Green))?'#ff0000': '#00ff00'}
              />
            ) : null; 
          })}
          </MapView>
          <NearestStation stationsInfo={stationsInfo} currentLocation={currentLocation}></NearestStation>
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
