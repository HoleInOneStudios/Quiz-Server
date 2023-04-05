// Get DOM elements
const START = $("quiz-start").get(0);
const INFO = $("quiz-info").get(0);

const MAIN = $("quiz-main").get(0);
const QUESTION = $("quiz-question").get(0);
const ANSWERS = $("quiz-answer");

const HINT_TOGGLE = $("quiz-hint-toggle").get(0);
const HINT_TEXT = $("quiz-hint-text").get(0);

const QUIZ_STATUS = $("quiz-current-question").get(0);
const QUIZ_SCORE = $("quiz-score").get(0);
const QUIZ_TRIES = $("quiz-tries").get(0);

const AUDIO_TOGGLE = $("quiz-audio-toggle").get(0);
console.log(AUDIO_TOGGLE);

const FINISH = $("quiz-finish").get(0);

const QUIZ_RESULTS = $("quiz-results").get(0);

const LOGO = $("quiz-logo").get(0);

// Audio DOM
const CORRECT = $("#correct_Audio").get(0);
const INCORRECT = $("#incorrect_Audio").get(0);
const MUSIC = $("#music_Audio").get(0);

const AUDIOS = $("audio");
console.log(AUDIOS);

// nav buttons
const NEXT_QUESTION = $("quiz-next").get(0);
const RESTART = $("quiz-restart").get(0);

console.log("DOM.js Loaded Successfully ✅...");
