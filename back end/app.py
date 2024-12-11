from flask import Flask, request, jsonify
from flask_cors import CORS  # Import Flask-CORS

app = Flask(__name__)
CORS(app, resources={r"/register": {"origins": "http://127.0.0.1:5500"}})  # Bật CORS cho toàn bộ ứng dụng

users = {}  # Giả định bạn có biến này để lưu trữ người dùng

@app.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    if data['email'] in users:
        return jsonify({'message': 'Email already registered'}), 400
    users[data['email']] = {'name': data['name'], 'password': data['password']}
    return jsonify({'message': 'User registered successfully'})

# Các route khác...

app = Flask(__name__)

# Database giả để lưu thông tin người dùng
users = {}
vocabulary = ['apple', 'banana', 'cherry']
questions = [
    {'question': 'What is 2 + 2?', 'answer': '4'},
    {'question': 'What is the capital of France?', 'answer': 'Paris'}
]

# Đăng ký
@app.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    if data['email'] in users:
        return jsonify({'message': 'Email already registered'}), 400
    users[data['email']] = {'name': data['name'], 'password': data['password']}
    return jsonify({'message': 'User registered successfully'})

# Đăng nhập
@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    if data['email'] in users and users[data['email']]['password'] == data['password']:
        return jsonify({'message': f'Welcome back, {users[data["email"]]["name"]}!'})
    return jsonify({'message': 'Invalid email or password'}), 401

# Lấy từ vựng
@app.route('/vocabulary', methods=['GET'])
def get_vocabulary():
    return jsonify({'vocabulary': vocabulary})

# Lấy câu hỏi kiểm tra
@app.route('/test', methods=['GET'])
def get_test():
    return jsonify({'questions': questions})

# Gửi bài kiểm tra
@app.route('/test-submit', methods=['POST'])
def submit_test():
    data = request.get_json()
    answers = data['answers']
    score = 0
    for i in range(len(answers)):
        if answers[i] == questions[i]['answer']:
            score += 1
    return jsonify({'score': score})

if __name__ == '__main__':
    app.run(debug=True)
# Lấy thông tin tất cả người dùng đã đăng ký
@app.route('/users', methods=['GET'])
def get_users():
    return jsonify(users)

# Lấy thông tin người dùng theo email
@app.route('/users/<email>', methods=['GET'])
def get_user_by_email(email):
    user = users.get(email)
    if user:
        return jsonify(user)
    return jsonify({'message': 'User not found'}), 404
