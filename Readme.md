# Installation of Node Modules
1) Run command in project root directory :

```
yarn // if using yarn
npm install // if using node

```

# For Android
1) Open android folder of your project in Android Studio.
2) Build gradle.
3) And click on run button.
4) Run command in Projects root directory:
```
adb reverse tcp:8081 tcp:8081
yarn strat //if using yarn
npx react-native start // if using node
```


or

## Command for run project using terminal
```
npx react-native run-android

```
# For ios
1) In project root directory run command
```
cd ios
pod install
```
2) open prjectName.xcworkspace file from ios folder of your project in xcode.
3) Click on Run Button.