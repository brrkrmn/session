import React from 'react';
import ContentWrapper from './ContentWrapper';
import CategoryProvider from './CategoryProvider';

function App() {
  return (
    <CategoryProvider>
      <ContentWrapper />
    </CategoryProvider>
  );
}

export default App;
