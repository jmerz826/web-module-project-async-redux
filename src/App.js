import React from 'react';
import './App.css';
import ArtworkList from './components/artworkList';

import Header from './components/header';
import Details from './components/details';

function App() {
  return (
    <div className="App">
      <Header />
      <ArtworkList />
      <Details />
    </div>
  );
}

export default App;