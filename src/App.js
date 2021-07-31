import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Homepage from "./pages/Homepage";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <Homepage />
    </div>
  );
}

export default App;
