import { Typography } from '@mui/material';

interface TimerDisplayProps {
  time: number;
}

const TimerDisplay = ({ time }: TimerDisplayProps) => {
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return <Typography variant="h6">{formatTime(time)}</Typography>;
};

export default TimerDisplay;
