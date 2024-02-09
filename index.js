const express = require('express')
const app = express()
const port = 3001

const USERS = [];

const QUESTIONS = [{
    title: "Two states",
    description: "Given an array , return the maximum of the array?",
    testCases: [{
        input: "[1,2,3,4,5]",
        output: "5"
    }]
}];


const SUBMISSION = [

]

app.post('/signup', function(req, res) {
    // server.js

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const User = require('./models/User');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mern_auth', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Login endpoint
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    if (user.password !== password) {
      return res.status(400).json({ message: 'Incorrect password' });
    }

    // Generate token and send it back to the client
    const token = generateToken(user);
    res.json({ token });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Signup endpoint
app.post('/api/signup', async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }

    user = new User({ email, password });
    await user.save();

    // Generate token and send it back to the client
    const token = generateToken(user);
    res.json({ token });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// Save email and password to Local Storage
localStorage.setItem('email', email);
localStorage.setItem('password', password);

// Retrieve email and password from Local Storage
const storedEmail = localStorage.getItem('email');
const storedPassword = localStorage.getItem('password');
// server.js

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const User = require('./models/User');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mern_auth', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Login endpoint
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    if (user.password !== password) {
      return res.status(404).json({ message: 'Incorrect password' });
    }

    // Generate token and send it back to the client
    const token = generateToken(user);
    res.status(200).json({ token });

  } catch (error) {
    console.error(error);
    res.status(404).json({ message: 'Server Error' });
  }
});

// Signup endpoint
app.post('/api/signup', async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });

    if (user) {
      return res.status(404).json({ message: 'User already exists' });
    }

    user = new User({ email, password });
    await user.save();

    // Generate token and send it back to the client
    const token = generateToken(user);
    res.status(200).json({ token });

  } catch (error) {
    console.error(er

  // Add logic to decode body
  // body should have email and password


  //Store email and password (as is for now) in the USERS array above (only if the user with the given email doesnt exist)


  // return back 200 status code to the client
  res.send('Hello World!')
})

app.post('/login', function(req, res) {
  // Add logic to decode body
  // body should have email and password

  // Check if the user with the given email exists in the USERS array
  // Also ensure that the password is the same


  // If the password is the same, return back 200 status code to the client
  // Also send back a token (any random string will do for now)
  // If the password is not the same, return back 401 status code to the client


  res.send('Hello World from route 2!')
})

app.get('/questions', function(req, res) {

  //return the user all the questions in the QUESTIONS array
  res.send("Hello World from route 3!")
})

app.get("/submissions", function(req, res) {
   // return the users submissions for this problem
  res.send("Hello World from route 4!")
});


app.post("/submissions", function(req, res) {
    // server.js

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());

// Mock solution stored in admin directory
const correctAnswer = 'mock_solution';

// Route to handle answer submission
app.post('/api/submit-answer', (req, res) => {
  const submittedAnswer = req.body.answer;

  // Check if submitted answer matches the correct solution
  if (submittedAnswer === correctAnswer) {
    res.status(200).json({ message: 'Congratulations! Your answer is correct.' });
  } else {
    res.status(400).json({ message: 'Sorry, your answer is incorrect. Please try again.' });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

   // let the user submit a problem, randomly accept or reject the solution
   // Store the submission in the SUBMISSION array above
  res.send("Hello World from route 4!")
});// Middleware function to check if user is admin
const isAdmin = (req, res, next) => {
  // Check if user is authenticated and is admin
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(403).json({ message: 'Forbidden: Admin access required' });
  }
};

// Example protected route for adding or editing problems
app.post('/api/problems', isAdmin, (req, res) => {
  // Logic to add or edit problems
  res.status(200).json({ message: 'Problem added/edited successfully' });
});


// leaving as hard todos
// Create a route that lets an admin add a new problem
    // server.js

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());

// Mock problems data (replace this with actual database operations)
let problems = [];

// Route to add a new problem (only accessible by admins)
app.post('/api/add-problem', (req, res) => {
  const { title, description } = req.body;
  
  // Mock admin authentication (replace this with your actual admin authentication logic)
  const isAdmin = req.headers.authorization === 'admin_token';

  if (!isAdmin) {
    return res.status(403).json({ message: 'Forbidden: Admin access required' });
  }

  // Add the new problem to the problems array
  problems.push({ title, description });

  res.status(200).json({ message: 'Problem added successfully' });
});

app.listen(PORT, () => console.log(`Server

// ensure that only admins can do that.

app.listen(port, function() {
  console.log(`Example app listening on port ${port}`)
})
