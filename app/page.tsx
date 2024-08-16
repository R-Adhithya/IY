
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer"
export default function Home() {
  return (
    <div className="min-container">
      <Navbar/>
      <Hero />
      <div className="bottom-0">
        <Footer/>
      </div>
    </div>
  );
}
