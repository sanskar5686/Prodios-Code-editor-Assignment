import React from 'react';
import './App.css'; // Ensure App.css is correctly imported
import Compiler from './Components/Compiler';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <header className='Header'>
        Code editor Assignment for Prodios Labs.
      </header>
      <div className='Below-header'>
        <p className="below-header-text">A simple code editor with syntax highlighting.</p>
        <div className='GithubButton'>
          <a href='https://github.com/sanskar5686/Prodios-Code-editor-Assignment' target='_blank' rel='noopener noreferrer'>
            <button className='button-submit'>Github</button>
          </a>
          <Compiler />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
