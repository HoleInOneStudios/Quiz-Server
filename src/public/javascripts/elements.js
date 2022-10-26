const navigationElements = {
    Next: class extends HTMLElement {
        constructor () {
            super(); //Required Constructor Call

            this.innerHTML = 'navigate_next';
            this.tabIndex = 0;
            this.classList.add('material-symbols-outlined');

            this.onclick = async (event) => {
                showFinalScreen();
                update();
            }
            this.addEventListener('keydown', async (event) => {
                if (event.key == 'Enter') {
                    showFinalScreen();
                }
            });
        }
    },
    Back: class extends HTMLElement {
        constructor () {
            super(); //Required Constructor Call

            this.innerHTML = 'navigate_before';
            this.tabIndex = 0;
            this.classList.add('material-symbols-outlined');

            this.onclick = async (event) => {

                if (CURRENT_QUESTION > 0) {
                    CURRENT_QUESTION--;
                    update();
                }
            }
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
    },
    Restart: class extends HTMLElement {
        constructor () {
            super(); //Required Constructor Call

            this.innerHTML = 'replay';
            this.tabIndex = 0;
            this.classList.add('material-symbols-outlined');

            this.onclick = async (event) => {
                await new Promise(r => setTimeout(r, 500));

                restart();
                update();
            }
            this.addEventListener('keydown', async (event) => {
                if (event.key == 'Enter') {
                    await new Promise(r => setTimeout(r, 500));

                    restart();
                    update();
                }
            });
        }
    }
}

const hintElements = {
    Hint: class extends HTMLElement {
        constructor () {
            super(); //Required Constructor Call

            this.tabIndex = 0;
            this.tabIndex = 0;
            this.classList.add('material-symbols-outlined');

            this.onclick = (event) => {
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
        }
    },
    HintText: class extends HTMLElement {
        constructor () {
            super(); //Required Constructor Call
            this.classList = 'hidden';
        }
    }
}

const mainQuizElements = {
    Question: class extends HTMLElement {
        constructor () {
            super(); //Required Constructor Call
        }
    },
    AnswerContainer: class extends HTMLElement {
        constructor () {
            super(); //Required Constructor Call
        }
    },
    Answer: class extends HTMLElement {
        constructor () {
            super(); //Required Constructor Call
            this.tabIndex = 0; //Required for focus
        }
    }
}

// register custom elements

customElements.define('quiz-container', class extends HTMLElement { });
customElements.define('quiz-title', class extends HTMLElement { });
customElements.define('quiz-question', class extends HTMLElement { });
customElements.define('quiz-info', class extends HTMLElement { });
customElements.define('quiz-score', class extends HTMLElement { });
customElements.define('quiz-status', class extends HTMLElement { });
customElements.define('quiz-hint', class extends HTMLElement { });
customElements.define('quiz-finish', class extends HTMLElement { });
customElements.define('quiz-start', class extends HTMLElement { });
customElements.define('quiz-audio-toggle', class extends HTMLElement { });

customElements.define('quiz-question-text', mainQuizElements.Question);
customElements.define('quiz-answer-container', mainQuizElements.AnswerContainer)
customElements.define('quiz-answer', mainQuizElements.Answer);

customElements.define('quiz-next', navigationElements.Next);
customElements.define('quiz-back', navigationElements.Back);
customElements.define('quiz-restart', navigationElements.Restart);

customElements.define('quiz-hint-toggle', hintElements.Hint);
customElements.define('quiz-hint-text', hintElements.HintText);
