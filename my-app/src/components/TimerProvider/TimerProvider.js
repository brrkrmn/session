import React from 'react';

export const TimerContext = React.createContext();

function TimerProvider({ children }) {
  // working || paused || stopped
  const [isPaused, setIsPaused] = React.useState(false);
  const [count, setCount] = React.useState(0);
  
  React.useEffect(() => {
    if (!isPaused) {
      const intervalId = window.setInterval(() => {
        setCount((currentCount) => currentCount + 1);
      }, 1000);

      return () => {
        window.clearInterval(intervalId);
      }
    }
  }, [isPaused])

  function handlePauseTimer() {
    setIsPaused((isPaused) => !isPaused);
  }

  function handleStopTimer() {
    setIsPaused(true);
    setCount(0);
  }

  return (
    <TimerContext.Provider value={{count, handlePauseTimer, handleStopTimer, isPaused}}>
      {children}
    </TimerContext.Provider>
  )
}

export default TimerProvider;
