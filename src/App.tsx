import React from 'react';
import 'bulma/css/bulma.min.css';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { AddWord } from './pages/AddWord';
import { WordCheck } from './pages/WordCheck';
import { History } from './pages/History';
import { useAppSelector } from './app/hooks';
import { Empty } from './pages/Empty';

const App: React.FC = () => {
  const words = useAppSelector(state => state.words);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/add" element={<AddWord />} />
      <Route path="/check" element={words.length >= 10 ? <WordCheck /> : <Empty />} />
      <Route path="/history" element={<History />} />
    </Routes>
  );
};

export default App;
