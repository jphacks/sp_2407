import { Link, router } from "expo-router";
import { View } from "react-native";
import { EmojiViewScroll } from "@/components/EmojiViewScroll";

import { useEffect } from "react";

import { RootState, AppDispatch } from '@/context/AppStateProvider';
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
const useAppDispatch = () => useDispatch<AppDispatch>();


const pages = [
  { emoji: '😀', title: 'こんにちは！', description: 'リアル脱出ゲームへようこそ！' },
  { emoji: '🗺️', title: '探検しましょう', description: '家を出て今すぐ探検しましょう！' },
  { emoji: '✨', title: '集めましょう', description: '訪問した場所の名前から単語のカケラを集めることができます。\nカケラを集めてパズルを解くと、レベルが上がります。' },
  { emoji: '🤔', title: 'まずあなたに関して\n教えてください', description: 'このアプリは位置情報に基づいています。' }
];

export default function Index() {
  const dispatch = useAppDispatch();
  const isTutorialSeen = useAppSelector((state) => state.isTutorialSeen);

  // useEffect(() => {

  //   // チュートリアルが既に表示されたかどうかをチェックし、表示されている場合はメイン画面に遷移します。
  //   if (isTutorialSeen) {
  //     router.push('/otherScreen');
  //   } else {
  //     // チュートリアルがまだ表示されていない場合、状態を設定します。
  //   }
  // }, [isTutorialSeen, dispatch]);

  // // チュートリアルが既に表示されている場合、useEffectで画面遷移が処理されるので、nullを返します。
  // if (isTutorialSeen) {
  //   return null;
  // }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <EmojiViewScroll pages={pages} action={()=>
      {
        router.push('/needInfo');
    }} />
    </View>
  );
}
