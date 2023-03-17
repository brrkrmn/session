import React from 'react';
import ContentWrapper from './ContentWrapper';
import CategoryProvider from './CategoryProvider';
import TimerProvider from './TimerProvider';

function App() {
  return (
    <CategoryProvider>
      <TimerProvider>
        <ContentWrapper />
      </TimerProvider>
    </CategoryProvider>
  );
}

export default App;
