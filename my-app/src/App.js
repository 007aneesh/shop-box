import React from "react";
import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Trending from "./pages/trending";
import Categories from "./pages/categories";
import Accounts from "./pages/account";
function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" exact element={<Home navbar={Navbar} />} />
          <Route path="/trending" element={<Trending navbar={Navbar} />} />
          <Route path="/categories" element={<Categories navbar={Navbar} />} />
          <Route path="/accounts" element={<Accounts navbar={Navbar} />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
