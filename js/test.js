let testData = {};  // Test data
let currentTest = [];  // Current test questions
let currentQuestionIndex = 0;
let score = 0;
let skippedCount = 0;  // Track skipped questions
let timeLeft = 60;  // Test time in seconds
let timer;
let userAnswers = [];  // Store user answers for review

// Load test data from JSON file
async function loadTestData() {
    try {
        const response = await fetch('js/tests.json');
        if (!response.ok) {
            throw new Error('Failed to load test data');
        }
        testData = await response.json();
    } catch (error) {
        console.error(error);
    }
}

// Display the list of tests in the select dropdown
function showTestList() {
    const testSelect = document.getElementById('testSelect');
    Object.keys(testData).forEach(test => {
        const option = document.createElement('option');
        option.value = test;
        option.textContent = test;
        testSelect.appendChild(option);
    });
}

// Start the test
function startTest() {
    const selectedTest = document.getElementById('testSelect').value;
    const selectedTestContainer = document.getElementById('selected_test_container');

    if (selectedTest) {
        currentTest = testData[selectedTest];
        currentQuestionIndex = 0;
        score = 0;
        skippedCount = 0;
        userAnswers = [];
        timeLeft = 60;
        selectedTestContainer.style.display = 'block'; // Show the container when a test is selected
        document.getElementById('testSection').style.display = 'block';
        document.getElementById('resultSection').style.display = 'none';
        document.getElementById('testTitle').textContent = selectedTest;
        updateQuestion();
        startTimer();
    } else {
        selectedTestContainer.style.display = 'none'; // Hide the container if no test is selected
    }
}

// Update the question and choices
function updateQuestion() {
    const questionContainer = document.getElementById('questionContainer');
    const questionData = currentTest[currentQuestionIndex];
    
    if (questionData) {
        questionContainer.innerHTML = '';
        const questionElement = document.createElement('div');
        questionElement.textContent = questionData.question;

        const choices = document.createElement('ul');
        questionData.choices.forEach((choice, index) => {
            const choiceElement = document.createElement('li');
            const choiceButton = document.createElement('button');
            choiceButton.textContent = choice;
            choiceButton.setAttribute('data-index', index); // Store index as data attribute
            choiceButton.addEventListener('click', () => {
                userAnswers.push({ question: questionData.question, userAnswer: choice, correctAnswer: questionData.correctAnswer });
                checkAnswer(index);
            });
            choiceElement.appendChild(choiceButton);
            choices.appendChild(choiceElement);
        });

        questionContainer.appendChild(questionElement);
        questionContainer.appendChild(choices);

        // Display the "Skip" button
        document.getElementById('questionControls').style.display = 'block';
    } else {
        endTest();
    }
}

// Check if the selected answer is correct
function checkAnswer(selectedAnswer) {
    const correctAnswer = currentTest[currentQuestionIndex].correctAnswer;
    if (selectedAnswer === correctAnswer) {
        score++;
    }
    currentQuestionIndex++;
    updateQuestion(); 
}

// Skip Question Logic
document.getElementById('skipButton').addEventListener('click', () => {
    skippedCount++;
    userAnswers.push({ question: currentTest[currentQuestionIndex].question, userAnswer: 'スキップ', correctAnswer: currentTest[currentQuestionIndex].correctAnswer });
    currentQuestionIndex++;
    updateQuestion();
});

// Start the timer
function startTimer() {
    const timerDisplay = document.getElementById('timer');
    timer = setInterval(() => {
        timerDisplay.textContent = `残りの時間: ${timeLeft}s`;
        timeLeft--;

        if (timeLeft < 0) {
            clearInterval(timer);
            endTest();
        }
    }, 1000);
}

// End the test and display the result
function endTest() {
    clearInterval(timer);

    // Display Final Score
    const scorePercentage = Math.round((score / currentTest.length) * 100);
    const grade = scorePercentage >= 90 ? 'A' : scorePercentage >= 75 ? 'B' : scorePercentage >= 50 ? 'C' : 'D';

    document.getElementById('score').textContent = `点数: ${score} / ${currentTest.length}`;
    document.getElementById('finalScore').textContent = `点数: ${score} / ${currentTest.length} (${scorePercentage}%, 評価: ${grade})`;
    document.getElementById('testSection').style.display = 'none';
    document.getElementById('resultSection').style.display = 'block';

    // Display Detailed Review
    const reviewContainer = document.getElementById('reviewSection');
    reviewContainer.innerHTML = '<h3>結果の確認:</h3>';
    userAnswers.forEach((answer, index) => {
        const reviewItem = document.createElement('p');
        reviewItem.innerHTML = `<strong>質問 ${index + 1}:</strong> ${answer.question} <br>
            <strong>あなたの回答:</strong> ${answer.userAnswer} <br>
            <strong>正解:</strong> ${answer.correctAnswer} <br>`;
        if (answer.userAnswer === answer.correctAnswer) {
            reviewItem.style.color = 'green';
        } else if (answer.userAnswer === 'スキップ') {
            reviewItem.style.color = 'orange';
        } else {
            reviewItem.style.color = 'red';
        }
        reviewContainer.appendChild(reviewItem);
    });
}

// Event listener for the "終了" button to end the test
document.getElementById('endTestButton').addEventListener('click', () => {
    endTest();
});

// Restart the test
document.getElementById('restartTest').addEventListener('click', () => {
    document.getElementById('testSelect').value = '';
    document.getElementById('testSection').style.display = 'none';
    document.getElementById('resultSection').style.display = 'none';
    document.getElementById('selected_test_container').style.display = 'none'; // Hide the container when restarting
});

// Load test data and show test list
loadTestData().then(showTestList);
document.getElementById('testSelect').addEventListener('change', startTest);