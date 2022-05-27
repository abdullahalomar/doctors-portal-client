import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth';
import Signup from './Pages/Login/Signup';
import Navbar from './Pages/Shared/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyAppointments from './Pages/Dashboard/MyAppointments';
import Review from './Pages/Dashboard/MyReview';
import MyReview from './Pages/Dashboard/MyReview';
import MyHistory from './Pages/Dashboard/MyHistory';

function App() {
  return (
    <div className='max-w-7x1 mx-auto px-12'>
      <Navbar></Navbar>
      <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/home' element={<Home></Home>}></Route>
        <Route path='about' element={<About></About>}></Route>
        <Route path='appointment' element={
          <RequireAuth>
            <Appointment/>
          </RequireAuth>
        }/>
        <Route path='dashboard' element={
          <RequireAuth>
            <Dashboard/>
          </RequireAuth>
        }>
          <Route index element={<MyAppointments></MyAppointments>}></Route>
          <Route path='review' element={<MyReview></MyReview>}></Route>
          <Route path='history' element={<MyHistory/>}></Route>
        </Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
