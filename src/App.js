import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import SignIn from "./components/SignIn"
import SignUp from "./components/SignUp"
import Header from "./components/header/Header"
import Content from "./components/content/Content"
import Footer from "./components/foot/Footer"
import AllJourneys from "./components/content/AllJourneys"
import React from "react"

function App() {
  return (
    <Router>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/header" element={<Header/>} />
        <Route path="/content" element={<Content/>} />
        <Route path="/footer" element={<Footer/>} />
        <Route path="/alljourneys" element={<AllJourneys/>} />

        </Routes>
    </Router>
  );
}

export default App