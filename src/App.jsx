import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Blog, Portfolio, ContactUS, Signin, Signup } from './pages/index';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/contact-us' element={<ContactUS />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/welcome' element={<h1>Welcome To Charlotte Roof Repairs</h1>} />
        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
