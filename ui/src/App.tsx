import React, { useState } from 'react';
import Footer from './components/Footer';
import Box from '@mui/material/Box';
import './App.css';
import TranslationForm from './components/TranslationForm';

const App: React.FC = () => {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');

  const handleTranslation = (translatedText: string) => {
    setOutputText(translatedText);
  };

  return (
    <div className="App">
      <Box className="App__container">
        <h1 className="App__title">Angry Email Translator</h1>
        <TranslationForm
          inputText={inputText}
          setInputText={setInputText}
          outputText={outputText}
          onTranslate={handleTranslation}
        />
      </Box>
      <Footer />
    </div>
  );
};

export default App;