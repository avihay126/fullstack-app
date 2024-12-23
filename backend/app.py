from flask import Flask, jsonify, request
import MySQLdb
from flask_cors import CORS
app = Flask(__name__)
CORS(app)
# חיבור למסד נתונים
db = MySQLdb.connect(
    host="localhost",
    user="root",  # שנה לשם משתמש ב-db שלך
    password="1234",  # שנה לסיסמה שלך
    database="flaskdb"
)

cursor = db.cursor()

@app.route('/users', methods=['GET'])
def get_users():
    cursor.execute("SELECT * FROM users")
    users = cursor.fetchall()
    return jsonify(users)

@app.route('/add_user', methods=['POST'])
def add_user():
    data = request.get_json()
    name = data['name']
    email = data['email']
    cursor.execute("INSERT INTO users (name, email) VALUES (%s, %s)", (name, email))
    db.commit()
    return jsonify({"message": "User added successfully!"})

if __name__ == '__main__':
    app.run(debug=True)
