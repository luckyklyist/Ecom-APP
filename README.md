# MERN Web E-commerce Application - Turbo Repo

## Introduction

This is a Turbo Repo for a MERN (MongoDB, Express, React, Node.js) web application that serves as an e-commerce platform. It includes user authentication, product listings, shopping cart functionality, and order management.

## Getting Started

To run the application:

1. Clone the repository: `git clone https://github.com/your-username/mern-ecommerce-app.git`
2. Navigate to the project folder: `cd mern-ecommerce-app`
3. Install the dependencies for the entire project: `npm install`
4. Set up the environment variables in `.env` files as needed for the backend and frontend.
5. Start the development server: `npm run dev`

This command will start both the backend and frontend development servers simultaneously.

## Backend Sketch Structure

![Screenshot from 2023-08-05 16-12-28](https://github.com/luckyklyist/Ecom-APP/assets/35479077/6a22b7a0-ab73-4fdf-887e-ecb24067f946)

## Backend API Routes

The backend contains the following API routes:

### User Routes

- `POST /api/user/register`: Register a new user.
- `POST /api/user/login`: User login.
- `GET /api/user/profile`: Get user profile details.
- `PUT /api/user/profile`: Update user profile.
- `DELETE /api/user/profile`: Delete user profile.

### Product Routes

- `GET /api/products`: Get all products.
- `POST /api/products`: Add a new product.
- `GET /api/products/:id`: Get a product by ID.
- `PUT /api/products/:id`: Update a product.
- `DELETE /api/products/:id`: Delete a product.

### Cart Routes

- `GET /api/cart`: Get the shopping cart items.
- `POST /api/cart`: Add an item to the shopping cart.
- `PUT /api/cart/:id`: Update an item quantity in the shopping cart.
- `DELETE /api/cart/:id`: Remove an item from the shopping cart.

### Order Routes

- `GET /api/orders`: Get all orders.
- `POST /api/orders`: Place a new order.
- `GET /api/orders/:id`: Get an order by ID.
- `PUT /api/orders/:id`: Update the status of an order.

## Technologies Used

- Frontend: React,TypeScript,Recoil,Next js
- Backend: Node.js, Express.js,TypeScript,Zod
- Database: MongoDB (Mongoose ORM)
- Authentication: JWT (JSON Web Tokens)

## Contribution Guidelines

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Make your changes and commit them: `git commit -m "Add your feature description"`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Create a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

Website: [https://anupamac.me](https://anupamac.me)
