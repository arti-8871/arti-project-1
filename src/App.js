
import './App.css';
import { Header , Footer } from './Components';
import ForHospital from './Pages/ForHospital';
// import { Footer } from './Components';
import Home from "./Pages/Home"
function App() {
  return (
    <div className="App">
  <Header bgColor={"blue"}/>
  {/* <Home /> */}
  <ForHospital />
  
  <Footer />
    </div>
  );
}

export default App;
