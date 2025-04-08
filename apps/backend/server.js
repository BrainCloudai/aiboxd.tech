const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/api/gpt', (req, res) => {
  const { prompt } = req.body;
  // Simulated response
  res.json({ response: `You asked: ${prompt}` });
});

app.listen(5000, () => {
  console.log('Backend running on http://localhost:5000');
});
