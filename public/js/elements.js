const custom_element_directives = [
    customElements.define('custom-question', class extends HTMLElement { }),
    customElements.define('custom-choices', class extends HTMLElement { }),
    customElements.define('custom-answer', class extends HTMLElement { }),
    customElements.define('custom-hint', class extends HTMLElement { }),
    customElements.define('custom-hint_text', class extends HTMLElement { }),
    customElements.define('custom-hint_toggle', class extends HTMLElement { }),
    customElements.define('custom-control', class extends HTMLElement { }),
    customElements.define('custom-next', class extends HTMLElement { }),
    customElements.define('custom-prev', class extends HTMLElement { }),
    customElements.define('custom-score_text', class extends HTMLElement { }),
    customElements.define('custom-reset', class extends HTMLElement { })
];

export { custom_element_directives };