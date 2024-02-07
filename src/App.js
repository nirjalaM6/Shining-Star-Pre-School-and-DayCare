import './App.css';
import Header from './pages/partials/header';
import About from './pages/About';

import Home from './pages/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import "react-responsive-carousel/lib/styles/carousel.min.css"; 


function App() {
  return (
    <div className="App">
  <Header></Header>
  <BrowserRouter basename="/app">
      <Routes>
        <Route path="./pages/About" /> {}
      </Routes>
    </BrowserRouter>
  <Home></Home>
      

    </div>
  );
}

export default App;
