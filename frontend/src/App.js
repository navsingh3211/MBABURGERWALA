import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from "./components/home/Home";
import Header from "./components/layout/Header";
import "./styles/app.scss";
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/founder.scss";


function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
