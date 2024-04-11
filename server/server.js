const express = require('express');
const cors = require("cors");

const corsOptions = {
  origin: "http://localhost:3001",
};

const app = express();
const { spawn } = require('child_process');
const http = require('http');
// Example defining a route in Express
app.get('/', (req, res) => {
  res.send('<h1>Hello, backend Server!</h1>');
});

app.use(express.json());
app.use(cors(corsOptions));

app.post('/translate', (req, res) => {
  res.set('Access-Control-Allow-Origin', 'http://localhost:3001');
  const inputText = req.body.inputText;

  const pythonProcess = spawn('python3', ['translate.py', inputText]);

  let outputData = '';

  pythonProcess.stdout.on('data', (data) => {
    outputData += data.toString();
  });

  pythonProcess.stdout.on('end', () => {
    const output = outputData.trim().split(',');
    const translatedText = output[0];
    const toxicityScore = parseFloat(output[1]);
    res.json({ translatedText, toxicityScore });
  });

  pythonProcess.on('error', (err) => {
    console.error('Error executing Python script:', err);
    res.status(500).json({ error: 'An error occurred while translating the text' });
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});