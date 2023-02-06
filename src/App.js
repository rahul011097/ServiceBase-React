import {BrowserRouter as Router , Routes,Route} from "react-router-dom";
import Header from "./component/Header.jsx"
import Home from "./component/Home.jsx";
import Footer from './component/Footer';
import Contact from "./component/Contect.jsx";
import Services from "./component/Services.jsx";
import './styles/App.css'
import "./styles/Header.scss";
import "./styles/Home.scss";
import "./styles/Footer.scss";
import "./styles/Contect.scss";
import "./styles/mediaquery.scss";



function App() {
  return (
 <Router>
<Header />
  <Routes>
<Route path="/" element={<Home />}  />
<Route path="/contact" element={<Contact />}  />
<Route path="/Services" element={<Services />}  />

  </Routes>
  <Footer />
 </Router>
  
  );
}

export default App;
