import React from 'react'
import Login from './pages/Login'
import { Route, Routes } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { useContext } from 'react';
import { AdminContext } from './context/AdminContext';
import NavBar from './components/NavBar'
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Admin/Dashboard';
import DoctorsList from './pages/Admin/DoctorsList';
import AllAppointments from './pages/Admin/AllAppointments';
import AddDoctor from './pages/Admin/AddDoctor';

const App = () => {
  const {aToken} = useContext(AdminContext)

  return aToken ? (
    <div>
      <ToastContainer/>
      <NavBar/>
      <div className='flex items-start'>
        <Sidebar />
        <Routes >
          <Route path = '/' element = {<></>} />
          <Route path = '/admin-dashboard' element = {<Dashboard/>} />
          <Route path = '/all-appointments' element = {<AllAppointments/>} />
          <Route path = '/add-doctor' element = {<AddDoctor/>} />
          <Route path = '/doctor-list' element = {<DoctorsList/>} />
        </Routes>
      </div>
    </div>
  ) : (
    <>
      <Login />
      <ToastContainer/>
    </>
  )
}

export default App