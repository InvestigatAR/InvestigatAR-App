# react-native-ar-template

React-native template for AR apps with typescript support. Utilizes Viro Community version.

## Requirements

Have the following installed on your machine:

- [node](https://nodejs.org/en/download/)
- [npm](https://nodejs.org/en/download/)
- [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable)

## Installation

```shell
git clone https://github.com/rdeepak2002/react-native-ar-template.git
cd react-native-ar-template
yarn install
```

## Get Started (iOS)

```shell
cd ios
pod install
```

## How to Run (iOS)

Open Xcode workspace file and run the app on your device

## Viro AR Support
[Reach them in Discord.](https://discord.gg/YfxDBGTxvG)

## Troubleshooting (iOS)

- [RuntimeError - [Xcodeproj] Unknown object version.](https://github.com/CocoaPods/CocoaPods/issues/7697)

    ```
    cd ios
    gem update xcodeproj
    gem install cocoapods --pre
    ```

- [You don't have write permissions for the /Library/Ruby/Gems/2.6.0 directory](https://github.com/rbenv/rbenv/issues/1267)
    ```
    cd ios
    export GEM_HOME="$HOME/.gem"
    gem update xcodeproj
    gem install cocoapods --pre
    ```
