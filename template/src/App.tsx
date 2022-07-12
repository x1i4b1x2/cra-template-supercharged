import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/store';
import './theme/values';
import NavBar from './components/NavBar';
import Home from './pages/Home';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);

export default App;
