// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Define User Schema and Model
const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  name: String,
  address: String,
  class: String,
  section: String
});
const User = mongoose.model('User', userSchema);

// API Routes
app.post('/register', async (req, res) => {
  try {
    const { email, password, name, address, class: userClass, section } = req.body;
    const user = new User({ email, password, name, address, class: userClass, section });
    await user.save();
    res.status(201).send('User registered');
  } catch (error) {
    res.status(500).send('Error registering user');
  }
});

app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(401).send('Invalid credentials');
    }
  } catch (error) {
    res.status(500).send('Error logging in');
  }
});

app.get('/users/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).send('User not found');
    }
  } catch (error) {
    res.status(500).send('Error fetching user profile');
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
