import React from 'react';
import {Box, TextField} from '@mui/material'

const Search = () => {
    return (
        <Box className=" w-2/3" sx={{ '& > :not(style)': { m: 1 } }}>
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <TextField
              className="w-full px-4"
              id="input-with-sx"
              label="Search something"
              variant="outlined"
              size="small"
            />
          </Box>
        </Box>
    );
};

export default Search;