import { Link, router } from "expo-router";
import { View } from "react-native";
import { EmojiViewScroll } from "@/components/EmojiViewScroll";

import { useEffect } from "react";

import { RootState, AppDispatch } from '@/context/AppStateProvider';
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
const useAppDispatch = () => useDispatch<AppDispatch>();


const pages = [
  { emoji: '😀', title: 'こんにちは！', description: 'リアル脱出ゲーム\n「飛び出せ我々の家」へようこそ！' },
  { emoji: '🗺️', title: '冒険者になる', description: '今すぐに家から飛び出そう' },
  { emoji: '🏁', title: 'チームに入ろう', description: 'お題を見てチームに参加しよう' },
  { emoji: '⚔️', title: 'チームでバトルしよう', description: '散歩してチェックインして、ポイントゲット！' },
  { emoji: '🤔', title: 'さあ！冒険のはじまりだ！', description: 'このアプリは位置情報に基づいています' }
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
