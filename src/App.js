import React from 'react';
import './App.css';
import ArtworkList from './components/artworkList';

import Header from './components/header';

function App() {
  return (
    <div className="App">
      <Header />
      <ArtworkList />
    </div>
  );
}

export default App;