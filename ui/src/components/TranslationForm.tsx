import React from 'react';
import InputField from './InputField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

interface TranslationFormProps {
    inputText: string;
    setInputText: React.Dispatch<React.SetStateAction<string>>;
    outputText: string;
    onTranslate: (translatedText: string) => void;
}

const TranslationForm: React.FC<TranslationFormProps> = ({
    inputText,
    setInputText,
    outputText,
    onTranslate,
}) => {
    const handleInputChange = (newValue: string) => {
        setInputText(newValue);
    };

    const handleTranslate = () => {
        // Here, you would call your translation function or API
        // and pass the translated text to the onTranslate callback
        const translatedText = translateText(inputText);
        onTranslate(translatedText);
    };

    const translateText = (text: string): string => {
        // Placeholder for your translation logic
        return text.split('').reverse().join('');
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