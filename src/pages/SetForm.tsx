import react, { FC } from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import { StartButton, PauseButton, ResetButton } from '../utils/Button';

const SetForm = () => {
  return (
    <Container maxWidth="sm">
      {/* <Box textAlign="center" my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Pomodoro Timer
        </Typography>
        <TimerDisplay time={timer} />
        <Box my={2}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item>
              <StartButton onClick={startTimer} disabled={isActive} />
            </Grid>
            <Grid item>
              <PauseButton onClick={pauseTimer} disabled={!isActive} />
            </Grid>
            <Grid item>
              <ResetButton onClick={resetTimer} />
            </Grid>
          </Grid>
        </Box>
        {!isActive && (
          <Typography variant="body2" component="p">
            Click "Start" to begin the Pomodoro timer.
          </Typography>
        )}
      </Box> */}
    </Container>
  );
};

export default SetForm;
