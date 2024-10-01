const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/api/userRoutes');
const thoughtRoutes = require('./routes/api/thoughtsRoutes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

// Connect to the MongoDB database
connectDB();

// API Routes
app.use('/api/users', userRoutes);
app.use('/api/thoughts', thoughtRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
