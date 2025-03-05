# AURA – Salon Services at Home

AURA is a web application that allows users to book salon services and purchase beauty products from the comfort of their homes.

## 🚀 Features

- 🛋️ Browse salon services and add them to a cart.
- 🛋️ Purchase beauty products.
- 🔑 User authentication for a personalized experience.
- 📲 Responsive design for mobile and desktop.
- 📂 Integrated MongoDB database for storing services and products.


## 🔧 Installation Guide

### 🛠️  Backend (Node.js + Express + MongoDB)

1. **Clone the repository**
   ```sh
   git clone https://github.com/NareshLokhande/Aura-The_Saloon_App.git
   cd Aura-The_Saloon_App/backend
   ```
2. **Install dependencies**
   ```sh
   npm install
   ```
3. **Set up environment variables**  
   Create a `.env` file in the `backend` folder and add:

   ```
   MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    PORT=5000
   ```

4. **Run the backend server**
   ```sh
   npm start
   ```
   The backend will run on http://localhost:5000.

---

### 🛠️ Frontend (React.js)

1. **Navigate to the frontend directory**
   ```sh
   cd ../frontend
   ```
2. **Install dependencies**
   ```sh
   npm install
   ```
3. **Set up environment variables**  
    Create a `.env` file in the `frontend` folder and add:

   ````
   REACT_APP_BACKEND_URL=http://localhost:5000
   ````

4. **Run the backend server**
   ```sh
   npm start
   ```
   The backend will run on `http://localhost:3000 `



## 📚 Folder Structure

```sh
aura/
│── backend/        # Node.js + Express backend
│   ├── models/     # Mongoose models for MongoDB
│   ├── routes/     # API routes
│   ├── controllers/# Business logic
│   ├── config/     # Configuration files
│   ├── server.js   # Main server file
│
│── frontend/       # React application
│   ├── src/
│   │   ├── components/  # Reusable UI components
│   │   ├── pages/       # Page components
│   │   ├── assets/      # Images, styles
│   │   ├── App.js       # Main React app file
│   │   ├── index.js     # Entry point
│
│── README.md       # Documentation
│── package.json    # Project metadata
│── .gitignore      # Git ignored files
```

## 🔧 API Endpoints

### 🔑 User Authentication

- `POST /api/users/register` - Register a new user
- `POST /api/users/login` - Authenticate user and get token
- `GET /api/users/profile` - Get user profile (protected)

### 💈 Services

- `GET /api/services` - Get all salon services
- `GET /api/services/:id` - Get service by ID
- `POST /api/services` - Add new service (admin only)
- `PUT /api/services/:id` - Update service (admin only)
- `DELETE /api/services/:id` - Delete service (admin only)

### 💄  Products

- `GET /api/products` - Get all salon products
- `GET /api/products/:id` - Get product by ID
- `POST /api/products` - Add new product (admin only)
- `PUT /api/products/:id` - Update product (admin only)
- `DELETE /api/products/:id`- Delete product (admin only)

---

## 💻 Technologies Used

- **Frontend**: React.js, Bootstrap
- **Backend**: Node.js, Express.js, MongoDB
- **Authentication**: JWT (JSON Web Token)
- **Styling**: CSS, Tailwind (optional)
- **Database**: MongoDB (Mongoose ORM)
- **Hosting**: Netlify (Frontend), Render/Heroku (Backend)
- **Version Control**: Git & GitHub

## 🌟 Contribution Guide

1. Fork the repository
2. Create a new branch
    ```sh
    git checkout -b feature-branch
    ```
3. Commit your changes
    ```sh
    git commit -m "Add new feature"
    ```
4. Push to the branch
    ```sh
    git push origin feature-branch
    ```
5. Open a Pull Request

## 📃 License

This project is licensed under the MIT License.

```
MIT License

Copyright (c) 2025 AURA Team

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND.

```

### 📧 Contact
For any inquiries or support, reach out via [email](mailto:nareshlokhande49@gmail.com)

