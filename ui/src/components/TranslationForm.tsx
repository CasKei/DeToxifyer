import React from 'react';
import InputField from './InputField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { spawn } from 'child_process';

interface TranslationFormProps {
    inputText: string;
    setInputText: React.Dispatch<React.SetStateAction<string>>;
    outputText: string;
    setOutputText: React.Dispatch<React.SetStateAction<string>>;
    toxicityScore: number;
    setToxicityScore: React.Dispatch<React.SetStateAction<number>>;
    onTranslate: (translatedText: string, toxicityScore: number) => void;
}

const TranslationForm: React.FC<TranslationFormProps> = ({
    inputText,
    setInputText,
    outputText,
    setOutputText,
    toxicityScore,
    setToxicityScore,
    onTranslate,
}) => {
    const handleInputChange = (newValue: string) => {
        setInputText(newValue);
    };

    const handleTranslate = () => {
        const pythonProcess = spawn('python', ['translate.py', inputText]);

        pythonProcess.stdout.on('data', (data) => {
            const output = data.toString().trim().split(',');
            const translatedText = output[0];
            const toxicityScoreValue = parseFloat(output[1]);
            setOutputText(translatedText);
            setToxicityScore(toxicityScoreValue);
            onTranslate(translatedText, toxicityScoreValue);
        });
    };

    return (
        <Box className="Translation__container">
            <Box className="Translation__fields">
                <Box className="Translation__input">
                    <InputField
                        type="text"
                        value={inputText}
                        setValue={handleInputChange}
                        label="Enter your email text"
                        readonly={false}
                        multiline
                        rows={10}
                    />
                </Box>
                <Box className="Translation__output">
                    <InputField
                        type="text"
                        value={outputText}
                        setValue={() => { }}
                        label="Translated Text"
                        readonly
                        multiline
                        rows={10}
                    />
                    <Box className="Translation__toxicity-score">
                        <p>Toxicity Score: {toxicityScore}%</p>
                    </Box>
                </Box>
            </Box>
            <Box className="Translation__button">
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleTranslate}
                    className="Translation__button-translate"
                >
                    Translate
                </Button>
            </Box>
        </Box>
    );
};

export default TranslationForm;