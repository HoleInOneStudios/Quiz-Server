![Logo](./docs/images/icon.png)

# Quiz Server

## Table of Contents

- [Quiz Server](#quiz-server)
  - [Table of Contents](#table-of-contents)
  - [Badges](#badges)
  - [Tutorials](#tutorials)
    - [Getting Started](#getting-started)
    - [Editing the Config](#editing-the-config)
      - [Finding your public IP address](#finding-your-public-ip-address)
        - [Windows](#windows)
        - [Mac](#mac)
        - [Linux](#linux)
      - [Install](#install)
        - [Android](#android)
        - [IOS](#ios)
  - [Data](#data)
    - [Data Table](#data-table)
  - [Layout](#layout)

## Badges

![GitHub forks](https://img.shields.io/github/forks/holeinonestudios/quiz-server?style=social) ![GitHub Repo stars](https://img.shields.io/github/stars/holeinonestudios/quiz-server?style=social) ![GitHub watchers](https://img.shields.io/github/watchers/holeinonestudios/quiz-server?style=social) ![GitHub](https://img.shields.io/github/license/holeinonestudios/quiz-server)

![GitHub issues](https://img.shields.io/github/issues/holeinonestudios/quiz-server) ![GitHub pull requests](https://img.shields.io/github/issues-pr/holeinonestudios/quiz-server) ![GitHub commit activity](https://img.shields.io/github/commit-activity/w/holeinonestudios/quiz-server) ![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/holeinonestudios/quiz-server) ![GitHub contributors](https://img.shields.io/github/contributors/holeinonestudios/quiz-server)

![GitHub Sponsors](https://img.shields.io/github/sponsors/holeinonestudios)

## Tutorials

### Getting Started

1. Install the [latest version](https://github.com/HoleInOneStudios/Quiz-Server/releases/latest) for your operating system
2. Extract the contents
3. Using your terminal or command prompt, navigate to the extracted folder
4. execute `quiz-app-<version>` within the terminal
   1. Windows &rarr; `.\quiz-app.exe`
   2. Mac &rarr; `.\quiz-app-macos`
   3. Linux &rarr; `.\quiz-app-linux`
5. Navigate the web address provided in the terminal. (e.g. `http://localhost:80`)

### Editing the Config

The configuration is done in the `.env` file. Inside it should look like this:

```bash
PORT=80
HOST='localhost'
FILE_PATH='./data.xlsx'
IMAGE_PATH='./img/'
```

`PORT` is the port the server is hosted on. 80 is the default web port.
`HOST` should be changed to the device running the server's public IP address.`

#### Finding your public IP address

##### Windows

1. Open a terminal or command prompt
2. Type `ipconfig`
3. Find the `IPv4 Address` for `Wireless LAN` and copy it
4. update the `HOST` variable in the `.env` file to the copied IP address

##### Mac

`WIP`

##### Linux

`WIP`

#### Install

##### Android

1. Navigate to the **url provided in the terminal**
2. click the **three dots** in the **top right corner**
3. click `Add to Home Screen`
4. Open the app from your home screen

##### IOS

1. Navigate the **url provided in the terminal** on **safari**
2. click the **share button** in the **top right corner**
3. click `Add to Home Screen`
4. open the app from your `Home Screen`

## Data

> Each sheet in a workbook is a different quiz
> [Link to Example](./src/data/data.xlsx)

### Data Table

If you don't include text in the answer choice it will not show up, so you can create True or False questions by leaving the other answers blank.

| Question          | 1        | 2        | 3        | 4        | Correct        | Hint     | Hint Image                                                  | Background Image                                |
| ----------------- | -------- | -------- | -------- | -------- | -------------- | -------- | ----------------------------------------------------------- | ----------------------------------------------- |
| *(text)*          | *(text)* | *(text)* | *(text)* | *(text)* | *(1, 2, 3, 4)* | *(text)* | *(name of image(Default is `Hint-Person-Placeholder.png`))* | *(name of image(Default is `placeholder.jpg`))* |
|                   |          |          |          |          |                |          |                                                             |                                                 |
| Example questions | Answer A | Answer B | Answer C | Answer D | 1, 2, 3        | Hint     | hint-person-placeholder.png                                 | placeholder.jpg                                 |

## Layout

<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fjuw197Ed7Ec5yTbPfFytLu%2FQuiz-Server%3Fnode-id%3D0%253A1%26t%3DJN9mv2lxJ11hO3JF-1" allowfullscreen></iframe>
