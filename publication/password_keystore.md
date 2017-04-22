# Android

## password keystore : 
XG83uPbG
XG83uPbG

## Build release application : 
$ cd android && ./gradlew assembleRelease

## Test the application in release mode : 
- emulator list : /Users/vincentchann/Library/Android/sdk/tools/emulator -list-avds
- launch emulator : /Users/vincentchann/Library/Android/sdk/tools/emulator -avd Nexus_5_API_23 -netdelay none -netspeed full
- cd to your project and run : react-native run-android --variant=release