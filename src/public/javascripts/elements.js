const custom_element_directives = [
    customElements.define('c-question', class extends HTMLElement { }),
    customElements.define('c-choices', class extends HTMLElement { }),
    customElements.define('c-answer', class extends HTMLElement { }),
    customElements.define('c-hint', class extends HTMLElement { }),
    customElements.define('c-hint_text', class extends HTMLElement { }),
    customElements.define('c-hint_toggle', class extends HTMLElement { }),
    customElements.define('c-control', class extends HTMLElement { }),
    customElements.define('c-next', class extends HTMLElement { }),
    customElements.define('c-prev', class extends HTMLElement { }),
    customElements.define('c-score_text', class extends HTMLElement { }),
    customElements.define('c-reset', class extends HTMLElement { })
];