import { useEffect, useState } from 'react';
import Header from './modules/Header';
import CardList from './modules/CardList';
import './app.scss'
import Main from './pages/Main';

function App() {
  return (
    <div>
      <Header />
      <Main/>
    </div>
  );
}

export default App;
