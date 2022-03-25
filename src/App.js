import "./App.css";
import SupportSection from "./components/SupportSection/SupportSection";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <SupportSection />
      <Footer />
    </div>
  );
}

export default App;
