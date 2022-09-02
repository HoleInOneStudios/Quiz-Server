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
    }
}

class Back extends QuizNav {
    constructor () {
        super();

        this.innerHTML = 'navigate_before';
    }
}
class Restart extends QuizNav {
    constructor () {
        super();

        this.innerHTML = 'replay';
    }
}

// quiz question custom elements
class Question extends HTMLElement {
    constructor () {
        super();
    }
}

// register custom elements
customElements.define('quiz-next', Next);
customElements.define('quiz-back', Back);
customElements.define('quiz-restart', Restart);