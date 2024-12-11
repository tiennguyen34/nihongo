// Đăng ký người dùng
document.addEventListener("DOMContentLoaded", function() {
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            fetch('http://127.0.0.1:5000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, password })
            })
            .then(response => response.json())
            .then(data => {
                if (data.message) {
                    document.getElementById('registerMessage').textContent = data.message;
                } else {
                    document.getElementById('registerMessage').textContent = 'Registration failed';
                }
            })
            .catch(error => {
                console.error('Error registering:', error);
                document.getElementById('registerMessage').textContent = 'Error occurred while registering';
            });
        });
    }
});


    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            fetch('http://127.0.0.1:5000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password })
            })
            .then(response => response.json())
            .then(data => {
                document.getElementById('loginMessage').textContent = data.message;
            })
            .catch(error => console.error('Error logging in:', error));
        });
    }

    // Học từ vựng
    const vocabularyList = document.getElementById('vocabulary-list');
    if (vocabularyList) {
        fetch('http://127.0.0.1:5000/vocabulary')
            .then(response => response.json())
            .then(data => {
                data.vocabulary.forEach(word => {
                    let li = document.createElement('li');
                    li.textContent = word;
                    vocabularyList.appendChild(li);
                });
            })
            .catch(error => console.error('Error fetching vocabulary:', error));
    }

    // Kiểm tra
    const testForm = document.getElementById('testForm');
    const testResult = document.getElementById('testResult');
    if (testForm) {
        fetch('http://127.0.0.1:5000/test')
            .then(response => response.json())
            .then(data => {
                data.questions.forEach(question => {
                    const p = document.createElement('p');
                    p.textContent = question.question;
                    const input = document.createElement('input');
                    input.type = 'text';
                    input.name = 'answer';
                    testForm.appendChild(p);
                    testForm.appendChild(input);
                });
            })
            .catch(error => console.error('Error fetching test:', error));
        
        document.getElementById('submitTest').addEventListener('click', function() {
            const answers = [...testForm.querySelectorAll('input[name="answer"]')].map(input => input.value);
            fetch('http://127.0.0.1:5000/test-submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ answers })
            })
            .then(response => response.json())
            .then(data => {
                testResult.textContent = `Your score: ${data.score}`;
            })
            .catch(error => console.error('Error submitting test:', error));
        });
    }

