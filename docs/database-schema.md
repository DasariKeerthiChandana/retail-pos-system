# Database Schema – Retail POS & Inventory System

1. Users Collection
   Stores system users such as cashiers, managers, and admins.

Fields:

- id
- name
- email
- password
- role

2. Stores Collection
   Stores information about store branches.

Fields:

- id
- store_name
- location
- manager_id

3. Products Collection
   Stores product information.

Fields:

- id
- name
- category
- price

4. Inventory Collection
   Tracks product stock for each store.

Fields:

- id
- product_id
- store_id
- stock_quantity

5. Orders Collection
   Stores sales orders generated in POS.

Fields:

- id
- store_id
- cashier_id
- total_amount
- order_date

6. OrderItems Collection
   Stores products inside each order.

Fields:

- id
- order_id
- product_id
- quantity
- price
