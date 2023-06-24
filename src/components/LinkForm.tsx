import React from 'react';
import { Button, TextField } from '@mui/material';

interface LinkFormProps {
  youtubeLink: string;
  setYoutubeLink: React.Dispatch<React.SetStateAction<string>>;
}

const LinkForm = ({ youtubeLink, setYoutubeLink }: LinkFormProps) => {
  const handleYoutubeLinkChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setYoutubeLink(e.target.value);
  };

  const handleYoutubeLinkSubmit = () => {};
  return (
    <form onSubmit={handleYoutubeLinkSubmit}>
      <TextField
        type="text"
        value={youtubeLink}
        onChange={handleYoutubeLinkChange}
        label="YouTube Link"
        variant="outlined"
        size="small"
      />
      <Button type="submit" variant="contained" color="primary">
        Load YouTube Video
      </Button>
    </form>
  );
};

export default LinkForm;
