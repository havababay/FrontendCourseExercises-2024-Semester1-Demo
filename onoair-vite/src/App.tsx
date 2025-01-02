import { Route, Routes } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Flights from "./Flights";
import FlightForm from "./FlightForm";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/flights" element={<Flights />} />
        <Route path="/flight/:id" element={<FlightForm />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
