import React from 'react';
import InputField from './InputField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

interface TranslationFormProps {
    inputText: string;
    setInputText: React.Dispatch<React.SetStateAction<string>>;
    setOutputText: React.Dispatch<React.SetStateAction<string>>;
    setToxicityScore: React.Dispatch<React.SetStateAction<number>>;
}

const TranslationForm: React.FC<TranslationFormProps> = ({
    inputText,
    setInputText,
    setOutputText,
    setToxicityScore,
}) => {
    const handleInputChange = (newValue: string) => {
        setInputText(newValue);
    };

    const handleTranslate = async () => {
        try {
            const response = await fetch('http://localhost:3000/translate', {
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
                        label="Enter your toxic text"
                        readonly={false}
                        multiline
                        rows={10}
                    />
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