# 🍽️ Restaurant Management API

A robust and scalable **RESTful API** built using **Node.js**, **Express**, and **MongoDB**.
This project provides complete backend functionality for managing restaurant data including **menu items and persons**, with support for **CRUD operations** and **advanced filtering using query parameters**.

---

## 🚀 Features

* 🔧 **CRUD Operations**

  * Create, Read, Update, Delete for resources like Person and Menu

* 🔍 **Advanced Filtering**

  * Filter menu items using query parameters:

    * Ingredient-based filtering
    * Taste-based filtering
    * Combined filtering (ingredient + taste)

* 📡 **RESTful API Design**

  * Clean and structured API endpoints

* ⚡ **Dynamic Query Handling**

  * Flexible filtering using `req.query`

* 🛡️ **Validation & Error Handling**

  * Proper status codes (200, 400, 404, 500)
  * Mongoose validations

* 🔐 **Environment Configuration**

  * Secure handling of sensitive data using `.env`

* 🧪 **API Testing**

  * All endpoints tested using Postman

---

## 🧠 How It Works

* Express handles routing and middleware
* MongoDB stores data using Mongoose models
* API endpoints allow interaction with:

  * Person data
  * Menu items
* Query parameters enable dynamic filtering of data
* Responses are sent in JSON format

---

## 🛠️ Tech Stack

* **Backend:** Node.js, Express.js
* **Database:** MongoDB
* **ODM:** Mongoose
* **Environment Management:** dotenv
* **API Testing:** Postman

---

## 📂 Project Structure

```id="p6z4k1"
CRUDMongoose/
│── models/
│   ├── Person.js
│   ├── MenuItem.js
│
│── routes/
│   ├── personRoutes.js
│   ├── menuRoutes.js
│
│── db.js
│── server.js
│── .env
│── .gitignore
│── package.json
│── package-lock.json
```

---

## ⚙️ Installation & Setup

```bash id="f2l9x8"
# Clone the repository
git clone https://github.com/your-username/restaurant-management-api.git

# Navigate to project folder
cd CRUDMongoose

# Install dependencies
npm install

# Start the server
npm run dev
```

---

## 🔐 Environment Variables

Create a `.env` file in the root directory:

```id="r8x1m3"
PORT=3000
MONGO_URL=mongodb://localhost:27017/hotels
```

---

## 🌐 API Endpoints

### 🔹 Base URL

```id="k3n9q7"
http://localhost:3000
```

---

### 👤 Person Routes

```id="a7d3k2"
GET     /person           → Get all persons  
POST    /person           → Add new person  
PUT     /person/:id       → Update person  
DELETE  /person/:id       → Delete person  
```

---

### 🍴 Menu Routes

```id="v4h8p1"
GET     /menu                         → Get all menu items  
GET     /menu?ingredient=paneer       → Filter by ingredient  
GET     /menu?taste=spicy             → Filter by taste  
GET     /menu?ingredient=paneer&taste=spicy → Combined filter  

GET     /menu/taste/:tasteType        → Taste-based filtering  
GET     /menu/ingredient/:ingredient  → Ingredient-based filtering  

POST    /menu                         → Add new menu item  
```

---

## 💡 Key Highlights

* Clean modular architecture (routes, models, config)
* Scalable backend structure
* Real-world filtering implementation
* Proper error handling and validations

---

## ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub!
