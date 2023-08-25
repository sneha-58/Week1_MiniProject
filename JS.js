const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "javascript",
        correct: "d",
    },
    {
        question: "Which of the following keywords is used to define a variable in Javascript?",
        a: "let",
        b: "const",
        c: "var",
        d: "All of the above",
        correct: "d",
    },
    {
        question: "Which of the following methods is used to access HTML elements using Javascript?",
        a: "getElementById()",
        b: "getElementByClassName()",
        c: "Both a and b",
        d: "None of the above",
        correct: "c",
    },
    {
        question: "How can a datatype be declared to be a constant type?",
        a: "const",
        b: "var",
        c: "constant",
        d: "let",
        correct: "a",
    },
    {
        question: "What is the use of the <noscript> tag in Javascript?",
        a: "The contents are displayed by non JS based browsers",
        b: "Clears all the cookies and caches",
        c: "Both a and b",
        d: "none of the above",
        correct: "a",
    },
    {
        question: "When an operators value is NULL, the typeof returned by the unary operator is:",
        a: "null",
        b: "undeclared",
        c: "undefined",
        d: "Object",
        correct: "d",
    },
    {
        question: "Which function is used to serialize an object into a JSON string in Javascript?",
        a: "stringify()",
        b: "parse()",
        c: "convert()",
        d: "none of the above",
        correct: "a",
    },
    {
        question: "Which of the following are closures in Javascript?",
        a: "Variables",
        b: "Functions",
        c: "Objects",
        d: "All of the above",
        correct: "d",
    },
];
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})