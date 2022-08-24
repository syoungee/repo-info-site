import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import IssuePage from './pages/IssuePage';
import Repos from './pages/Repos';
import NotFound from './pages/NotFound';
import Main from './pages/Main';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Main />} />
          <Route path="/repos" element={<Repos />} />
          <Route path="/issues" element={<IssuePage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
