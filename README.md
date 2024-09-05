
# PG Management Website

This is a Paying Guest (PG) Management Website built using React.js, Node.js (Express), and MongoDB. The application helps in managing guest information, rooms, complaints, and payments. It also includes guest and admin login functionalities, along with the ability to add, remove users and rooms, and validate data.

## Features

- **Guest Login**: Guests can log in to view room details, menu, submit complaints, and leave applications.
- **Admin Login**: Admins can log in to manage rooms, guests, payments, and complaints. They also have the ability to add or remove guests and rooms.
- **Room Management**: Admins can add, update, and remove rooms, track room availability, and assign rooms to guests.
- **Guest Management**: Admins can add or remove guests and manage their details.
- **Validation**: User inputs are validated to ensure data integrity when adding guests or rooms.

## Technologies Used

- **Frontend**: React.js (with Vite)
- **Backend**: Node.js (Express)
- **Database**: MongoDB
- **State Management**: Redux
- **Routing**: React Router
- **Authentication**: Appwrite.io

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/KrishCode123/Paying_Guest_Website.git
   cd pg-management


2. **Install dependencies**:

   - Install frontend dependencies:

     ```bash
     cd backend
     npm install
     ```

   - Install backend dependencies:

     ```bash
     cd myapk
     npm install
     ```

3. **Set up MongoDB**:

   - Ensure MongoDB is installed and running on your system.
   - Create a new MongoDB database (e.g., `pg-management`).
   - Set the MongoDB connection string in the backend configuration (usually in `.env`).

   Example `.env` file:

   ```env
   MONGODB_URI= YOUR_MONGODB_URI
   ```

4. **Run the backend**:

   ```bash
   cd backend
   npm start
   ```

5. **Run the frontend**:

   ```bash
   cd frontend
   npm run dev
   ```

6. **Access the app**:

   Open your browser and navigate to `http://localhost:3000` for the frontend.


## Usage

- **Admin Login**: Admins can log in and perform the following actions:
  - Add or remove rooms.
  - Add or remove guests.
  - Manage guest complaints and payments.
  - Assign rooms to guests.
  
- **Guest Login**: Guests can:
  - View their room details and check the available rooms.
  - File complaints and check the menu.

## Validation

The following validations are implemented:
- **Guest Details**: Ensure that mandatory fields like name, contact, and room allocation are provided.
- **Room Management**: Ensure that rooms are available before allocation, and only valid room numbers are accepted.
- **Login**: Both guest and admin logins are authenticated using Appwrite.io.

## Future Enhancements

- **Payment Gateway Integration**: Allow online payments for guests.
- **Guest Notifications**: Notify guests via email or SMS when a room is allocated or a complaint is resolved.
- **Enhanced Reporting**: Provide admin with analytical dashboards for better insights into room occupancy and guest activity.


# Images
![image](https://github.com/user-attachments/assets/8211ab72-b87a-4522-8cfd-05d6423eca7b)
![image](https://github.com/user-attachments/assets/f61fa3d2-20e9-453e-a528-c7d789c5045e)
![image](https://github.com/user-attachments/assets/4d1c2313-e7de-46d5-aa93-a0bae87a22f8)
![image](https://github.com/user-attachments/assets/dc027191-d509-49c8-b4f0-421ab601395f)
![image](https://github.com/user-attachments/assets/16a999b5-1078-4414-be2e-33bd014c8072)







