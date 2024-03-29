import './App.css';
import Navbar from './Pages/Shared/Navbar';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import { Routes, Route } from 'react-router-dom';
import Login from './Pages/Login/Login';
import Appointment from './Pages/Appointment/Appointment';
import Signup from './Pages/Login/Signup';
import RequireAuth from './Pages/Login/RequireAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className='max-w-7xl mx-auto'>
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='about' element={<About/>} />
      <Route path='appointment' element={
      <RequireAuth>
      <Appointment/>
      </RequireAuth>
      } />
      <Route path='login' element={<Login/>} />
      <Route path='login' element={<Login/>} />
      <Route path='Signup' element={<Signup/>} />
    </Routes>
    <ToastContainer />
    </div>
  );
}

export default App;
