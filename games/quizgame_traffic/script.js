//questions or images
const questions=[
    {
        image: "オートバイ.jpg",
        correct_option: "オートバイ",
    },
    {
        image: "クラクションを鳴らす.jpg",
        correct_option: "クラクションを鳴らす",
    },
    {
        image: "スポーツカー.jpg",
        correct_option: "スポーツカー",
    },
    {
        image: "タクシー.jpg",
        correct_option: "タクシー",
    },
    {
        image: "トラック.jpg",
        correct_option: "トラック",
    },
    {
        image: "バス.jpg",
        correct_option: "バス",
    },
    {
        image: "パトカー.jpg",
        correct_option: "パトカー",
    },
    {
        image: "フェリー.jpg",
        correct_option: "フェリー",
    },
    {
        image: "ヘリコプター.jpg",
        correct_option: "ヘリコプター",
    },
    {
        image: "ヨット.jpg",
        correct_option: "ヨット",
    },
    {
        image: "右に曲がる.jpg",
        correct_option: "右に曲がる",
    },
    {
        image: "横断歩道を渡す.jpg",
        correct_option: "横断歩道を渡す",
    },
    {
        image: "汽車.jpg",
        correct_option: "汽車",
    },
    {
        image: "救急車.jpg",
        correct_option: "救急車",
    },
    {
        image: "橋を渡す.jpg",
        correct_option: "橋を渡す",
    },
    {
        image: "左に曲がる.jpg",
        correct_option: "左に曲がる",
    },
    {
        image: "三輪車.jpg",
        correct_option: "三輪車",
    },
    {
        image: "自転車.jpg",
        correct_option: "自転車",
    },
    {
        image: "車.jpg",
        correct_option: "車",
    },
    {
        image: "渋滞.jpg",
        correct_option: "渋滞",
    },
    {
        image: "消防車.jpg",
        correct_option: "消防車",
    },
    {
        image: "信号を守る.jpg",
        correct_option: "信号を守る",
    },
    {
        image: "信号を無視する.jpg",
        correct_option: "信号を無視する",
    },
    {
        image: "信号待.jpg",
        correct_option: "信号待",
    },
    {
        image: "新幹線.jpg",
        correct_option: "新幹線",
    },
    {
        image: "人力車.jpg",
        correct_option: "人力車",
    },
    {
        image: "制限速度オーバー.jpg",
        correct_option: "制限速度オーバー",
    },
    {
        image: "制限速度を守る.jpg",
        correct_option: "制限速度を守る",
    },
    {
        image: "船.jpg",
        correct_option: "船",
    },
    {
        image: "前の車を追い越される.jpg",
        correct_option: "前の車を追い越される",
    },
    {
        image: "前の車を追い越す.jpg",
        correct_option: "前の車を追い越す",
    },
    {
        image: "地下鉄.jpg",
        correct_option: "地下鉄",
    },
    {
        image: "電車.jpg",
        correct_option: "電車",
    },
    {
        image: "道がすく.jpg",
        correct_option: "道がすく",
    },
    {
        image: "道が混む.jpg",
        correct_option: "道が混む",
    },
    {
        image: "道を曲がる.jpg",
        correct_option: "道を曲がる",
    },
    {
        image: "馬車.jpg",
        correct_option: "馬車",
    },
    {
        image: "白バイ.jpg",
        correct_option: "白バイ",
    },
    {
        image: "帆船.jpg",
        correct_option: "帆船",
    },
    {
        image: "飛行機.jpg",
        correct_option: "飛行機",
    },
    {
        image: "免許証をもっていますか.jpg",
        correct_option: "免許証をもっていますか",
    },

];

//all options
const optionsArray = [

"オートバイ","クラクションを鳴らす","スポーツカー","タクシー","トラック","バス","パトカー","フェリー",
"ヘリコプター","ヨット","右に曲がる","横断歩道を渡す","汽車","救急車","橋を渡す","左に曲がる","三輪車",
"自転車","車","渋滞","消防車","信号を守る","信号を無視する","信号待","新幹線","人力車","制限速度オーバー",
"制限速度を守る","船","前の車を追い越される","前の車を追い越す","地下鉄","電車","道がすく","道が混む",
"道を曲がる","馬車","白バイ","帆船","飛行機","免許証をもっていますか",

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
