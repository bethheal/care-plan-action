import React from 'react';
import './App.css'; // Import your CSS file
import HorizontalSection1 from './HorizontalSection1';
import HorizontalSection2 from './HorizontalSection2';
import HorizontalSection3 from './HorizontalSection3';

function App() {
  return (
    <div className="container">
      <HorizontalSection1 />
      <HorizontalSection2 />
      <HorizontalSection3 />
    </div>
  );
}

export default App;
