// Import necessary packages
const express = require('express');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');
const connectDB = require('./db');
const roomRoutes = require('./routes/roomRoutes');
const guestRoutes = require('./routes/guestRoutes');
const authRoutes = require('./routes/authRoutes');
const complaintRoutes = require('./routes/complaintRoutes');
const paymentRoutes = require('./routes/paymentRoutes'); // Add this line

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
// Configure CORS
app.use(cors({
  origin: 'https://paying-guest-website-frondend.onrender.com', // Replace with your frontend URL
  methods: 'GET,POST,PUT,DELETE,OPTIONS',
  allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept, Authorization'
}));

app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads'), { index: false }));

// Connect to MongoDB
connectDB();

// Use routes
app.use('/api/rooms', roomRoutes);
app.use('/api/guests', guestRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/complaints', complaintRoutes);
app.use('/api/payments', paymentRoutes); // Add this line

// Start the Server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
