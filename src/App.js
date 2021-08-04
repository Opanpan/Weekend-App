import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Homepage from "./pages/Homepage";
import Header from "./components/Header";
import Definition from "./pages/Definition";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <Container fluid className="p-0">
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
      <section></section>
    </Container>
  );
}

export default App;
