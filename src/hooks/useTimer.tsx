import { useEffect, useState } from 'react';

interface TimerHookProps {
  initialTime?: number;
}

interface TimerHookReturn {
  timer: number;
  isActive: boolean;
  startTimer: () => void;
  pauseTimer: () => void;
  resetTimer: () => void;
}

const useTimer = ({ initialTime = 25 * 60 }: TimerHookProps): TimerHookReturn => {
  const [timer, setTimer] = useState(initialTime);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval: number | any;

    if (isActive && timer > 0) {
      interval = setInterval(() => {
        setTimer(prevTimer => prevTimer - 1);
      }, 1000);
    }
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isActive, timer]);

  const startTimer = (): void => setIsActive(true);
  const pauseTimer = (): void => setIsActive(false);
  const resetTimer = (): void => {
    setTimer(initialTime);
    setIsActive(false);
  };

  return {
    timer,
    isActive,
    startTimer,
    pauseTimer,
    resetTimer,
  };
};

export default useTimer;
