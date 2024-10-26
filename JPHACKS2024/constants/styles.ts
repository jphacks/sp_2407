import {
    Dimensions,
    StyleSheet
  } from 'react-native';
import Constants from 'expo-constants';


const { width } = Dimensions.get('window');
export const styles = StyleSheet.create({
    containerStack: {
      marginTop: 40,
      alignContent: 'flex-start',
      marginLeft: 0
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      // backgroundColor: '#f0f0f3', // ニューモーフィズム特有の背景色（明るいグレー）
    },
    designContainer: {
      width: 150,
      height: 150,
      borderRadius: 20,
      backgroundColor: '#e8e8ea',
      justifyContent: 'center',
      alignItems: 'center',
      // ニューモーフィズムの影効果
      shadowColor: '#000',
      shadowOffset: {
        width: 5,
        height: 5,
      },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 6,
    },
    button: {
      marginTop: 20,
      width: 200,
      height: 60,
      borderRadius: 30,
      backgroundColor: '#f0f0f3',
      justifyContent: 'center',
      alignItems: 'center',
      // ニューモーフィズムの影効果
      shadowColor: '#000',
      shadowOffset: {
        width: 6,
        height: 6,
      },
      shadowOpacity: 0.1,
      shadowRadius: 10,
      elevation: 8,
    },
    textInput: {
      width: 250,
      height: 50,
      borderRadius: 25,
      backgroundColor: '#f0f0f3',
      paddingHorizontal: 20,
      marginVertical: 20,
      // ニューモーフィズムの影効果
      shadowColor: '#000',
      shadowOffset: {
        width: 4,
        height: 4,
      },
      shadowOpacity: 0.1,
      shadowRadius: 6,
      elevation: 6,
    },
    emojiTitleHeader : {
      marginTop: Constants.statusBarHeight,
      marginLeft: 20,
      height: 100,
      alignItems: 'flex-start'
    },
    fullScreenView: {
      height: '100%'
    },
    page: {
      width,
      justifyContent: 'flex-start', // 이 부분을 수정하여 상단 정렬
      alignItems: 'center',
      paddingVertical: 50, // 상단 여백을 위한 패딩
    },
    emoji: {
      fontSize: 100,
      marginBottom: 20,
    },
    title: {
      fontSize: 30,
      fontWeight: 'bold',
      marginTop: 20, // 이모티콘과 타이틀 간의 여백
      textAlign: 'center',
    },
    description: {
      fontSize: 18,
      marginTop: 10,
      textAlign: 'center',
      width: '80%',
    },
    buttonLegacy: {
      marginTop: 40,
      paddingVertical: 10,
      paddingHorizontal: 20,
      backgroundColor: '#3498db',
      borderRadius: 5,
    },
    buttonText: {
      color: '#fff',
      fontSize: 18,
    },
    paginationContainer: {
      position: 'absolute',
      bottom: 20,
      left: 0,
      right: 0,
      alignItems: 'center',
    },
    dotsContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    dot: {
      width: 10,
      height: 10,
      borderRadius: 5,
      marginHorizontal: 5,
    },
    map: {
        width: 300,
        height: 300,
      },
    containerLegacy: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
      },
      emojiTitle: {
        fontSize: 40, // Adjust emoji size
        marginRight: 10 // Space between emoji and text
      },
      row: {
        flexDirection: 'row', // Row direction for emoji and text
        alignItems: 'center', // Align items vertically centered
      },
      box: {
        width: 40,
        height: 40,
        backgroundColor: '#d3d3d3',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
      },
      boxText: {
        fontSize: 20,
        fontWeight: 'bold',
      },
  });
  