//questions or images
const questions=[
    {
        image: "イルカ.jpg",
        correct_option: "イルカ",
    },
    {
        image: "うさぎ.jpg",
        correct_option: "うさぎ",
    },
    {
        image: "エビ.jpg",
        correct_option: "エビ",
    },
    {
        image: "カバ.jpg",
        correct_option: "カバ",
    },
    {
        image: "カラス.jpg",
        correct_option: "カラス",
    },
    {
        image: "キツネ.jpg",
        correct_option: "キツネ",
    },
    {
        image: "ねずみ.jpg",
        correct_option: "ねずみ",
    },
    {
        image: "ライオン.jpg",
        correct_option: "ライオン",
    },
    {
        image: "牛.jpg",
        correct_option: "牛",
    },
    {
        image: "魚.jpg",
        correct_option: "魚",
    },
    {
        image: "熊.jpg",
        correct_option: "熊",
    },
    {
        image: "犬.jpg",
        correct_option: "犬",
    },
    {
        image: "鹿.jpg",
        correct_option: "鹿",
    },
    {
        image: "猫.jpg",
        correct_option: "猫",
    },
];

//all options
const optionsArray = [

"イルカ","うさぎ","エビ","カバ","カラス","キツネ","ねずみ","ライオン","牛","魚","熊","犬","鹿","猫",
];
const container = document.querySelector(".container");
const gameContainer = document.querySelector(".game-container");
const startButton = document.getElementById("start");
const scoreContainer = document.querySelector(".score-container");
const userScore = document.getElementById("user-score");
let timer = document.getElementsByClassName("timer")[0];
let nextBtn;
let score, currentQuestion, finalQuestions;
let countdown,
    count = 11;

//randomvale from array
const randomValueGenerator = (array) =>
    array[Math.floor(Math.random() * array.length)];

//random shuffle array
const randomShuffle = (array) => array.sort(() => 0.5 - Math.random());

//start game
const startGame = () => {
    //select random 5 questions
    scoreContainer.classList.add("hide");
    gameContainer.classList.remove("hide");
    finalQuestions = populateQuestions();
    score = 0;
    currentQuestion = 0;
    //generate card for first question
    cardGenerator(finalQuestions[currentQuestion]);
};

//timer
const timerDisplay = () => {
    countdown = setInterval(() => {
        count -= 1;
        timer.innerHTML = `<span>残り時間: </span>${count}秒`;
        if (count == 0) {
            clearInterval(countdown);
            nextQuestion();
        }
    }, 1000);
};

//create options
const populateOptions = (correct_option) => {
    let arr = [];
    arr.push(correct_option);
    let optionsCount = 1;
    while (optionsCount < 4) {
        let randomvalue = randomValueGenerator(optionsArray);
        if (!arr.includes(randomvalue)) {
            arr.push(randomvalue);
            optionsCount += 1;
        }
    }
    return arr;
};

//choose random questions
const populateQuestions = () => {
    let questionsCount = 0;
    let chosenObjects = [];
    let questionsBatch = [];
    //5 questions
    while (questionsCount < 10) {
        let randomvalue = randomValueGenerator(questions);
        let index = questions.indexOf(randomvalue);
        if (!chosenObjects.includes(index)) {
            questionsBatch.push(randomvalue);
            chosenObjects.push(index);
            questionsCount += 1;
        }
    }
    return questionsBatch;
};

//check selected answer
const checker = (e) => {
    let userSolution = e.target.innerText;
    let options = document.querySelectorAll(".option");
    if (userSolution === finalQuestions[currentQuestion].correct_option) {
        e.target.classList.add("correct");
        score++;
    } else {
        e.target.classList.add("incorrect");
        options.forEach((element) => {
            if (element.innerText == finalQuestions[currentQuestion].correct_option) {
                element.classList.add("correct");
            }
        });
    }

    clearInterval(countdown);
    //disbale all options
    options.forEach((element) => {
        element.disabled = true;
    });
};

//next question
const nextQuestion = (e) => {
    //increment currentquestion
    currentQuestion += 1;
    if (currentQuestion == finalQuestions.length) {
        gameContainer.classList.add("hide");
        scoreContainer.classList.remove("hide");
        startButton.innerText = `リスタート`;
        userScore.innerHTML = "あなたのスコアは " + score + " / " + currentQuestion;
        clearInterval(countdown);
    } else {
        cardGenerator(finalQuestions[currentQuestion]);
    }
};

//card ui
const cardGenerator = (cardObject) => {
    const { image, correct_option } = cardObject;
    let options = randomShuffle(populateOptions(correct_option));
    container.innerHTML = `<div class="quiz">
    <p class="num">
    ${currentQuestion + 1}/10
    </p>
    <div class="questions">
    <img class="pokemon-image" src="${image}"/>
    </div>
    <div class="options">
    <button class="option" onclick="checker(event)">${options[0]}
    </button>
    <button class="option" onclick="checker(event)">${options[1]}
    </button>
    <button class="option" onclick="checker(event)">${options[2]}
    </button>
    <button class="option" onclick="checker(event)">${options[3]}
    </button>
    </div>
    
    <div class="nxt-btn-div">
    <button class="next-btn" onclick="nextQuestion(event)">次へ</button>
    </div>

    </div>`;
    //for timer
    count = 11;
    clearInterval(countdown);
    //display timer
    timerDisplay();
};
  

startButton.addEventListener("click", startGame);
