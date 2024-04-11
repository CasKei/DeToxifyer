import React from 'react';
import InputField from './InputField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

interface TranslationFormProps {
    inputText: string;
    setInputText: React.Dispatch<React.SetStateAction<string>>;
    outputText: string;
    setOutputText: React.Dispatch<React.SetStateAction<string>>;
    toxicityScore: number;
    setToxicityScore: React.Dispatch<React.SetStateAction<number>>;
}

const TranslationForm: React.FC<TranslationFormProps> = ({
    inputText,
    setInputText,
    outputText,
    setOutputText,
    toxicityScore,
    setToxicityScore,
}) => {
    const handleInputChange = (newValue: string) => {
        setInputText(newValue);
    };

    const handleTranslate = async () => {
        try {
            const response = await fetch('/translate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ inputText }),
            });

            if (response.ok) {
                const { translatedText, toxicityScore } = await response.json();
                setOutputText(translatedText);
                setToxicityScore(toxicityScore);
            } else {
                console.error('Error translating text:', response.statusText);
            }
        } catch (error) {
            console.error('Error translating text:', error);
        }
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