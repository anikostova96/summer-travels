import Catalog from "./components/Catalog/Catalog";
import Header from "./components/Header/Header";
import { Routes, Route } from 'react-router-dom';
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import MyTrips from "./components/MyTrips/MyTrips";
import Create from "./components/Create/Create";
import Logout from "./components/Logout/Logout";
import Details from "./components/Details/Details";
import Edit from "./components/Edit/Edit";
import {AuthProvider} from './contexts/UserContext';

function App() {
  
  return (
    <AuthProvider>
      <div id="container">

        <Header />

        <main id="site-content">
          <Routes>
            <Route path="/" element={<Catalog />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/register" element={<Register />} />
            <Route path="/create" element={<Create opa="5" />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="/my-trips" element={<MyTrips />} />
          </Routes>
        </main>


        <footer id="site-footer">
          <p>&copy; Summer Travels</p>
        </footer>
      </div>
    </AuthProvider>
  );
}

export default App;
