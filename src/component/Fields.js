import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

const fields = ({ Name, Email, index }) => {
    return (
        <div className='data_val'>
            <h4>{Name}</h4>
            <h4>{Email}</h4>
            <Stack>
                <Button variant="contained" color="error">
                    <DeleteIcon />
                </Button>
            </Stack>
        </div>
    )
}

export default fields