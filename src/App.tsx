import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/index';
import NewsDetail from './pages/news/NewsDetail';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/news/:id' element={<NewsDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
