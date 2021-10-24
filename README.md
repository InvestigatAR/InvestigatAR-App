![github-issues-shield]
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![React Native](https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![Google ML](https://img.shields.io/badge/GoogleML-blue?style=for-the-badge&logo=google-cloud&logoColor=white)
![Viro AR](https://img.shields.io/badge/ViroAR-blueviolet?style=for-the-badge&")
[![MIT License][license-shield]][license-url]
[![Devpost | Devpost](https://badges.devpost-shields.com/get-badge?name=Devpost&id=investigatar?ref_content=user-portfolio&ref_feature=in_progress&type=big-logo&style=for-the-badge)](https://devpost.com/software/investigatar?ref_content=user-portfolio&ref_feature=in_progress)

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/InvestigatAR/InvestigatAR-App">
    <img src="https://github.com/InvestigatAR/InvestigatAR-App/blob/main/logo.png" alt="Logo" width="140" height="140" >
  </a>

  <h3 align="center">InvestigatAR</h3>

  <p align="center">
    Explanation of investigatar
    <br />
    <br />
    <a href="https://www.youtube.com/watch?v=244p7J3VHKU"><strong>Check out our demo! »</strong></a>
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
  <img width="320" height="620" src="screenshot.png">
</p>
  
We’re in a new era: a boom of online shopping + mobile device advancement. What does that mean? More people want to shop online while staying home, and use their phones to do it. However, one of the biggest issues for both retailers and consumers is miscommunication. How big is this couch really? Will this chair fit under my desk? Does my backpack have enough space to hold this? 

InvestigatAR has three guiding principles: 
1. Sensibility
2. Sustainability
3. Scalability

By scanning QR codes in our app, users are able to see a full scale mode of the assembled product at the tips of their fingers. Using an NCR API, users are able to see names, reviews, pricing, and other critical information. Don’t know what an object is? Scan it. Using an image recognition and classification model, we can show you the closest matches in other products AND more sustainable alternatives. 

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
