// quiz navigation custom elements
class QuizNav extends HTMLElement {
    constructor () {
        super();

        this.tabIndex = 0;
        this.classList.add('material-symbols-outlined');
    }
}
class Next extends QuizNav {
    constructor () {
        super();

        this.innerHTML = 'navigate_next';

        this.onclick = async (event) => {
            //console.log(event);
            showFinalScreen();
            update();
        }
        this.addEventListener('keyup', async (event) => { });
        this.addEventListener('keydown', async (event) => {
            if (event.key == 'Enter') {
                showFinalScreen();
            }
        });
    }
}
class Back extends QuizNav {
    constructor () {
        super();

        this.innerHTML = 'navigate_before';

        this.onclick = async (event) => {
            //console.log(event);

            if (CURRENT_QUESTION > 0) {
                CURRENT_QUESTION--;
                update();
            }
        }
        this.addEventListener('keyup', async (event) => { });
        this.addEventListener('keydown', async (event) => {
            if (event.key == 'Enter') {
                if (CURRENT_QUESTION > 0) {
                    CURRENT_QUESTION--;
                    update();
                }
            }
        });

        if (HINT_SHOWING) {
            HINT_SHOWING = false;
        }
        else {
            HINT_SHOWING = true;
        }

        updateHint();
    }
}
class Restart extends QuizNav {
    constructor () {
        super();

        this.innerHTML = 'replay';

        this.onclick = async (event) => {
            //console.log(event);

            await new Promise(r => setTimeout(r, 500));

            restart();
            update();
        }
        this.addEventListener('keyup', async (event) => { });
        this.addEventListener('keydown', async (event) => {
            if (event.key == 'Enter') {
                await new Promise(r => setTimeout(r, 500));

                restart();
                update();
            }
        });
    }
}
class Hint extends QuizNav {
    constructor () {
        super();

        this.tabIndex = 0;

        this.onclick = (event) => {
            //console.log(event);

            if (HINT_SHOWING) {
                HINT_SHOWING = false;
            }
            else {
                HINT_SHOWING = true;
            }

            updateHint();
        }
        this.addEventListener('keydown', async (event) => {
            if (event.key == 'Enter') {
                if (HINT_SHOWING) {
                    HINT_SHOWING = false;
                }
                else {
                    HINT_SHOWING = true;
                }

                updateHint();
            }
        });
        this.addEventListener('keyup', async (event) => { });

    }
}

// quiz question custom elements
class Question extends HTMLElement {
    constructor () {
        super();

        update();
    }
}
class AnswerContainer extends HTMLElement {
    constructor () {
        super();
    }
}
class Answer extends HTMLElement {
    constructor () {
        super();

        this.tabIndex = 0;
    }
}
class HintText extends HTMLElement {
    constructor () {
        super();

        this.classList = 'hidden';
    }
}

// register custom elements
customElements.define('quiz-next', Next);
customElements.define('quiz-back', Back);
customElements.define('quiz-restart', Restart);
customElements.define('quiz-container', class extends HTMLElement { });
customElements.define('quiz-title', class extends HTMLElement { });
customElements.define('quiz-question', class extends HTMLElement { });
customElements.define('quiz-question-text', Question);
customElements.define('quiz-answer-container', AnswerContainer)
customElements.define('quiz-answer', Answer);
customElements.define('quiz-info', class extends HTMLElement { });
customElements.define('quiz-score', class extends HTMLElement { });
customElements.define('quiz-status', class extends HTMLElement { });
customElements.define('quiz-hint', class extends HTMLElement { });
customElements.define('quiz-hint-toggle', Hint);
customElements.define('quiz-hint-text', HintText);
customElements.define('quiz-finish', class extends HTMLElement { });
customElements.define('quiz-start', class extends HTMLElement { });
customElements.define('quiz-audio-toggle', class extends HTMLElement { });