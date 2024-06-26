// Import Express
const express = require('express');
const app = express();

// Port
const PORT = 8080;

// Middleware to parse JSON bodies
app.use(express.json());

// Server listening on specified port
app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});

// GET endpoint at '/ayo'
app.get('/ayo', (req, res) => {
  res.status(200).json({
    name: 'ayo',
    message: 'Yuck'
  });
});

// POST endpoint at '/ayo/:id'
app.post('/ayo/:id', (req, res) => {
  const { id } = req.params;
  const { emoji } = req.body;

  // Check if 'emoji' is provided in the request body
  if (!emoji) {
    return res.status(400).json({
      message: 'Please provide an emoji'
    });
  }

  // Respond with a message including 'id' and 'emoji'
  res.json({
    message: `Yuck ${id} ${emoji} and Id ${id}`
  });
});
