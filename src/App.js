import "./App.css";
import SupportSection from "./components/SupportSection/SupportSection";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import FeaturedArtist from "./components/FeaturedArtist/FeaturedArtist";
import CreatorShowCase from "./components/CreatorShowcase/CreatorShowcase";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <FeaturedArtist />
      <CreatorShowCase />
      <SupportSection />
      <Footer />
    </div>
  );
}

export default App;
