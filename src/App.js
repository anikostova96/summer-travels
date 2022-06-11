import Catalog from "./components/Catalog/Catalog";
import Header from "./components/Header/Header";

function App() {
  return (
    <div id="container">

      <Header />

      <main id="site-content">
        <Catalog />
      </main>


      <footer id="site-footer">
        <p>&copy; Summer Travels</p>
      </footer>
    </div>
  );
}

export default App;
