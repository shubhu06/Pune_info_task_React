import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './home'
import Login from './login';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path='login' element={<Login />} />
          <Route path='home' element={<Home />} />
        </Routes>
      </BrowserRouter>  
    </>
  );
}

export default App;
