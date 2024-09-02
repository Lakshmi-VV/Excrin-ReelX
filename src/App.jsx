import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import React from "react";
import SignUp from "./login/SignUp";
import SignIn from "./login/SignIn";
import Header from "./components/Header";
import ResetPassword from "./login/ResetPassword";
import ThemeProvider from "./contexts/themeContext";
import Dashboard from "./homePage/dashboard";
import Artboard from "../videoArtboard/artboard";

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
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/artboard" element={<Artboard />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
