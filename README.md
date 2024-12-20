# 飛び出せ！我々の家

<img width="1728" alt="image" src="https://github.com/user-attachments/assets/d193709b-ff32-402f-ad5d-ded24f681b0f">
<img src="https://github.com/user-attachments/assets/c741abe6-d652-4590-9afb-77a17baa6bbc" width="25%" />

## 製品概要

地図上の観光地を制覇せよ！

世界を巡りながら楽しむ陣取りゲーム。観光地に足を運び、チェックインしながら広がる世界を冒険し、自陣をどんどん拡大していきましょう。



### 背景（製品開発のきっかけ・課題）

部屋から出るのが億劫で、ベッドで過ごす日々が続いていました。狭い部屋でのゲームばかりで、コロナ禍を経て外に出る楽しさを忘れてしまっていたのです。唯一、人と話すのはオンラインでの対戦ゲームのみ。画面越しに話すだけのやりとりは孤独感を紛らわせることはできても、外の世界に出ようとは思いませんでした。

そんな時、部屋から飛び出し、世界を舞台にゲームを楽しめたら素晴らしいと思いました。実際の場所を訪れることをゲームに組み込み、外に出るきっかけとし、実際の景色を背景に楽しい体験を提供することがこのプロダクトの開発の動機となりました。



### 製品説明

この製品は、地図上に表示される場所を巡り、チェックインすることでその場所を占領し、陣取りゲームとして楽しむことができるモバイルアプリです。チームに参加して、仲間と協力しながら広大な地図の中で自分たちの領域を広げていきましょう。チェックインすることで得られるポイントを元にチームの優位が決まり、世界中のプレイヤーと交流する楽しさも味わえます。

### 特長

#### 1. テーマでチーム分け
興味のあるテーマを選んでチームに参加できます。各チームには特色があり、趣味や関心に応じて仲間を見つけることができます。例えば、歴史や食文化をテーマにしたチームから選ぶことで、ゲームを通じた交流が深まります。

<img src="https://github.com/user-attachments/assets/3b74dc22-9966-462a-a9f1-80e0c8a69cc3" width="50%" />

#### 2. 世界を巡り陣取りバトル
地図に表示される観光地に足を運び、チェックインしてその場所を占領します。ポイントが貯まれば貯まるほど、地図の色が変わり、自陣が広がります。

<img src="https://github.com/user-attachments/assets/8fea95d8-2eba-4882-9970-e103c44d6f02" width="50%" />

#### 3. 写真で繋がる
訪れた場所で撮った写真を投稿し、仲間と共有しましょう。誰も知らない隠れたスポットや、その場所の美しさをシェアして新たな発見を楽しめます。他のプレイヤーが投稿した写真を見て、新しい発見をすることもできます。写真を投稿すればポイントも多くもらえて、ゲームコミュニティーへの参加を促します。

自分を出すのが苦手な方でも、匿名で自分の色が表される写真を投稿することができるため、現代の超連結社会に疲れた人でも、気軽に楽しめるようになっています。

<img src="https://github.com/user-attachments/assets/7744b89c-b54f-422d-a7fd-a1bf0c204065" width="50%" />

### 解決できること
この製品は、コロナ禍で外に出る楽しさを忘れた人や、部屋にこもりがちな人に、外の世界を冒険するきっかけを提供します。観光地を訪れ、ゲームを通じて探索することで、孤独感の解消や新たな発見を楽しむことができます。
また、日常生活に疲れて、いつもと違う日常を送りたい方向けに、日常の新たな発見の機会を提供します。今日はいつもと違う道で家に帰ってみるのはどうでしょう。

### 今後の展望

- 企業との連携で特定の場所をスポット化し、収益化
- ポイントを使って、ポイントで新しいスポットを設置し、よりユーザが自主的にゲームに関与できるようにする
- 地域経済とのさらなる連携を目指し、地域の店舗やイベントと連携したクエストの導入
- 地域の特性や歴史に基づいてより多様なテーマやストーリー性のある地域限定ミッションを追加し、プレイヤーの興味を持続的に引きつける

### 注力したこと（こだわり等）

- 少人数での開発のため、シンプルかつ洗練されたデザインや、技術スタックのコンパクト化に集中しました
- 特にデザインの場合、フロントエンド経験者がいなかったため、設計の段階から無駄を省き絵文字でハイライトをつける方針でデザインを構築しました
- 開発の段階でDBの仕様が頻繁に変更されることを考え、比較的に設計が柔軟であるNoSQLを導入し、バックエンドの実装にかかる時間を大幅に節約しました
- OpenAPIを用いて、一度エンドポイントの仕様が決まれば、バックエンドやフロントエンドでエンドポイントを共有しながら開発できるようにしました

## 開発技術

### 活用した技術

#### API・データ

#### フレームワーク・ライブラリ・モジュール

- Docker
- Python
- Flask
- Mongo
- OpenAPI
- swagger
- OpenAPI Generator
- React Native
- Expo
- openapi2aspida

#### デバイス

- iOS

### 独自技術

#### ハッカソンで開発した独自機能・技術

- Expoのオンライン接続なしでもデバイスにビルドできるように修正を加えました。　/JPHACKS2024/JPHACK2024/buildToDevice.sh を実行することで、デバイスで確認可能となります。

