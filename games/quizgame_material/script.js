//questions or images
const questions=[
    {
        image: "あぶら.jpg",
        correct_option: "あぶら",
    },
    {
        image: "ごま油.jpg",
        correct_option: "ごま油",
    },
    {
        image: "こめ.jpg",
        correct_option: "こめ",
    },
    {
        image: "しょうゆ.jpg",
        correct_option: "しょうゆ",
    },
    {
        image: "トイレ用洗剤.jpg",
        correct_option: "トイレ用洗剤",
    },
    {
        image: "とうふ.jpg",
        correct_option: "とうふ",
    },
    {
        image: "バター.jpg",
        correct_option: "バター",
    },
    {
        image: "ヨーグルト.jpg",
        correct_option: "ヨーグルト",
    },
    {
        image: "ラーメン.jpg",
        correct_option: "ラーメン",
    },
    {
        image: "わさび.jpg",
        correct_option: "わさび",
    },
    {
        image: "果汁.jpg",
        correct_option: "果汁",
    },
    {
        image: "果物.jpg",
        correct_option: "果物",
    },
    {
        image: "干物.jpg",
        correct_option: "干物",
    },
    {
        image: "牛乳.jpg",
        correct_option: "牛乳",
    },
    {
        image: "魚.jpg",
        correct_option: "魚",
    },
    {
        image: "玄米茶.jpg",
        correct_option: "玄米茶",
    },
    {
        image: "小麦粉.jpg",
        correct_option: "小麦粉",
    },
    {
        image: "食器用洗剤.jpg",
        correct_option: "食器用洗剤",
    },
    {
        image: "洗剤.jpg",
        correct_option: "洗剤",
    },
    {
        image: "調味料.jpg",
        correct_option: "調味料",
    },
    {
        image: "天ぷら.jpg",
        correct_option: "天ぷら",
    },
    {
        image: "肉.jpg",
        correct_option: "肉",
    },
    {
        image: "弁当.jpg",
        correct_option: "弁当",
    },
    {
        image: "抹茶.jpg",
        correct_option: "抹茶",
    },
    {
        image: "餅米.jpg",
        correct_option: "餅米",
    },
    {
        image: "野菜.jpg",
        correct_option: "野菜",
    },
    {
        image: "浴室用洗剤.jpg",
        correct_option: "浴室用洗剤",
    },
    {
        image: "冷凍食品.jpg",
        correct_option: "冷凍食品",
    },

];

//all options
const optionsArray = [

"あぶら","ごま油","こめ","しょうゆ","トイレ用洗剤","とうふ","バター","ヨーグルト","ラーメン","わさび",
"果汁","果物","干物","牛乳","魚","玄米茶","小麦粉","食器用洗剤","洗剤","調味料",
"天ぷら","肉","弁当","抹茶","餅米","野菜","浴室用洗剤","冷凍食品",
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
