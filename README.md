![Logo](./docs/images/icon.png)

# Quiz Server

## Table of Contents

- [Quiz Server](#quiz-server)
  - [Table of Contents](#table-of-contents)
  - [Badges](#badges)
  - [Getting Started](#getting-started)
    - [Manual](#manual)
  - [Data](#data)
    - [Data Table](#data-table)

## Badges

![GitHub forks](https://img.shields.io/github/forks/holeinonestudios/quiz-server?style=social) ![GitHub Repo stars](https://img.shields.io/github/stars/holeinonestudios/quiz-server?style=social) ![GitHub watchers](https://img.shields.io/github/watchers/holeinonestudios/quiz-server?style=social) ![GitHub](https://img.shields.io/github/license/holeinonestudios/quiz-server)

![GitHub issues](https://img.shields.io/github/issues/holeinonestudios/quiz-server) ![GitHub pull requests](https://img.shields.io/github/issues-pr/holeinonestudios/quiz-server) ![GitHub commit activity](https://img.shields.io/github/commit-activity/w/holeinonestudios/quiz-server) ![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/holeinonestudios/quiz-server) ![GitHub contributors](https://img.shields.io/github/contributors/holeinonestudios/quiz-server)

![GitHub Sponsors](https://img.shields.io/github/sponsors/holeinonestudios)

## Getting Started

### Manual

1. Download and extract the repository
2. Install Node.js.  Search, download and install.
3. run `npm install` in a terminal for the project directory
4. run `npm install --save-dev` in a terminal for the project directory
5. **Testing**
   1. Edit file `.env` and change HOST line to: `HOST=’localhost’`
   2. npm run dev
   3. _NOTE: May need to clear cookie history for localhost.  Click on (i) next to localhost and clear the one cookie._
   4. `Ctrl-C` to stop program
6. **Build and Run Locally**
   1. `npm run build`
   2. Copy `.env` file from root into `dist` directory
      1. Remove `NODE_ENV=0` line.
      2. Edit `FILE_PATH` to: `FILE_PATH='data.xlsx'`
   3. In dist directory command prompt: `./quiz-app-win.exe`    **Dot-slash is required!**
   4. In web browser, browse to `localhost`.
7. **Running on LAN**
   1. Determine IP address of machine to be used as server.  IPV4 version.
   2. Replace the `HOST` with the IP address from step 1.
   3. In dist directory command prompt: `./quiz-app-win.exe`    **Dot-slash is required!** **Be sure your computer allows the connection**
   4. In a web browser, browse the the IP fom step 1.

## Data

> Each sheet in a workbook is a different quiz
> [Link to Example](./src/data/data.xlsx)

### Data Table

If you don't include text in the answer choice it will not show up, so you can create True or False questions by leaving the other answers blank.

| Question          | 1        | 2        | 3        | 4        | Correct        | Hint     | Hint Image                                                  | Background Image                                |
| ----------------- | -------- | -------- | -------- | -------- | -------------- | -------- | ----------------------------------------------------------- | ----------------------------------------------- |
| _(text)_          | _(text)_ | _(text)_ | _(text)_ | _(text)_ | _(1, 2, 3, 4)_ | _(text)_ | *(name of image(Default is `Hint-Person-Placeholder.png`))* | *(name of image(Default is `placeholder.jpg`))* |
|                   |          |          |          |          |                |          |                                                             |                                                 |
| Example questions | Answer A | Answer B | Answer C | Answer D | 1, 2, 3        | Hint     | hint-person-placeholder.png                                 | placeholder.jpg                                 |
