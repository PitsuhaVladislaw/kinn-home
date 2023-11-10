import React from "react"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import NavBar from "./components/NavBar/NavBar"
import Main from "./page/Main"

export default function App() {
  return (
    <div>
      <NavBar />
      <Header />
      <Main />
      <Footer />
    </div>
  )
}