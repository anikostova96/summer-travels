import Catalog from "./components/Catalog/Catalog";
import Header from "./components/Header/Header";
import { Routes, Route } from 'react-router-dom';
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import MyTrips from "./components/MyTrips/MyTrips";
import Create from "./components/Create/Create";
import UserContext from "./contexts/UserContext";
import {useState} from 'react';
import Logout from "./components/Logout/Logout";
import Details from "./components/Details/Details";
import Edit from "./components/Edit/Edit";

function App() {
  let [userInfo, setUserInfo] = useState({});
  let settingUser = (user) => {
    setUserInfo(user);
  }
  return (
    <UserContext.Provider value={{settingUser, userInfo}}>
      <div id="container">

        <Header userInfo={userInfo} />

        <main id="site-content">
          <Routes>
            <Route path="/" element={<Catalog />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/register" element={<Register />} />
            <Route path="/create" element={<Create />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="/my-trips" element={<MyTrips />} />
          </Routes>
        </main>


        <footer id="site-footer">
          <p>&copy; Summer Travels</p>
        </footer>
      </div>
    </UserContext.Provider>
  );
}

export default App;
