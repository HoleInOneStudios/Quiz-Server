![Logo](./docs/images/icon.png)

# Quiz Server

## Table of Contents

- [Quiz Server](#quiz-server)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
    - [Manual](#manual)
  - [Data](#data)
    - [Data Table](#data-table)

## Getting Started

1. Download the correct version from the latest release.
2. extract it.
3. inside is a `temp_release` folder, inside of that is the files for the quiz.
4. ALl you have to do is double click and it should open.

### Manual to Compile

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
