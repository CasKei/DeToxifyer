const express = require('express');
const app = express();
const { spawn } = require('child_process');
const path = require('path');

app.use(express.json());

// Serve the React app from the "ui/build" directory
app.use(express.static(path.join(__dirname, '../ui/build')));

app.post('/translate', (req, res) => {
  const inputText = req.body.inputText;

  const pythonProcess = spawn('python', ['translate.py', inputText]);

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

// Serve the React app for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../ui/build', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});