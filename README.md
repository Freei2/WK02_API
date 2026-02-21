# Node.js API Assignment

Simple REST API using Node.js (without Express)

---

## 📌 Description

This project is a simple API built using Node.js built-in `http` module (no external libraries).

It supports:

- GET method
- POST method
- JSON response

---

## 🚀 How to Run

1. Install Node.js
2. Clone this repository
3. Run the server

```bash
node server.js
```

Server will start at:

```
http://localhost:3000
```

---

## 📡 API Endpoints

### ✅ 1. GET /

If no query parameter:

**Request**
```
GET /
```

**Response**
```json
{ "msg": "Hello" }
```

---

### ✅ 2. GET /?message=anyvalue

If query parameter `message` exists:

**Request**
```
GET /?message=abc
```

**Response**
```json
{ "msg": "Hello, How are you?" }
```

---

### ✅ 3. POST /api/sayhi

**Request**
```
POST /api/sayhi
Content-Type: application/json
```

**Body**
```json
{
  "name": "John"
}
```

**Response**
```json
{
  "msg": "Hello John, How are you?"
}
```

---

## 📁 Project Structure

```
my-api/
│
├── server.js
├── package.json
└── README.md
```

---

## 🛠 Built With

- Node.js (http module)

---

## 👨‍💻 Author

Your Name
