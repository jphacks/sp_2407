import { styles } from '@/constants/styles';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions
} from 'react-native';

const { width } = Dimensions.get('window');
type HatenaBoxProps = {
    answer: string;
    availableIndex: Array<boolean>;
  };
// HatenaBoxコンポーネントの宣言
// 引数としてanswer（回答の単語）を受け取る
export function HatenaBox({ answer, availableIndex } : HatenaBoxProps) {
  // answerの長さを取得
  const len = answer.length;

  return (
    <View style={StyleSheet.flatten([styles.container, {flexDirection: 'row'}])}>
      {/* answerの長さ分、?ボックスを繰り返し生成 */}
      {Array.from({ length: len }).map((_, index) => (
        <View key={index} style={styles.box}>
          <Text style={styles.boxText}>{availableIndex!=null&&availableIndex[index]?answer[index]:'?'}</Text>
        </View>
      ))}
    </View>
  );
}