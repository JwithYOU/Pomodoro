import React, { FC, MouseEventHandler } from 'react';
import { Button } from '@mui/material';

interface ButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  disabled: boolean;
}

export const StartButton: FC<ButtonProps> = ({ onClick, disabled }) => (
  <Button variant="contained" color="primary" onClick={onClick} disabled={disabled}>
    Start
  </Button>
);

export const PauseButton: FC<ButtonProps> = ({ onClick, disabled }) => (
  <Button variant="contained" onClick={onClick} disabled={disabled}>
    Pause
  </Button>
);

export const ResetButton: FC<ButtonProps> = ({ onClick }) => (
  <Button variant="contained" onClick={onClick}>
    Reset
  </Button>
);
