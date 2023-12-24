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
import Denied from './Pages/Denied.jsx';
import CourseDescription from './Pages/Courses/coursedescription.jsx';
import RequireAuth from './components/auth/requireauth.jsx';
import CreateCourse from './Pages/Courses/CreateCourse.jsx';
import Profile from './Pages/User/Profile.jsx';
import EditProfile from './Pages/User/EditProfile.jsx';
import Checkout from './Pages/payment/Checkout.jsx';
import CheckoutSuccess from './Pages/payment/CheckoutSuccess.jsx';
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
        <Route path='/denied' element={<Denied />}></Route>
        <Route path='/course/description' element={<CourseDescription />}></Route>
       
        <Route element={<RequireAuth allowedRoles={["ADMIN"]} />} >

          <Route path='/course/create' element={<CreateCourse />}></Route>

        </Route>

        <Route element={<RequireAuth allowedRoles={["ADMIN", "USER"]} />} >
          <Route path='/user/profile' element={<Profile />} ></Route>
          <Route path='/user/editprofile' element={<EditProfile/>} ></Route>
          <Route path='/checkout' element={<Checkout/>} ></Route>
          <Route path='/checkout/success' element={<CheckoutSuccess/>} ></Route>
        </Route>

      </Routes>

    </>
  )

}

export default App
