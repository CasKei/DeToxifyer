import React, { useState } from 'react';
import InputField from './InputField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import SentimentNeutralIcon from '@mui/icons-material/SentimentNeutral';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

interface TranslationFormProps {
    inputText: string;
    setInputText: React.Dispatch<React.SetStateAction<string>>;
    outputText: string;
    setOutputText: React.Dispatch<React.SetStateAction<string>>;
    setToxicityScore: React.Dispatch<React.SetStateAction<number>>;
}

const TranslationForm: React.FC<TranslationFormProps> = ({
    inputText,
    setInputText,
    outputText,
    setOutputText,
    setToxicityScore,
}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [toxicityScore, setToxicityScoreLocal] = useState(0);

    const handleInputChange = (newValue: string) => {
        setInputText(newValue);
    };

    const handleTranslateGood = async () => {
        setIsLoading(true);

        try {
            const response = await fetch('http://localhost:3000/translateGood', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ inputText }),
            });

            if (response.ok) {
                const { translatedText, toxicityScore } = await response.json();
                setOutputText(translatedText);
                setToxicityScoreLocal(toxicityScore);
                setToxicityScore(toxicityScore);
            } else {
                console.error('Error translating text:', response.statusText);
            }
        } catch (error) {
            console.error('Error translating text:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleTranslate = async () => {
        setIsLoading(true);

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
                setToxicityScoreLocal(toxicityScore);
                setToxicityScore(toxicityScore);
            } else {
                console.error('Error translating text:', response.statusText);
            }
        } catch (error) {
            console.error('Error translating text:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const renderToxicityIcon = () => {
        if (toxicityScore <= 30) {
            return <SentimentSatisfiedAltIcon fontSize="large" color="primary" />;
        } else if (toxicityScore > 30 && toxicityScore <= 70) {
            return <SentimentNeutralIcon fontSize="large" color="warning" />;
        } else {
            return <SentimentVeryDissatisfiedIcon fontSize="large" color="error" />;
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
                <Box className="Translation__output">
                    <InputField
                        type="text"
                        value={outputText}
                        setValue={() => { }}
                        label="DeToxed Text"
                        readonly
                        multiline
                        rows={10}
                    />
                </Box>
            </Box>
            <Box className="Translation__button-container">
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleTranslate}
                    className="Translation__button-translate"
                    disabled={isLoading}
                >
                    {isLoading ? <CircularProgress size={24} /> : 'Translate with our model'}
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleTranslateGood}
                    className="Translation__button-translate"
                    disabled={isLoading}
                >
                    {isLoading ? <CircularProgress size={24} /> : 'Translate with ParaDetox'}
                </Button>
            </Box>
            <Box className="Output__score">
                <p>Toxicity Score: {toxicityScore}%</p>
                {renderToxicityIcon()}
            </Box>
        </Box>
    );
};

export default TranslationForm;