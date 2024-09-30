// server.js
import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import cors from 'cors';

const app = express();
const PORT = 5000;
const users = []; // This will store users in memory. Replace with a database in production.

app.use(cors());
app.use(express.json());



// #############################
// ************ DB *************
// #############################
import mysql from 'mysql2/promise';
import config from './config.js';


let connection;


// Create a connection to the database using config values
const connectToDatabase = async () => {
  connection = await mysql.createConnection({
    host: config.db.host,
    user: config.db.user,
    password: config.db.password,
    database: config.db.database,
    port: config.db.port
  });
};

process.on('SIGINT', async () => {
  if (connection) {
    await connection.end();
    console.log('Connection closed.');
  }
  process.exit(0);
});

// Function to check and create user
const checkAndCreateRoot = async () => {
  const username = 'root';
  const password = 'password';
  const saltRounds = 10;

  try {
    const [rows] = await connection.query('SELECT * FROM users WHERE username = ?', [username]);
    if (rows.length === 0) {
      const hashedPassword = await bcrypt.hash(password, saltRounds);
	  await connection.query('INSERT INTO users (username, password, first_name, last_name, email) VALUES (?, ?, ?, ?, ?)', [username, hashedPassword, 'root', 'root', 'test@gmail.com']);
      console.log('User "root" created.');
    } else {
      console.log('User "root" already exists.');
    }
  } catch (error) {
    console.error('Error checking or creating user:', error);
  }
};

// Connect to the database
connectToDatabase()
  .then(() => {
    console.log('Connected to MySQL.');
    checkAndCreateRoot();
  })
  .catch(err => {
    console.error('Error connecting to MySQL:', err.stack);
  });











// #############################
// ********** ROUTES ***********
// #############################
app.get('/', async (req, res) => {
    res.status(201).send('Working');
});

app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    res.status(201).send('User registered');
});

app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    // const isMatch = await bcrypt.compare(password, user.password);
    // if (!isMatch) return res.status(400).send('Invalid credentials');

    // const token = jwt.sign({ username: user.username }, 'your_jwt_secret', { expiresIn: '1h' });
    // res.json({ token });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
