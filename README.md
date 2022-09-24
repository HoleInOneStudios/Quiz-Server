# ![Logo](./docs/reference/icon.png)    Quiz Server

[![HoleInOneStudios - Quiz-Server](https://img.shields.io/static/v1?label=HoleInOneStudios&message=Quiz-Server&color=blue&logo=github)](https://github.com/HoleInOneStudios/Quiz-Server "Go to GitHub repo")
![GitHub issues](https://img.shields.io/github/issues/HoleInOneStudios/Quiz-Server)
![GitHub pull requests](https://img.shields.io/github/issues-pr/HoleInOneStudios/Quiz-Server)
[![CodeQL](https://github.com/HoleInOneStudios/Quiz-Server/actions/workflows/codeql-analysis.yml/badge.svg?branch=main)](https://github.com/HoleInOneStudios/Quiz-Server/actions/workflows/codeql-analysis.yml)
[![Greetings](https://github.com/HoleInOneStudios/Quiz-Server/actions/workflows/greetings.yml/badge.svg?branch=main)](https://github.com/HoleInOneStudios/Quiz-Server/actions/workflows/greetings.yml)
[![Labeler](https://github.com/HoleInOneStudios/Quiz-Server/actions/workflows/labeler.yml/badge.svg?branch=main)](https://github.com/HoleInOneStudios/Quiz-Server/actions/workflows/labeler.yml)
[![Mark stale issues and pull requests](https://github.com/HoleInOneStudios/Quiz-Server/actions/workflows/stale.yml/badge.svg?branch=main)](https://github.com/HoleInOneStudios/Quiz-Server/actions/workflows/stale.yml)
[![Made with Node.js](https://img.shields.io/badge/Node.js->=12-blue?logo=node.js&logoColor=white)](https://nodejs.org "Go to Node.js homepage")
[![Made with JavaScript](https://img.shields.io/badge/Made_with-JavaScript-blue?logo=javascript&logoColor=white)](https://www.javascript.com/ "Go to JavaScript homepage")

## Product Example

### Milestones

* [ ] Re-Create to specifications of the [Photos](#photos)
  * [x] Load quizzes from spreadsheet
    * [ ] Hot updating of spreadsheet
  * [x] Runs on a single server
  * [ ] IOS Compatible
  * [ ] Quiz
    * [x] Quiz Title
    * [x] questions
    * [x] 4 answers
    * [x] answer Feedback
    * [x] HUD
      * [x] score display
      * [x] current question out of total questions display
      * [x] Navigation
        * [x] next question button
        * [x] previous question button
        * [x] restart quiz button
      * [ ] Hint
        * [x] hint toggle button
        * [x] hint toggle button image
        * [x] hint display
        * [ ] hint display speech bubble
      * [ ] Audio
        * [x] audio sounds
        * [ ] audio toggle
  * [x] Background images

### Photos

![Photo](./docs/reference/20220820_115745.jpg)
![Photo](./docs/reference/20220820_115750.jpg)
![Photo](./docs/reference/20220820_115756.jpg)
![Photo](./docs/reference/20220820_120202.jpg)
![Photo](./docs/reference/COPY20220820_115756.jpg)

## Layout

![Layout](./docs/reference/Quiz-Container.svg)

### Prototyping

[Figma](https://www.figma.com/file/juw197Ed7Ec5yTbPfFytLu/Quiz-Server?node-id=0%3A1)

### Custom Elements

| Element Name            |
| ----------------------- |
| `quiz-next`             |
| `quiz-back`             |
| `quiz-restart`          |
| `quiz-container`        |
| `quiz-title`            |
| `quiz-question`         |
| `quiz-question-text`    |
| `quiz-answer-container` |
| `quiz-answer`           |
| `quiz-info`             |
| `quiz-score`            |
| `quiz-status`           |
| `quiz-hint`             |
| `quiz-hint-toggle`      |
| `quiz-hint-text`        |

## Data

> Each sheet in a workbook is a different quiz
> [Link to Example](./src/data/data.xlsx)

### Sheet Table Template

| Question | 1   | 2   | 3   | 4   | Correct | Hint | Background (Default is `space_bg.jpg`)        |
| -------- | --- | --- | --- | --- | ------- | ---- | --------------------------------------------- |
|          |     |     |     |     |         |      | Name of image in`./public/images/backgrounds` |
