let testData = {};  // Test data
let currentTest = [];  // Current test questions
let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 60;  // Test time in seconds

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
    if (selectedTest) {
        currentTest = testData[selectedTest];
        currentQuestionIndex = 0;
        score = 0;
        timeLeft = 60;
        document.getElementById('testSection').style.display = 'block';
        document.getElementById('resultSection').style.display = 'none';
        document.getElementById('testTitle').textContent = selectedTest;
        updateQuestion();
        startTimer();
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
            choiceButton.addEventListener('click', () => checkAnswer(index)); // Use the click event properly
            choiceElement.appendChild(choiceButton);
            choices.appendChild(choiceElement);
        });

        questionContainer.appendChild(questionElement);
        questionContainer.appendChild(choices);
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
    document.getElementById('score').textContent = `点数: ${score} / ${currentTest.length}`;
    document.getElementById('finalScore').textContent = `点数: ${score} / ${currentTest.length}`;
    document.getElementById('testSection').style.display = 'none';
    document.getElementById('resultSection').style.display = 'block';
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
});

// Load test data and show test list
loadTestData().then(showTestList);
document.getElementById('testSelect').addEventListener('change', startTest);
