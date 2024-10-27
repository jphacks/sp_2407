import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { useRef, useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as MediaLibrary from 'expo-media-library';
import * as FileSystem from 'expo-file-system';
import apiClient from '@/util/apiClient';
import FormData from 'form-data';

import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState, AppDispatch } from '@/context/AppStateProvider';
import axios from 'axios';
import { router } from 'expo-router';
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
const useAppDispatch = () => useDispatch<AppDispatch>();

// Add these two lines
(Blob.prototype as any)[Symbol.toStringTag] = 'Blob';
(File.prototype as any)[Symbol.toStringTag] = 'File';

export default function App() {
  const nearestStation = useAppSelector((state) => state.nearestStation);
  const [facing, setFacing] = useState<CameraType>('back');
  const [permission, requestPermission] = useCameraPermissions();
  const [mediaPermission, requestMediaPermission] = MediaLibrary.usePermissions();
  const cameraRef = useRef(null);

  if (!permission || !mediaPermission) {
    // Camera or media permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={styles.message}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  if (!mediaPermission.granted) {
    // Media permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={styles.message}>We need your permission to save photos</Text>
        <Button onPress={requestMediaPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }

  async function takePicture() {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      // const fileUri = FileSystem.documentDirectory + 'photo.png';
      // await FileSystem.moveAsync({
      //   from: photo.uri,
      //   to: fileUri,
      // });
      // await MediaLibrary.saveToLibraryAsync(fileUri);
      // alert('Photo saved to library!');
      const response = await fetch(photo.uri);
      const blob = await response.blob();
      console.log(photo.uri.split("/").pop())
      // Upload photo to the server

        const baseUrl = process.env.EXPO_PUBLIC_BASE_URL || "";
        const url = `${baseUrl}/stations/${nearestStation._id}/photo`;
      
        const formData = new FormData();
        formData.append('photo', {
          uri: photo.uri,
          type: 'image/jpeg',
          name: 'photo.jpg',  
        });
        try {
          const response = await axios.post(url, formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
          alert('Photo uploaded successfully!');
          router.back()
        } catch (error) {
          console.error('Upload failed:', error);
          throw error;
        }
    }
  }

  return (
    <View style={styles.container}>
      <CameraView ref={cameraRef} style={styles.camera} facing={facing}>
        <TouchableOpacity style={{ flex: 1 }} onPress={takePicture}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
              <Text style={styles.text}>Flip Camera</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});
