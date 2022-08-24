# samsat-quiz-app

## Quiz Question

Edit questions in [./data/data.xlsx](./data/data.xlsx). Each sheet is a different quiz. The first row is the header row and is ignored in the quiz.
`Answered` and `Selected Answer` are not to be included in the excel file. They are generated during the quiz.

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

Defined in [../elements/js](./public/js/elements.js). These elements don't do anything special. They just make the `.ejs' files more readable.

> `custom-question`

> `custom-choices`
>
> `custom-answer`

>`custom-hint`
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