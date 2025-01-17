let testData = {};  // Test data
let currentTest = [];  // Current test questions
let currentQuestionIndex = 0;
let score = 0;
let skippedCount = 0;
let timeLeft = 60;
let timer;
let userAnswers = [];

async function loadTestData() {
    try {
        const response = await fetch('js/tests.json');
        if (!response.ok) throw new Error('Failed to load test data');
        testData = await response.json();
    } catch (error) {
        console.error(error);
    }
}

function showTestList() {
    const testSelect = document.getElementById('testSelect');
    Object.keys(testData).forEach(test => {
        const option = document.createElement('option');
        option.value = test;
        option.textContent = test;
        testSelect.appendChild(option);
    });
}

function startTest() {
    document.getElementById('score').textContent = ''; // Clear previous score
    document.getElementById('reviewSection').innerHTML = ''; // Clear previous review
    const selectedTest = document.getElementById('testSelect').value;
    if (!selectedTest) return;
    
    currentTest = [...testData[selectedTest]].sort(() => Math.random() - 0.5).slice(0, 5);
    currentQuestionIndex = 0;
    score = 0;
    skippedCount = 0;
    userAnswers = [];
    timeLeft = 60;
    
    document.getElementById('selected_test_container').style.display = 'block';
    document.getElementById('testSection').style.display = 'block';
    document.getElementById('resultSection').style.display = 'none';
    document.getElementById('testTitle').textContent = selectedTest;
    
    updateQuestion();
    startTimer();
}

function updateQuestion() {
    if (currentQuestionIndex >= currentTest.length) return endTest();
    
    const questionContainer = document.getElementById('questionContainer');
    const questionData = currentTest[currentQuestionIndex];
    
    questionContainer.innerHTML = `<div>${questionData.question}</div>`;
    const choices = document.createElement('ul');
    questionData.choices.forEach(choice => {
        const choiceElement = document.createElement('li');
        const choiceButton = document.createElement('button');
        choiceButton.textContent = choice;
        choiceButton.addEventListener('click', () => selectAnswer(choice, questionData));
        choiceElement.appendChild(choiceButton);
        choices.appendChild(choiceElement);
    });
    
    questionContainer.appendChild(choices);
    document.getElementById('questionControls').style.display = 'block';
}

function selectAnswer(selectedAnswer, questionData) {
    userAnswers.push({
        question: questionData.question,
        userAnswer: selectedAnswer,
        correctAnswer: questionData.choices[questionData.correctAnswer]
    });
    if (selectedAnswer === questionData.choices[questionData.correctAnswer]) score++;
    currentQuestionIndex++;
    updateQuestion();
}

function skipQuestion() {
    userAnswers.push({
        question: currentTest[currentQuestionIndex].question,
        userAnswer: 'スキップ',
        correctAnswer: currentTest[currentQuestionIndex].choices[currentTest[currentQuestionIndex].correctAnswer]
    });
    skippedCount++;
    currentQuestionIndex++;
    updateQuestion();
}

document.getElementById('skipButton').addEventListener('click', skipQuestion);

document.getElementById('endTestButton').addEventListener('click', endTest);

document.getElementById('restartTest').addEventListener('click', () => {
    document.getElementById('score').textContent = ''; // Clear previous score
    document.getElementById('reviewSection').innerHTML = ''; // Clear previous review
    document.getElementById('testSelect').value = '';
    document.getElementById('testSection').style.display = 'none';
    document.getElementById('resultSection').style.display = 'none';
    document.getElementById('selected_test_container').style.display = 'none';
});

function startTimer() {
    const timerDisplay = document.getElementById('timer');
    timer = setInterval(() => {
        timerDisplay.textContent = `残りの時間: ${timeLeft}s`;
        if (timeLeft-- <= 0) endTest();
    }, 1000);
}

function endTest() {
    clearInterval(timer);
    document.getElementById('score').textContent = `点数: ${score} / ${currentTest.length}`;
    document.getElementById('testSection').style.display = 'none';
    document.getElementById('resultSection').style.display = 'block';
    displayReview();
}

function displayReview() {
    const reviewContainer = document.getElementById('reviewSection');
    reviewContainer.innerHTML = '<h3>結果の確認:</h3>';
    userAnswers.forEach((answer, index) => {
        const reviewItem = document.createElement('p');
        reviewItem.innerHTML = `<strong>質問 ${index + 1}:</strong> ${answer.question}<br>
            <strong>あなたの回答:</strong> ${answer.userAnswer}<br>
            <strong>正解:</strong> ${answer.correctAnswer}<br>`;
        reviewItem.style.color = answer.userAnswer === answer.correctAnswer ? 'green' : answer.userAnswer === 'スキップ' ? 'orange' : 'red';
        reviewContainer.appendChild(reviewItem);
    });
}

loadTestData().then(showTestList);
document.getElementById('testSelect').addEventListener('change', startTest);
