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
  - [Tutorials](#tutorials)
    - [Getting Started](#getting-started)
    - [Creating a Quiz](#creating-a-quiz)
  - [Milestones](#milestones)
  - [Photos](#photos)
  - [Layout](#layout)
  - [Custom Elements](#custom-elements)
  - [Data](#data)
  - [Sheet Table Template](#sheet-table-template)

## Tutorials

### Getting Started

1. Install the [latest version](https://github.com/HoleInOneStudios/Quiz-Server/releases/latest) for your operating system
2. Extract the contents
3. Using your terminal or command prompt, navigate to the extracted folder
4. execute `quiz-app-<version>` within the terminal
   1. Windows &rarr; `.\quiz-app.exe`
   2. Mac &rarr; `?`
   3. Linux &rarr; `?`
5. Navigate the web address provided in the terminal. (e.g. `http://localhost:8080`)

### Creating a Quiz

1. Open the `data.xlsx` file in the `src/data` folder

`Work in Progress`

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

If you don't include text in the answer choice it will not show up, so you can create True or False questions by leaving the other answers blank.

| Question | 1        | 2        | 3        | 4        | Correct        | Hint     | Hint Image                                                                 | Background Image                               |
| -------- | -------- | -------- | -------- | -------- | -------------- | -------- | -------------------------------------------------------------------------- | ---------------------------------------------- |
| *(text)* | *(text)* | *(text)* | *(text)* | *(text)* | *(1, 2, 3, 4)* | *(text)* | *(url of image(Default is random image from `this person doesn't exist`))* | *(url of image(Default is `placeholder.jpg`))* |
