# 🌮 Tecos Restaurant 🍽️

## Description

This is my first project using Next.js, Node.js, and Tailwind CSS. As a database manager, I use MySQL. This project consists of developing a website for the fictional restaurant "Tecos," dedicated to offering Mexican cuisine.

### Key Features:

- **Online Menu**: 📜 Customers can browse our complete menu, with detailed descriptions of each dish, its image, and updated prices.
  
- **Select Table**: 🪑 We provide table-shaped buttons with which customers can select their table, and their order will be automatically redirected to the selected table.

- **Table Status**: 🪑 When the customer selects the table they are sitting at, that table will be disabled and cannot be selected.

- **Online Ordering**: 📲 Customers can place their order through the website, and the order will be sent to the cashier, who can then invoice it.

- **Invoicing**: 🧾 The cashier can generate an invoice for the customer's order in PDF format.

## Technologies Used:

- **Next.js**: Used to develop the frontend of the web application and to integrate the JavaScript runtime environment on the server-side, allowing me to develop both frontend and backend with a single language and framework.

- **Tailwind CSS**: Used to style and design the user interface of the application.

- **Node.js**: For backend development.

- **MySQL**: For storing and managing application data.

## Installation and Usage:

1. Clone this repository to your local machine.
2. Install dependencies using `npm install`.
3. Configure your connection to the database using the following code as an example::
    ```javascript
    const pool = mysql2.createPool({
     host: "Your host",
     user: "Your user",
     database: "The name of your database",
     password: "Your password",
     port: "Your port"
    })
5. Run the server using `npm run dev`.
6. Access the website from your preferred browser at `localhost:3000`.

## Scripts

### Folder "Script/scriptDataBase"

1. **create_table_mesa.sql**: Creates a table named "mesa" in the database, used to store information about tables in the restaurant.
2. **create_table_pedido.sql**: Creates a table named "pedido" in the database, used to store information about orders placed in the restaurant.
3. **create_table_usuarios.sql**: Creates a table named "usuarios" in the database, used to store information about system users.
4. **create_table_productos.sql**: Creates a table named "productos" in the database, used to store information about products available in the restaurant.
5. **create_table_pedido_producto.sql**: Creates a table named "pedido_producto" in the database, used to establish the relationship between orders and products.

## Contributors:

- [KeniBeck](https://github.com/KeniBeck)
- [YeferRivera](https://github.com/YeferRivera)


