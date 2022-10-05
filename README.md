![Logo](./docs/reference/icon.png)

# Quiz Server

[![HoleInOneStudios - Quiz-Server](https://img.shields.io/static/v1?label=HoleInOneStudios&message=Quiz-Server&color=blue&logo=github)](https://github.com/HoleInOneStudios/Quiz-Server "Go to GitHub repo")
[![npm](https://img.shields.io/npm/v/package.svg?color=blue)](https://www.npmjs.org/package/@holeinonestudios/quiz-app)
![GitHub issues](https://img.shields.io/github/issues/HoleInOneStudios/Quiz-Server)
![GitHub pull requests](https://img.shields.io/github/issues-pr/HoleInOneStudios/Quiz-Server)
[![CodeQL](https://github.com/HoleInOneStudios/Quiz-Server/actions/workflows/codeql-analysis.yml/badge.svg?branch=main)](https://github.com/HoleInOneStudios/Quiz-Server/actions/workflows/codeql-analysis.yml)
[![Greetings](https://github.com/HoleInOneStudios/Quiz-Server/actions/workflows/greetings.yml/badge.svg?branch=main)](https://github.com/HoleInOneStudios/Quiz-Server/actions/workflows/greetings.yml)
[![Labeler](https://github.com/HoleInOneStudios/Quiz-Server/actions/workflows/labeler.yml/badge.svg?branch=main)](https://github.com/HoleInOneStudios/Quiz-Server/actions/workflows/labeler.yml)
[![Mark stale issues and pull requests](https://github.com/HoleInOneStudios/Quiz-Server/actions/workflows/stale.yml/badge.svg?branch=main)](https://github.com/HoleInOneStudios/Quiz-Server/actions/workflows/stale.yml)

## Table of Contents

- [Quiz Server](#quiz-server)
  - [Table of Contents](#table-of-contents)
  - [Milestones](#milestones)
  - [Photos](#photos)
  - [Layout](#layout)
  - [Custom Elements](#custom-elements)
  - [Data](#data)
  - [Sheet Table Template](#sheet-table-template)
  - [Tutorials](#tutorials)
    - [Installation](#installation)
    - [Running](#running)
    - [Creating a Quiz](#creating-a-quiz)

## Milestones

- [x] Re-Create to specifications of the [Photos](#photos)
  - [x] Load quizzes from spreadsheet
    - [x] Hot updating of spreadsheet
  - [x] Runs on a single server
  - [x] IOS Compatible
  - [x] Quiz
    - [x] Quiz Title
    - [x] questions
    - [x] 4 answers
    - [x] answer Feedback
    - [x] HUD
      - [x] score display
      - [x] current question out of total questions display
      - [x] Navigation
        - [x] next question button
        - [x] previous question button
        - [x] restart quiz button
      - [x] Hint
        - [x] hint toggle button
        - [x] hint toggle button image
        - [x] hint display
        - [x] hint display speech bubble
      - [x] Audio
        - [x] audio sounds
          - [x] Correct
          - [x] Incorrect
          - [x] Quiz Finished
        - [x] audio toggle
    - [x] Background images
- [ ] Tutorial Videos
  - [ ] How to make a quiz?
  - [ ] How to install?
  - [ ] How to run?

## Photos

![Photo](./docs/reference/20220820_115745.jpg)
![Photo](./docs/reference/20220820_115750.jpg)
![Photo](./docs/reference/20220820_115756.jpg)
![Photo](./docs/reference/20220820_120202.jpg)
![Photo](./docs/reference/COPY20220820_115756.jpg)

## Layout

![Layout](./docs/reference/Quiz-Container.svg)
[Figma](https://www.figma.com/file/juw197Ed7Ec5yTbPfFytLu/Quiz-Server?node-id=0%3A1)

## Custom Elements

| Element Name          |         | Element Class     |
| --------------------- | ------- | ----------------- |
| quiz-next             | &#8594; | `Next`            |
| quiz-back             | &#8594; | `Back`            |
| quiz-restart          | &#8594; | `Restart`         |
| quiz-container        | &#8594; | `HTMLElement`     |
| quiz-title            | &#8594; | `HTMLElement`     |
| quiz-question         | &#8594; | `HTMLElement`     |
| quiz-question-text    | &#8594; | `Question`        |
| quiz-answer-container | &#8594; | `AnswerContainer` |
| quiz-answer           | &#8594; | `Answer`          |
| quiz-info             | &#8594; | `HTMLElement`     |
| quiz-score            | &#8594; | `HTMLElement`     |
| quiz-status           | &#8594; | `HTMLElement`     |
| quiz-hint             | &#8594; | `HTMLElement`     |
| quiz-hint-toggle      | &#8594; | `Hint`            |
| quiz-hint-text        | &#8594; | `HintText`        |
| quiz-finish           | &#8594; | `HTMLElement`     |
| quiz-audio-toggle     | &#8594; | `HTMLElement`     |

## Data

> Each sheet in a workbook is a different quiz
> [Link to Example](./src/data/data.xlsx)

## Sheet Table Template

| Question | 1   | 2   | 3   | 4   | Correct        | Hint             | Background (Default is `space_bg.jpg`) |
| -------- | --- | --- | --- | --- | -------------- | ---------------- | -------------------------------------- |
|          |     |     |     |     | *(1, 2, 3, 4)* | *(url of image)* | *(url of image)*                       |

## Tutorials

### Installation

1. Install [Node.js](https://nodejs.org/en/)
2. Clone this repository into a folder
3. run `npm install` in the folder
4. Create a `.env` file in the root of the folder
5. In the `.env` file add the following

   ```shell
   PORT=8080
   HOST='localhost'
   ```

### Running

1. run `npm run start` in the folder
2. goto the domain printed in the console

### Creating a Quiz

1. Open the `data.xlsx` file in the `src/data` folder

`Work in Progress`
