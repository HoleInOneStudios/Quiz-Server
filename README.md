![Logo](./docs/images/icon.png)

# Quiz Server

## Table of Contents

- [Quiz Server](#quiz-server)
  - [Table of Contents](#table-of-contents)
  - [Tutorials](#tutorials)
    - [Getting Started](#getting-started)
    - [Editing Config](#editing-config)
  - [Custom Elements](#custom-elements)
  - [Data](#data)
  - [Sheet Table Template](#sheet-table-template)
  - [Photos](#photos)
  - [Layout](#layout)

## Tutorials

### Getting Started

1. Install the [latest version](https://github.com/HoleInOneStudios/Quiz-Server/releases/latest) for your operating system
2. Extract the contents
3. Using your terminal or command prompt, navigate to the extracted folder
4. execute `quiz-app-<version>` within the terminal
   1. Windows &rarr; `.\quiz-app.exe`
   2. Mac &rarr; `.\quiz-app-macos`
   3. Linux &rarr; `.\quiz-app-linux`
5. Navigate the web address provided in the terminal. (e.g. `http://localhost:8080`)

### Editing Config

The configuration is done in the `.env` file. In side it should look like this:

```bash
PORT=80
HOST='localhost'
FILE_PATH='./data.xlsx'
IMAGE_PATH='./img/'
```

`PORT` is the port the server is hosted on. 80 is the default web port.
`HOST` should be changed to the device running the server's public IP address.`

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

## Photos

![Photo](./docs/images/20220820_115745.jpg)
![Photo](./docs/images/20220820_115750.jpg)
![Photo](./docs/images/20220820_115756.jpg)
![Photo](./docs/images/20220820_120202.jpg)
![Photo](./docs/images/COPY20220820_115756.jpg)

## Layout

![Layout](./docs/images/Quiz-Container.svg)
[Figma](https://www.figma.com/file/juw197Ed7Ec5yTbPfFytLu/Quiz-Server?node-id=0%3A1)
