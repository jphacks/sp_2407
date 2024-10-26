// app/_layout.tsx
import {store, persistor } from "@/context/AppStateProvider";
import { Provider } from 'react-redux';
import { Stack } from "expo-router";
import { PersistGate } from 'redux-persist/integration/react';

export default function Layout() {
  
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Stack>
          <Stack.Screen name="index" options={{ title: 'Tutorials', headerShown: false  }} />
          <Stack.Screen name="needInfo" options={{ title: 'needInfo', headerShown: false }} />
          <Stack.Screen name="mainScreen" options={{ title: 'メイン',  headerShown: false }} />
          <Stack.Screen name="checkIn" options={{ title: 'チェックイン',  headerShown: true }} />
          <Stack.Screen name="chooseTeam" options={{ title: 'チーム選択',  headerShown: false }} />
        </Stack>
      </PersistGate>
    </Provider>

  );
}