import { Link, router } from "expo-router";
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
import { EmojiButton } from "@/components/EmojiButton";

import apiClient from "@/util/apiClient";
import { useEffect, useState } from "react";
import { TeamsResponse } from "@/api/@types";

import { RootState, AppDispatch } from '@/context/AppStateProvider';
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
const useAppDispatch = () => useDispatch<AppDispatch>();

const getTeamsInfo = async () => {
    try {
      if (!apiClient || !apiClient.teams) {
        throw new Error('API client or teams endpoint is undefined');
      }
      const teamsData = await apiClient.teams.$get();
      console.log('Teams Data:', teamsData);
      return teamsData; // Return the fetched data
    } catch (error) {
      console.error('Failed to get teams information:', error);
      return null; // Return null or handle error appropriately
    }
}

export default function ChooseTeam() {

    const dispatch = useAppDispatch();
    const team = useAppSelector((state) => state.team);
  const [teamsInfo, setTeamsInfo] = useState<TeamsResponse>();

  useEffect(() => {
    const fetchTeamsData = async () => {
      const data = await getTeamsInfo();
      if (data) {
        setTeamsInfo(data);       
      }
    };

    fetchTeamsData();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={styles.title}>チームを選んでください</Text>
      <Text style={styles.description}>{teamsInfo?.teamSelectionMessage}</Text>

      <View style={styles.row}>
      
          <EmojiButton emoji={teamsInfo?.Red?.emoji == undefined ? '' : teamsInfo?.Red?.emoji} title={teamsInfo?.Red?.theme == undefined ? '' : teamsInfo?.Red?.theme} action={() => 
            {
                dispatch({ type: 'SET_TEAM', payload: 'RED' });
                dispatch({ type: 'SET_TEAM_RED_DETAIL', payload: 
                    teamsInfo?.Red?.theme == undefined ? '' : teamsInfo?.Red?.theme });
                dispatch({ type: 'SET_TEAM_RED_EMOJI', payload: 
                    teamsInfo?.Red?.emoji == undefined ? '' : teamsInfo?.Red?.emoji});
                dispatch({ type: 'SET_TEAM_GREEN_DETAIL', payload: 
                    teamsInfo?.Green?.theme == undefined ? '' : teamsInfo?.Green?.theme });
                dispatch({ type: 'SET_TEAM_GREEN_EMOJI', payload: 
                    teamsInfo?.Green?.emoji == undefined ? '' : teamsInfo?.Green?.emoji });
                 
                router.push('/mainScreen');
            }} />
          <EmojiButton emoji={teamsInfo?.Green?.emoji == undefined ? '' : teamsInfo?.Green?.emoji} title={teamsInfo?.Green?.theme == undefined ? '' : teamsInfo?.Green?.theme} action={() =>
            {
                dispatch({ type: 'SET_TEAM', payload: 'GREEN' });
                dispatch({ type: 'SET_TEAM_RED_DETAIL', payload: 
                    teamsInfo?.Red?.theme == undefined ? '' : teamsInfo?.Red?.theme });
                dispatch({ type: 'SET_TEAM_RED_EMOJI', payload: 
                    teamsInfo?.Red?.emoji == undefined ? '' : teamsInfo?.Red?.emoji});
                dispatch({ type: 'SET_TEAM_GREEN_DETAIL', payload: 
                    teamsInfo?.Green?.theme == undefined ? '' : teamsInfo?.Green?.theme });
                dispatch({ type: 'SET_TEAM_GREEN_EMOJI', payload: 
                    teamsInfo?.Green?.emoji == undefined ? '' : teamsInfo?.Green?.emoji });
                 
                router.push('/mainScreen');
            }} />
      </View>
    </View>
  );
}
