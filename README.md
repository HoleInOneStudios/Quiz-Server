# ![alt](public/images/icon.png) Quiz-Server

[![HoleInOneStudios - Quiz-Server](https://img.shields.io/static/v1?label=HoleInOneStudios&message=Quiz-Server&color=blue&logo=github)](https://github.com/HoleInOneStudios/Quiz-Server "Go to GitHub repo")

[![HoleInOneStudios - Quiz-Server](https://img.shields.io/static/v1?label=HoleInOneStudios&message=Quiz-Server&color=blue&logo=npm)](https://www.npmjs.com/package/quiz-server "Go to NPM repo")

[![stars - Quiz-Server](https://img.shields.io/github/stars/HoleInOneStudios/Quiz-Server?style=social)](https://github.com.HoleInOneStudios/Quiz-Server)

[![forks - Quiz-Server](https://img.shields.io/github/forks/HoleInOneStudios/Quiz-Server?style=social)](https://github.com/HoleInOneStudios/Quiz-Server)

![maintained - yes](https://img.shields.io/badge/maintained-yes-blue)

[![contributions - welcome](https://img.shields.io/badge/contributions-welcome-blue)](/.github/CONTRIBUTING.md "Go to contributions doc")

[![license - MIT](https://img.shields.io/badge/license-MIT-blue)](https://opensource.org/licenses/MIT "Go to MIT license")

![GitHub Discussions](https://img.shields.io/github/discussions/HoleInOneStudios/Quiz-Server)

![GitHub commit activity (branch)](https://img.shields.io/github/commit-activity/w/HoleInOneStudios/Quiz-Server)

[![Made with Node.js](https://img.shields.io/badge/Node.js->=12-blue?logo=node.js&logoColor=white)](https://nodejs.org "Go to Node.js homepage")

[![Made with JavaScript](https://img.shields.io/badge/Made_with-JavaScript-blue?logo=javascript&logoColor=white)](https://www.javascript.com/ "Go to JavaScript homepage")

![GitHub contributors](https://img.shields.io/github/contributors/HoleInOneStudios/Quiz-Server)

![GitHub issues](https://img.shields.io/github/issues/HoleInOneStudios/Quiz-Server)

![GitHub pull requests](https://img.shields.io/github/issues-pr/HoleInOneStudios/Quiz-Server)

![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/HoleInOneStudios/Quiz-Server)

![GitHub repo file count](https://img.shields.io/github/directory-file-count/HoleInOneStudios/Quiz-Server)

## Quiz Questions

Edit questions in [./data/data.xlsx](./data/data.xlsx). Each sheet is a different quiz. The first row is the header row and is ignored in the quiz. `Answered` and `Selected Answer` are not to be included in the excel file. They are generated during the quiz.

| Name            | Description            |
| --------------- | ---------------------- |
| Question        | Question string        |
| 1               | Answer choice 1        |
| 2               | Answer choice 2        |
| 3               | Answer choice 3        |
| 4               | Answer choice 4        |
| Correct         | Correct answer choice  |
| Hint            | Hint string            |
|                 |                        |
| Answered        | answered true or false |
| Selected Answer | answer choice chosen   |

## Custom Elements

Defined in [../elements/js](./public/js/elements.js). These elements don't do anything special. They just make the `.ejs' files more readable easier to maintain.

> `custom-question`

> `custom-choices`
>
> `custom-answer`

> `custom-hint`
>
> `custom-hint_text`
>
> `custom-hint_toggle`

> `custom-control`
>
> `custom-next`
>
> `custom-prev`

> `custom-score_text`

> `custom-reset`
