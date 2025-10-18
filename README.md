# 🧙‍♂️ Backend Wizards — Stage 0 Task  
## Build a Dynamic Profile Endpoint

Welcome to **Stage 0** of the **HNG13 Backend Track!** 🎯  
This project implements a simple RESTful API endpoint that returns **my profile information** along with a **dynamic cat fact** fetched from an external API.

---

## 📋 Task Description

Create a GET endpoint `/me` that returns a JSON response with the following fields:

```json
{
  "status": "success",
  "user": {
    "email": "<your email>",
    "name": "<your full name>",
    "stack": "<your backend stack>"
  },
  "timestamp": "<current UTC time in ISO 8601 format>",
  "fact": "<random cat fact from Cat Facts API>"
}
````

---

## 👤 Developer Information

| Field     | Details                                                               |
| --------- | --------------------------------------------------------------------- |
| **Name**  | Brian Kipkirui Cheruiyot                                              |
| **Email** | [briankipkiruimunyat@gmail.com](mailto:briankipkiruimunyat@gmail.com) |
| **Stack** | Node.js / Express                                                     |

---

## 🧠 Features Implemented

✅ A RESTful API endpoint at `/me`
✅ Returns a **dynamic timestamp** in UTC (ISO 8601 format)
✅ Fetches a **random cat fact** from [Cat Facts API](https://catfact.ninja/fact)
✅ Handles API errors gracefully (includes fallback message)
✅ Uses **CORS** and **Axios** for clean external API integration
✅ Logs server activity to the console for easy debugging

---

## 🧰 Tech Stack

* **Runtime:** Node.js
* **Framework:** Express.js
* **HTTP Client:** Axios
* **Environment Config:** dotenv
* **CORS:** Enabled for flexibility

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository

```bash
git clone https://github.com/Munyat/hng13-stage0-backend.git
cd hng13-stage0-backend
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Configure environment variables (optional)

Create a `.env` file:

```
PORT=3000
```

### 4️⃣ Run the server

```bash
node index.js
```

Server runs by default on **[http://localhost:3000](http://localhost:3000)**

---

## 🔍 API Endpoint

### **GET** `/me`

#### ✅ Example Response

```json
{
  "status": "success",
  "user": {
    "email": "briankipkiruimunyat@gmail.com",
    "name": "Brian Kipkirui Cheruiyot",
    "stack": "Node.js/Express"
  },
  "timestamp": "2025-10-18T21:30:12.456Z",
  "fact": "Cats sleep 70% of their lives."
}
```

#### 🧩 Response Format

| Field        | Description                      |
| ------------ | -------------------------------- |
| `status`     | Always `"success"`               |
| `user.email` | Developer's personal email       |
| `user.name`  | Developer's full name            |
| `user.stack` | Backend stack used               |
| `timestamp`  | Current UTC time in ISO 8601     |
| `fact`       | Random cat fact fetched from API |

---

## 🧱 Project Structure

```
hng13-stage0-backend/
│
├── index.js              # Main server file
├── package.json          # Project metadata & dependencies
├── .env                  # Environment variables (optional)
└── README.md             # Documentation
```

---

## ⚡ Dependencies

| Package     | Purpose                                  |
| ----------- | ---------------------------------------- |
| **express** | To create and manage the HTTP server     |
| **axios**   | To fetch cat facts from the external API |
| **cors**    | To handle Cross-Origin Resource Sharing  |
| **dotenv**  | To manage environment variables          |

Install all with:

```bash
npm install express axios cors dotenv
```

---

## 🚨 Error Handling

If the Cat Facts API is unreachable or times out, the server responds with:

```json
{
  "status": "error",
  "message": "Failed to fetch cat fact. Please try again later.",
  "timestamp": "2025-10-18T21:31:12.456Z"
}
```

---

## 🧪 Testing the Endpoint

You can test using:

* Browser → `http://localhost:3000/me`
* **cURL:**

  ```bash
  curl http://localhost:3000/me
  ```
* **Postman** or **Insomnia**

---

## 🌐 Live Deployment

Deployed on: **AWS**

Access the live endpoint at:

http://56.228.30.7:3000/me

```

---

## 🧩 Acceptance Criteria Checklist

* [x] `/me` endpoint returns `200 OK`
* [x] JSON follows exact structure
* [x] Contains email, name, and stack
* [x] Timestamp updates dynamically
* [x] Random cat fact fetched every request
* [x] Proper `Content-Type: application/json`
* [x] Handles errors gracefully

---

## 🧭 Submission Details

**To submit:**

1. Verify your endpoint works publicly
2. In the HNG Slack **#track-backend** channel, run:

   ```

   /stage-zero-backend

   ```

3. Provide:

   * Server URL → `http://56.228.30.7:3000/me`
   * GitHub Repo → `https://github.com/Munyat/hng13-stage0-backend`
   * Full Name → `Brian Kipkirui Cheruiyot`
   * Email → `briankipkiruimunyat@gmail.com`
   * Stack → `Node.js/Express`

---

## 🧩 What I Learned

* Consuming third-party APIs using Axios
* Returning structured JSON responses in REST APIs
* Formatting timestamps in ISO 8601 (UTC)
* Implementing proper error handling and logging
* Understanding deployment considerations for backend services

---

## 🏁 Author

**Brian Kipkirui Cheruiyot**
📧 Email: [briankipkiruimunyat@gmail.com](mailto:briankipkiruimunyat@gmail.com)
💻 GitHub: [Munyat](https://github.com/Munyat)
🚀 Stack: Node.js / Express

---
