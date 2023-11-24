document.addEventListener("DOMContentLoaded", function() {
    var clickElement = document.querySelector(".text-content p");
    clickElement.addEventListener("click", function(event) {
        event.preventDefault();
        alert("Hello!");

    });

    var h3Element = document.querySelector(".text-content h3");
    h3Element.addEventListener("mouseover", function() {
        h3Element.style.backgroundColor = "#AD8B73";
    });

    h3Element.addEventListener("mouseout", function() {
        h3Element.style.backgroundColor = "transparent";
    });

    document.addEventListener("keypress", function(event) {
        console.log("Key pressed: " + event.key);
    });

    var animationElement = document.querySelector(".home-content");

    function animateElement() {
        animationElement.style.backgroundColor = "#AD8B73";
        setTimeout(function() {
            animationElement.style.backgroundColor = "white";
        }, 1000);
    }

    // Trigger animation on button click
    clickElement.addEventListener("click", animateElement);
});


var swiper = new Swiper('.swiper-container', {
    pagination: 'swiper-pagination',
    effect: 'coverflow',
    grabCursor: true,
    slidesPerView: 'auto',
    coverflow: {
        rotate: 20,
        stretch: 0,
        depth: 200,
        modifier: 1,
        slideSadhows: true,
    },
    loop: true,
})

const quizData = [{
        question: "How long was the shelf life of carbonated drinks?",
        a: "7 days",
        b: "30 days",
        c: "60 days",
        d: "45 days",
        correct: "a",
    },
    {
        question: "Who was chasing Crazy Frog in the video?",
        a: "Black devil",
        b: "Green goblin",
        c: "Red robot",
        d: "Blue kiborg",
        correct: "c",
    },
    {
        question: "Прилетит вдруг волшебник,В голубом вертолёте, И бесплатно покажет кино. Which music?",
        a: "Chunga changa",
        b: "Cheburashka",
        c: "Nostalgia",
        d: "Song of the crocodile Gena",
        correct: "d",
    },
    {
        question: "Tagline.'Well, hare! Wait for it!' Who say?",
        a: "Wolf",
        b: "Bunny",
        c: "Gena",
        d: "Marat",
        correct: "a",
    },
];
const quiz = document.getElementById('quiz')
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
    console.log('Loading quiz...');
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    console.log('Getting selected answer...');
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    console.log('Submit button clicked');
    const answer = getSelected()
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++
        }
        currentQuiz++
        if (currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="location.reload()">Reload</button>
           `
        }
    }
})