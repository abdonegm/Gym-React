import "./App.css";
import Home from "./pages/home/Home.jsx";
import About from "./pages/about/About";
import Contact from "./pages/conatct/Contact";
import Gallary from "./pages/gallary/Gallary";
import Plans from "./pages/plans/Plans";
import Trainers from "./pages/trainers/Trainers.jsx";
import Notfound from "./pages/notFound/Notfound";
import Navbar from "./component/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./component/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="gallery" element={<Gallary />} />
          <Route path="plans" element={<Plans />} />
          <Route path="trainers" element={<Trainers />} />
          <Route path="plans" element={<Plans />} />
          <Route path="*" element={<Notfound />} />
          <Route path="about" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
