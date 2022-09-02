// quiz navigation custom elements
class QuizNav extends HTMLElement {
    constructor () {
        super();

        this.classList.add('material-symbols-outlined');
    }
}
class Next extends QuizNav {
    constructor () {
        super();

        this.innerHTML = 'navigate_next';

        this.onclick = (event) => {
            //console.log(event);

            if (CURRENT_QUESTION < MAX_QUESTION_INDEX) {
                CURRENT_QUESTION++;

                update();
            }
        }
    }
}
class Back extends QuizNav {
    constructor () {
        super();

        this.innerHTML = 'navigate_before';

        this.onclick = (event) => {
            //console.log(event);

            if (CURRENT_QUESTION > 0) {
                CURRENT_QUESTION--;

                update();
            }
        }
    }
}
class Restart extends QuizNav {
    constructor () {
        super();

        this.innerHTML = 'replay';

        this.onclick = (event) => {
            //console.log(event);

            CURRENT_QUESTION = 0;
            SCORE = 0;

            update();
        }
    }
}

// quiz question custom elements
class Question extends HTMLElement {
    constructor () {
        super();

        update();
    }
}
class Answer extends HTMLElement {
    constructor () {
        super();
    }
}

// register custom elements
customElements.define('quiz-next', Next);
customElements.define('quiz-back', Back);
customElements.define('quiz-restart', Restart);

customElements.define('quiz-question', class extends HTMLElement { });
customElements.define('quiz-question-text', Question);
customElements.define('quiz-answer', Answer);

customElements.define('quiz-info', class extends HTMLElement { });
customElements.define('quiz-score', class extends HTMLElement { });
customElements.define('quiz-status', class extends HTMLElement { });