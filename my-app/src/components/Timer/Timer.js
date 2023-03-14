import React from 'react';

function Timer() {
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

  function resumeTimer() {
    setIsPaused(false);
  }

  function pauseTimer() {
    setIsPaused(true);
  }

  function stopTimer() {
    setIsPaused(true);
    setCount(0);
  }
  
  return (
    <>
      <div>{count}</div>
      <button onClick={resumeTimer}>Resume</button>
      <button onClick={pauseTimer}>Pause</button>
      <button onClick={stopTimer}>Stop</button>
      <div>{isPaused}</div> 
    </>
  
  
  );
}

export default Timer;
