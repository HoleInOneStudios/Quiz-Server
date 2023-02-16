/**
 * quiz-start
 *      quiz-title
 *      quiz-start-button
 * quiz-main
 *      quiz-question
 *          quiz-answers
 *          quiz-answer
 *      quiz-status
 *          quiz-current-question
 *          quiz-score
 *          quiz-tries
 *     quiz-hint
 *          quiz-hint-toggle
 *          quiz-hint-text
 *    quiz-nav
 *        quiz-restart
 *        quiz-next 
 * quiz-finish
 *    quiz-results
 * quiz-audio-toggle
 * quiz-logo
 */

const ELEMENTS = [
    'quiz-start',
    'quiz-title',
    'quiz-start-button',
    'quiz-main',
    'quiz-question',
    'quiz-answers',
    'quiz-answer',
    'quiz-status',
    'quiz-info',
    'quiz-current-question',
    'quiz-score',
    'quiz-tries',
    'quiz-hint',
    'quiz-hint-toggle',
    'quiz-hint-text',
    'quiz-nav',
    'quiz-restart',
    'quiz-next',
    'quiz-finish',
    'quiz-results',
    'quiz-audio-toggle',
    'quiz-logo'
];

ELEMENTS.forEach(element => {
    customElements.define(element, class extends HTMLElement { });
});