import React from 'react';
import Box from '@mui/material/Box';
import InputField from './InputField';

interface OutputDisplayProps {
    outputText: string;
    toxicityScore: number;
}

const OutputDisplay: React.FC<OutputDisplayProps> = ({ outputText, toxicityScore }) => {
    return (
        <Box className="Output__container">
            <Box className="Output__text">
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
            <Box className="Output__score">
                <p>Toxicity Score: {toxicityScore}%</p>
            </Box>
        </Box>
    );
};

export default OutputDisplay;