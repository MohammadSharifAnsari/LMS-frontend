// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import './App.css'
import HomePage from './Pages/HomePages.jsx';
// https://github.com/singhsanket143/lms-frontend-hn/tree/6070e7565b9a1d7ef6a348e69bb4738f03f336ef
import {Route, Routes } from 'react-router-dom'

import Footer from './components/footer.jsx';
import HomeLayout from './Layouts/HomeLayout.jsx';

function App() {

  return (
<>



    <Routes>
    <Route path="/" element={<HomePage />} ></Route>

    </Routes>

</>
  )

}

export default App
