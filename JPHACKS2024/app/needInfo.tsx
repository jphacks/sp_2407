import React, { useEffect, useState } from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';
import * as Device from 'expo-device';
import * as Location from 'expo-location';
import { EmojiView } from '@/components/EmojiView';
import { styles } from '@/constants/styles';
import MapView, { Marker } from 'react-native-maps';
import { router } from 'expo-router';

import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState, AppDispatch } from '@/context/AppStateProvider';
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
const useAppDispatch = () => useDispatch<AppDispatch>();

export default function needInfo() {
  const dispatch = useAppDispatch();
  const isTutorialSeen = useAppSelector((state) => state.isTutorialSeen);

  // Change type of errorMsg to string | null
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const homeCoordinates = useAppSelector(state => state.homeCoordinates);
  const [markerLocation, setMarkerLocation] = useState({
    latitude: 43.072612,
    longitude: 141.342107,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });

  useEffect(() => {
    (async () => {
      if (Platform.OS === 'android' && !Device.isDevice) {
        setErrorMsg(
          'Oops, this will not work on Snack in an Android Emulator. Try it on your device!'
        );
        return;
      }
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      dispatch({ type: 'SET_HOME_COORDINATES', payload: location })
      setMarkerLocation(
        {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }
      );
    })();
  }, []);

  let description = '家の情報を知る必要があります。';
  const dynamicDescription = homeCoordinates ? (
    <View>
      <MapView style={[styles.map, {marginTop: 20}]}
        initialRegion={{
          latitude: homeCoordinates.coords.latitude,
          longitude: homeCoordinates.coords.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
         <Marker 
         coordinate={{
          latitude: homeCoordinates.coords.latitude,
          longitude: homeCoordinates.coords.longitude,
        }} title='Marker' />
      </MapView>
    </View>

  ) : (<Text>ローディング中</Text>);

  return (
    <View style={styles.container}>
      <EmojiView 
        emoji='🗺️' 
        title='あなたの位置は？' 
        subtext='ここであってますか？'
        description={dynamicDescription}
        action={()=>{
          dispatch({ type: 'SET_TUTORIALS_SEEN', payload: true });
        router.push('/chooseTeam');
      }}
        confirmText='ここです！'
      />
    </View>
  );
}
