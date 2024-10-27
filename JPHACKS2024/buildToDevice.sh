npx expo prebuild
npx expo export:embed --entry-file='./AppEntry.js' --bundle-output='./ios/main.jsbundle' --dev=true --platform='ios'
npx react-native run-ios
