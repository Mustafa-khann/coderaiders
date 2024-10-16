import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [showFinalDestination, setShowFinalDestination] = useState(false);
  const [glitchText, setGlitchText] = useState('DATA PHANTOMS');

  const handleShowFinalDestination = () => {
    setShowFinalDestination(true);
  };

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      const glitchChance = Math.random();
      if (glitchChance > 0.7) {
        setGlitchText('C0D3 R4ID3RS');
        setTimeout(() => setGlitchText('C0D3 R4ID3RS'), 200);
      }
    }, 2000);

    return () => clearInterval(glitchInterval);
  }, []);

  const encodedMessage = "Q29uZ3JhdHVsYXRpb25zLCBDb2RlIFJhaWRlcnMhIFlvdeKAmXZlIGNyYWNrZWQgdGhlIGNvZGUgYW5kIHJldmVhbGVkIHRoZSBzZWNyZXQ6ICdJbiB0aGUgcmVhbG0gb2YgY29kZSwgY3JlYXRpdml0eSBpZ25pdGVzIGlubm92YXRpb24uJyBZb3VyIHJlbGVudGxlc3MgcHVyc3VpdCBvZiBrbm93bGVkZ2UgYW5kIHlvdXIgYWJpbGl0eSB0byBuYXZpZ2F0ZSB0aHJvdWdoIGNoYWxsZW5nZXMgaGF2ZSBsZWQgeW91IHRvIHRoaXMgdHJpdW1waC4gS2VlcCByYWlkaW5nIHRoZSByZWFsbXMgb2YgcG9zc2liaWxpdHkgYW5kIGNvbnRpbnVlIHRvIGlubm92YXRlIQ==";

  return (
    <div className="App">
      <div className="cyberpunk-background"></div>
      {!showFinalDestination ? (
        <div className="cyberpunk-container">
          <h1 className="glitch" data-text={glitchText}>{glitchText}</h1>
          <p className="subtext">Welcome to Zombie City, 2077</p>
          <button className="cyberpunk-button" onClick={handleShowFinalDestination}>
            BOOOM!
          </button>
        </div>
      ) : (
        <div className="encoded-message">
          <p className="message-body">{encodedMessage}</p>
        </div>
      )}
    </div>
  );
}

export default App;
