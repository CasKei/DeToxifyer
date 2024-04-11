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
        <h1 className="App__title">Angry Email Translator</h1>
        <TranslationForm
          inputText={inputText}
          setInputText={setInputText}
          setOutputText={setOutputText}
          setToxicityScore={setToxicityScore}
        />
        <OutputDisplay outputText={outputText} toxicityScore={toxicityScore} />
      </Box>
      <Footer />
    </div>
  );
};

export default App;