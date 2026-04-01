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
npm node server.js
```

---

## 🔐 Environment Variables

Create a `.env` file in the root directory:

```id="r8x1m3"
PORT=3000
MONGO_URL=your_mongodb_connection_string
```

---



### 🔹 Base URL

```
http://localhost:3000
```

---

## 🌐 API Endpoints

 👤 Persons
### ➤ Add a Person

* **Endpoint:** `POST /person`
* **Description:** Adds a new person (staff) to the system.

---

### ➤ Get All Persons

* **Endpoint:** `GET /person`
* **Description:** Retrieves all persons.

---

### ➤ Get Persons by Work Type

* **Endpoint:** `GET /person/:workType`
* **Description:** Retrieves persons based on work type (chef, waiter, manager).

---

### ➤ Update a Person

* **Endpoint:** `PUT /person/:id`
* **Description:** Updates a person by ID.

---

### ➤ Delete a Person

* **Endpoint:** `DELETE /person/:id`
* **Description:** Deletes a person by ID.

---

## 🍴 Menu Items

### ➤ Add a Menu Item

* **Endpoint:** `POST /menu`
* **Description:** Adds a new menu item.

---

### ➤ Get All Menu Items

* **Endpoint:** `GET /menu`
* **Description:** Retrieves all menu items.

---

### ➤ Filter Menu Items (Query)

* **Endpoint:** `GET /menu?ingredient=paneer`
* **Endpoint:** `GET /menu?taste=spicy`
* **Endpoint:** `GET /menu?ingredient=paneer&taste=spicy`
* **Description:** Filters menu items using query parameters.

---

### ➤ Get Menu Items by Taste

* **Endpoint:** `GET /menu/taste/:tasteType`
* **Description:** Retrieves menu items based on taste.

---

### ➤ Get Menu Items by Ingredient

* **Endpoint:** `GET /menu/ingredient/:ingredient`
* **Description:** Retrieves menu items based on ingredient.

---

### ➤ Update a Menu Item

* **Endpoint:** `PUT /menu/:id`
* **Description:** Updates a menu item by ID.

---

### ➤ Delete a Menu Item

* **Endpoint:** `DELETE /menu/:id`
* **Description:** Deletes a menu item by ID.

---

## 📊 Data Models

### 👤 Person

Represents staff members in the restaurant.

#### Fields:

* `name` → String (required)
* `age` → Number
* `work` → Enum (`chef`, `waiter`, `manager`)
* `mobile` → String (required)
* `email` → String (required, unique)
* `address` → String
* `salary` → Number (required)

#### Example:

```json
{
  "name": "Rahul Sharma",
  "age": 28,
  "work": "chef",
  "mobile": "9876543210",
  "email": "rahul@example.com",
  "address": "Mumbai",
  "salary": 35000
}
```

---

### 🍽️ MenuItem

Represents food and drink items.

#### Fields:

* `name` → String (required)
* `price` → Number (required)
* `taste` → Enum (`sweet`, `spicy`, `sour`)
* `is_drink` → Boolean (default: false)
* `ingredients` → Array of Strings (default: [])
* `num_sales` → Number (default: 0)

#### Example:

```json
{
  "name": "Paneer Butter Masala",
  "price": 250,
  "taste": "spicy",
  "is_drink": false,
  "ingredients": ["paneer", "butter", "tomato"],
  "num_sales": 120
}
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
