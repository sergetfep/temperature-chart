import "./App.css";
import { Content } from "./components/Contents/Content";
import { Header } from "./components/Header/Header";

function App() {
  return (
    <div className="App flex">
      <Header />
      <Content />
    </div>
  );
}

export default App;
