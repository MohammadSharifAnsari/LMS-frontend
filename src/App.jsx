// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import './App.css'

// https://github.com/singhsanket143/lms-frontend-hn/tree/6070e7565b9a1d7ef6a348e69bb4738f03f336ef
import { Route, Routes } from 'react-router-dom'

import Footer from './components/footer.jsx';
import HomeLayout from './Layouts/HomeLayout.jsx';
import AboutUs from './Pages/AboutUs.jsx';
import HomePage from './Pages/HomePages.jsx';
import NotFound from './Pages/NotFound.jsx';
import Signup from './Pages/signup.jsx';
import Login from './Pages/login.jsx';
import CourseList from './Pages/Courses/CourseList.jsx';
import Contact from './Pages/Contact.jsx';
function App() {

  return (
    <>



      <Routes>
        <Route path="/" element={<HomePage />} ></Route>
        <Route path="/about" element={<AboutUs />} ></Route>
        <Route path="*" element={<NotFound />} > </Route>
        <Route path="/courses" element={<CourseList />} ></Route>
        <Route path="/signup" element={<Signup />}  ></Route>
        <Route path='/contact' element={<Contact />} ></Route>
        <Route path='/login' element={<Login />} > </Route>
      </Routes>

    </>
  )

}

export default App
