import { EmojiTitle } from '@/components/EmojiTitle';
import Constants from 'expo-constants';
import React, { useEffect, useState, useRef } from 'react';
import { Image, View, Text, TouchableOpacity, Dimensions, FlatList } from 'react-native';
import { styles } from '@/constants/styles';
import { router } from 'expo-router';
import { useFocusEffect } from '@react-navigation/native';
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState, AppDispatch } from '@/context/AppStateProvider';
import apiClient from '@/util/apiClient';

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
const useAppDispatch = () => useDispatch<AppDispatch>();

const voteTeam = async (_id: string, points: number, team: string) => {
  try {
    const teamsData = await apiClient.stations._stationId(_id).vote.$post({
      body: { team, points },
    });
    console.log('Teams Data:', teamsData);
    return teamsData;
  } catch (error) {
    console.error('Failed to vote team information:', error);
    return null;
  }
};

const getPhotosInfo = async (_id: string) => {
  try {
    const photosURLs = await apiClient.stations._stationId(_id).photosURL.$get();
    const baseUrl = process.env.EXPO_PUBLIC_BASE_URL_STATIC || "";
    return photosURLs.map((url: string, index: number) => ({
      id: `${index}`,
      uri: baseUrl + url,
    }));
  } catch (error) {
    console.error('Failed to get photos information:', error);
    return null;
  }
};

const App = () => {
  const dispatch = useAppDispatch();
  const nearestStation = useAppSelector((state) => state.nearestStation);
  const myTeam = useAppSelector((state) => state.team);

  const screenWidth = Dimensions.get('window').width;
  const imageSize = screenWidth / 3;
  const [photosInfo, setPhotosInfo] = useState<any[]>([]);
  const [currentStation, setCurrentStation] = useState<any>(null);
  const hasFetchedData = useRef(false); // 처음 포커스를 추적하는 ref

  useFocusEffect(
    React.useCallback(() => {
      if (!hasFetchedData.current) {
        const fetchPhotosData = async () => {
          const data = await getPhotosInfo(nearestStation._id);
          if (data) setPhotosInfo(data);
        };
        const fetchVoteTeam = async () => {
          const data = await voteTeam(nearestStation._id, 10, myTeam);
          if (data) setCurrentStation(data);
        };

        fetchPhotosData();
        fetchVoteTeam();
        hasFetchedData.current = true; // 이후에는 실행되지 않도록 설정
      }
    }, [nearestStation, myTeam])
  );

  const renderItem = ({ item }: { item: { id: string; uri: string } }) => (
    <View style={styles.imageContainer}>
      <Image source={{ uri: item.uri }} style={[styles.image, { width: imageSize, height: imageSize }]} />
    </View>
  );

  return (
    <View style={styles.fullScreenView}>
      <View style={[styles.emojiTitleHeader, { marginTop: 0 }]}>
        <EmojiTitle emoji='🤑' title='やった！ポイントゲット！' animation={2} action={() => {}} />
      </View>
      <View style={[styles.containerStack, { alignItems: 'center', marginTop: -10 }]}>
        <Text style={[styles.description, { fontSize: 22 }]}>
          {nearestStation.stationName}にチェックインしたぜ！
        </Text>
        <Text style={styles.description}>
          現在Redチームポイントは{currentStation?.totalVotes?.Red ?? nearestStation.totalVotes.Red}
        </Text>
        <Text style={styles.description}>
          現在Greenチームポイントは{currentStation?.totalVotes?.Green ?? nearestStation.totalVotes.Green}
        </Text>
        <FlatList
          data={photosInfo}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={3}
          contentContainerStyle={[{ minWidth: screenWidth, maxHeight: screenWidth }]}
        />
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#ddddff', marginTop: 20 }]}
          onPress={() => router.push("/cameraPage")}
        >
          <Text style={{ fontSize: 20 }}>写真を撮影する</Text>

        </TouchableOpacity>
        <Text style={[styles.description, { fontSize: 15 }]}>
          写真を撮って追加ポイントをもらおう！
        </Text>
      </View>
    </View>
  );
};

export default App;
