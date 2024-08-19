import { Routes , Route, BrowserRouter, Navigate  } from "react-router-dom";
import React from 'react'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Header from "./components/Header";
import ResetPassword from './pages/ResetPassword'
import  ThemeProvider  from './contexts/themeContext'

function App() {
  return (
    <>
     <ThemeProvider>
      <BrowserRouter>
      <Header />
      <Routes>
          <Route path="/" element={<Navigate to="/signup" replace />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
      </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App

