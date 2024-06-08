const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// MongoDB connection
const db=process.env.MONGODB_URI;
console.log(db);
mongoose.connect(db)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Routes
app.use('/api/quotes', require('./routes/quotes'));

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
