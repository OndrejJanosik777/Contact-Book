import logo from './logo.svg';
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import ContactBook from './pages/contactBook';
import Starwars from './pages/starwars';
import UserProfile from './pages/userProfile';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/contact-book' element={<ContactBook />} />
        <Route path='/starwars' element={<Starwars />} />
        <Route path='/user-profile' element={<UserProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
