import "./App.css";

import Background from "./background/Background";
import Timer from "./timer/Timer";
import Footer from "./footer/Footer";

function App() {
  return (
    <div className="App">
      <Background />
      <main className="main">
        <p className="main__text">We're launching soon</p>
        <Timer />
      </main>
      <Footer />
    </div>
  );
}

export default App;
