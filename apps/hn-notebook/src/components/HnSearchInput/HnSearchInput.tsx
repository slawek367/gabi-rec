import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from 'react-router-dom';

import { useHnSearch } from './useHnSearch';

export const HnSearchInput = () => {
  const [input, setInput] = useState('');
  const { isLoading, refetch } = useHnSearch(input);
  const navigate = useNavigate();

  const search = async () => {
    await refetch();
    navigate(`/hnsearch/${input}`);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && input) {
      search();
    }
  };

  return (
    <TextField
      sx={{ width: 300 }}
      disabled={isLoading}
      id="outlined-basic"
      placeholder="Search Hacker News"
      variant="outlined"
      size="small"
      InputProps={{
        endAdornment: (
          <IconButton onClick={() => search()} disabled={!input}>
            {isLoading ? <CircularProgress size={18} /> : <SearchIcon />}
          </IconButton>
        ),
      }}
      onKeyDown={onKeyDown}
      onChange={(e) => setInput(e.target.value)}
      value={input}
    />
  );
};
