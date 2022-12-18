import React from 'react';
import { Box, Stack, TextField } from '@mui/material';

function InputData() {
    return (
        <Box sx={{p: 3, display:'flex', justifyContent: 'space-between'}}>
            <TextField id="outlined-required" label="X" />
            <TextField id="outlined-required" label="Y" />
        </Box>
    );
}

export default InputData;
