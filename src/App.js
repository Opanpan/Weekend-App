import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Homepage from "./pages/Homepage";
import Header from "./components/Header";
import Definition from "./pages/Definition";
import AboutUs from "./pages/AboutUs";
import AboutUsSecond from "./pages/AboutUsSecond";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="containt">
      <section>
        <Header />
        <Homepage />
      </section>
      <section>
        <Definition />
      </section>
      <section>
        <AboutUs />
      </section>
      <section>
        <AboutUsSecond />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
}

export default App;
