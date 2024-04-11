import * as React from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Tooltip from '@mui/material/Tooltip';

interface IProps {
    type: string;
    readonly: boolean;
    value: string;
    setValue: (value: string) => void;
    label?: string;
    multiline?: boolean;
    rows?: number;
}

const InputField: React.FC<IProps> = ({
    type,
    readonly,
    value,
    setValue,
    label,
    multiline = false,
    rows = 1,
}) => {
    const handleCopy = () => {
        navigator.clipboard.writeText(value);
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <TextField
                className="Translation__input-field"
                label={label}
                color="primary"
                variant="outlined"
                value={value}
                InputProps={{ readOnly: readonly }}
                type={type}
                multiline={multiline}
                rows={rows}
                onChange={(e) => {
                    setValue(e.target.value);
                }}
                style={{ flexGrow: 1 }}
            />
            {readonly && (
                <Tooltip title="Copy">
                    <IconButton onClick={handleCopy}>
                        <ContentCopyIcon />
                    </IconButton>
                </Tooltip>
            )}
        </div>
    );
};

export default InputField;