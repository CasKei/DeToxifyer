import React, { useState } from 'react';
import Footer from './components/Footer';
import Box from '@mui/material/Box';
import './App.css';
import TranslationForm from './components/TranslationForm';
import OutputDisplay from './components/OutputDisplay';
const App: React.FC = () => {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [toxicityScore, setToxicityScore] = useState(0);

  return (
    <div className="App">
      <Box className="App__container">
        <h1 className="App__title">DeToxifyer</h1>
        <TranslationForm
          inputText={inputText}
          setInputText={setInputText}
          outputText={outputText}
          setOutputText={setOutputText}
          setToxicityScore={setToxicityScore}
        />
      </Box>
      <Footer />
    </div>
  );
};

export default App;