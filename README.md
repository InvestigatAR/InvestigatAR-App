![github-issues-shield]
![TensorFlow](https://img.shields.io/badge/TensorFlow-%23FF6F00.svg?style=for-the-badge&logo=TensorFlow&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![React Native](https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/InvestigatAR/InvestigatAR-App">
    <img src="https://github.com/InvestigatAR/InvestigatAR-App/blob/main/logo.svg" alt="Logo" width="140" height="120" >
  </a>

  <h3 align="center">InvestigatAR</h3>

  <p align="center">
    Explanation of investigatar
    <br />
    <br />
    <a href="https://github.com/InvestigatAR/InvestigatAR-Server/releases"><strong>Check out the latest release! »</strong></a>
    <br />
    <br />
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#introduction">Introduction</a></li>
    <li><a href="#requirements">Requirements</a></li>
    <li><a href="#requirements">Installation</a></li>
    <li>
      <a href="#get-started">Get Started</a>
      <ul>
        <li><a href="#how-to-start-ios">How to Start (iOS)</a></li>
      </ul>
    </li>
    <li><a href="#viro-ar-support">Viro AR Support</a></li>
    <li><a href="#troubleshooting-ios">Troubleshooting (iOS)</a></li>
  </ol>
</details>

<!-- INTRODUCTION -->
## Introduction

<p align="center">
  <strong align="center">Why InvestigatAR?</strong>
  <br>
  <img width="320" height="320" src="logo.png">
</p>
  
Some text about why InvestigatAR

<!-- Requirements -->
## Requirements
Have the following installed on your machine:
- [node](https://nodejs.org/en/download/)
- [npm](https://nodejs.org/en/download/)
- [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable)
- [cocoapods](https://cocoapods.org/)

<!-- Installation -->
## Installation
```shell
git clone https://github.com/rdeepak2002/react-native-ar-template.git
cd react-native-ar-template
yarn install
```

## Get Started

### How To Start (iOS)
```shell
cd ios
pod install
```

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


<!-- MARKDOWN LINKS & IMAGES -->
[github-issues-shield]: https://img.shields.io/github/issues/skyline-9/u2-background-removal?style=for-the-badge
[top-language-shield]: https://img.shields.io/github/languages/top/skyline-9/u2-background-removal?color=orange&style=for-the-badge
[license-shield]: https://img.shields.io/github/license/Skyline-9/U2-Background-Removal?style=for-the-badge
[license-url]: https://github.com/Skyline-9/U2-Background-Removal/blob/main/LICENSE
[linkedin-shield]: https://img.shields.io/badge/LinkedIn-blue?style=for-the-badge&logo=linkedin&labelColor=blue
[linkedin-url]: https://www.linkedin.com/in/richardluorl
