import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'

import * as authSrvice from "./services/authService.js"
import Header from "./components/Header/Header.js";
import Login from "./components/Login/Login.js";
import Register from "./components/Register/Register.js";
import Dashboard from "./components/Dashboard/Dashboard.js";
import Details from "./components/Details/Details.js";
import Create from "./components/Create/Create.js";
import Edit from "./components/Edit/Edit.js";
import MyPets from "./components/MyPets/MyPets.js";

function App() {
  const [userInfo, setUserInfo] = useState({ isAuthenticated: false, username: "" });

  useEffect(() => {
    let user = authSrvice.getUser();

    setUserInfo({
      isAuthenticated: Boolean(user),
      user
    })
  }, [])

  const onLogin = (username) => {
    setUserInfo({
      isAuthenticated: true,
      user: username
    })
  }

  return (
    <div id="container">

      <Header {...userInfo} />

      <main id="site-content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login onLogin={onLogin} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/my-pets" element={<MyPets />} />
          <Route path="/create" element={<Create />} />

        </Routes>

      </main>

      <footer id="site-footer">
        <p>@PetMyPet</p>
      </footer>

    </div>
  );
}

export default App;
