import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { AppState } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

// 初期状態の型定義
export type AppStateType = {
  homeCoordinates: any;
  appState: any;
  isTutorialSeen: any;
  team: string;
  teamRedDetail: string;
  teamRedEmoji: string;
  teamGreenDetail: string;
  teamGreenEmoji: string;
  nearestStation: any;
};

// 初期状態の定義
const initialState: AppStateType = {
  homeCoordinates: null,
  appState: AppState.currentState,
  isTutorialSeen: false,
  team: '',
  teamRedEmoji: '',
  teamRedDetail: '',
  teamGreenDetail: '',
  teamGreenEmoji: '',
  nearestStation: null,
};

// リデューサーの定義
const reducer = (state = initialState, action: any): AppStateType => {
  switch (action.type) {
    case 'SET_HOME_COORDINATES':
      return { ...state, homeCoordinates: action.payload };
    case 'SET_APP_STATE':
      return { ...state, appState: action.payload };
    case 'SET_TUTORIALS_SEEN':
      return { ...state, isTutorialSeen: action.payload };
    case 'SET_TEAM':
        return { ...state, team: action.payload };
    case 'SET_TEAM_RED_DETAIL':
        return { ...state, teamRedDetail: action.payload };
    case 'SET_TEAM_RED_EMOJI':
        return { ...state, teamRedEmoji: action.payload };
    case 'SET_TEAM_GREEN_DETAIL':
        return { ...state, teamGreenDetail: action.payload };
    case 'SET_TEAM_GREEN_EMOJI':
        return { ...state, teamGreenEmoji: action.payload };
    case 'SET_NEAREST_STATION':
          return { ...state, nearestStation: action.payload };
    default:
      return state;
  }
};

// redux-persist の設定
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['homeCoordinates', 'isTutorialSeen'], // 永続化したい状態を定義
};

const persistedReducer = persistReducer(persistConfig, reducer);

// ストアの作成
const store = createStore(persistedReducer);
const persistor = persistStore(store);

// 型定義
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// コンポーネントで使用するために store と persistor をエクスポート
export { store, persistor };
