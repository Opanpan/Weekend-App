import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Homepage from "./pages/Homepage";
import Header from "./components/Header";
import Definition from "./pages/Definition";

function App() {
  return (
    <div>
      <section>
        <Header />
        <Homepage />
      </section>
      <section>
        <Definition />
      </section>
    </div>
  );
}

export default App;
