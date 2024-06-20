import "./index.css";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <HomePage />
      <Footer />
    </>
  );
}

export default App;
