import Catalog from "./components/Catalog/Catalog";
import Header from "./components/Header/Header";
import {Routes, Route} from 'react-router-dom';
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import MyTrips from "./components/MyTrips/MyTrips";
import Create from "./components/Create/Create";

function App() {
  return (
    <div id="container">

      <Header />

      <main id="site-content">
        <Routes>
          <Route path="/" element={<Catalog/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/create" element={<Create/>}/>
          <Route path="/my-trips" element={<MyTrips/>}/>
        </Routes>
      </main>


      <footer id="site-footer">
        <p>&copy; Summer Travels</p>
      </footer>
    </div>
  );
}

export default App;
