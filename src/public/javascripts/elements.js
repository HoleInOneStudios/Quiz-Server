// quiz navigation custom elements
class QuizNav extends HTMLElement {
  constructor() {
    super();

    this.classList.add("material-symbols-outlined");
  }
}
class Next extends QuizNav {
  constructor() {
    super();

    this.innerHTML = "navigate_next";

    this.onclick = (event) => {
      // console.log(event);

      if (CURRENT_QUESTION < MAX_QUESTION_INDEX) {
        CURRENT_QUESTION++;

        update();
      }
    };
  }
}
class Back extends QuizNav {
  constructor() {
    super();

    this.innerHTML = "navigate_before";

    this.onclick = (event) => {
      // console.log(event);

      if (CURRENT_QUESTION > 0) {
        CURRENT_QUESTION--;

        update();
      }
    };
  }
}
class Restart extends QuizNav {
  constructor() {
    super();

    this.innerHTML = "replay";

    this.onclick = (event) => {
      // console.log(event);

      restart();
      update();
    };
  }
}
class Hint extends QuizNav {
  constructor() {
    super();

    this.innerHTML = "question_mark";

    this.onclick = (event) => {
      // console.log(event);

      if (HINT_SHOWING) {
        HINT_SHOWING = false;
      } else {
        HINT_SHOWING = true;
      }

      updateHint();
    };
  }
}

// quiz question custom elements
class Question extends HTMLElement {
  constructor() {
    super();

    update();
  }
}
class AnswerContainer extends HTMLElement {
  constructor() {
    super();
  }
}
class Answer extends HTMLElement {
  constructor() {
    super();
  }
}

class HintText extends HTMLElement {
  constructor() {
    super();

    this.classList = "hidden";
  }
}

// register custom elements
customElements.define("quiz-next", Next);
customElements.define("quiz-back", Back);
customElements.define("quiz-restart", Restart);

customElements.define("quiz-container", class extends HTMLElement {});
customElements.define("quiz-question", class extends HTMLElement {});
customElements.define("quiz-question-text", Question);
customElements.define("quiz-answer-container", AnswerContainer);
customElements.define("quiz-answer", Answer);

customElements.define("quiz-info", class extends HTMLElement {});
customElements.define("quiz-score", class extends HTMLElement {});
customElements.define("quiz-status", class extends HTMLElement {});

customElements.define("quiz-hint", class extends HTMLElement {});
customElements.define("quiz-hint-toggle", class extends Hint {});
customElements.define("quiz-hint-text", class extends HintText {});
