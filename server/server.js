const express = require('express')
const app = express()
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

const port = process.env.PORT || 3000;

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Swagger setup
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('http://localhost/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

const socketIO = require('socket.io')(http, {
  cors: {
    origin: "http://localhost:3000"
  }
});

//chat support session
socketIO.on('connection', (socket) => {
  console.log(`⚡: ${socket.id} user just connected!`);
  socket.on('disconnect', () => {
    console.log('🔥: A user disconnected');
  });
});

// Database connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    status: 'error',
    message: 'Something went wrong!'
  });
});


app.get('/test', (req, res) => {
  res.send('Listening!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})