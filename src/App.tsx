import React, { useState } from 'react';
import './App.css';
import { PandaFact } from './types';
import { factService } from './factService';

function App() {
  const [pandaFact, setPandaFact] = useState<PandaFact | null>(null);

  const fetchPandaFact = () => {
    const randomFact = factService.getRandomFact();
    setPandaFact(randomFact);
  };

  return (
    <div className='App'>
      <h1>Panda Fact App</h1>
      <button onClick={fetchPandaFact}>Get a Panda Fact</button>
      {pandaFact && <p>{pandaFact.fact}</p>}
    </div>
  );
}

export default App;
