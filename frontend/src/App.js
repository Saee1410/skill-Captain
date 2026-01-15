import React from 'react';
import './App.css';
import Greeting from './Greeting.js';
import Footer from './Footer.js';

function App() {
  return (
    <div>
      <h1>Hello, react</h1>
        <Greeting name="saee" message="Welcome to the course!" />
       <Footer />
    </div>
  );
}

export default App;
