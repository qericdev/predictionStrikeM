import NavbarComponent from './landing/NavbarComponent';
import Hero from './landing/Hero';
import Matches from './landing/Matches';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Cards from './landing/Cards';

function App() {

  return (
    <div className="App">
        <NavbarComponent/>
        <Hero/>
        <Cards/>
        <Matches/>
        <Footer/>
    </div>
  );
}

export default App;
