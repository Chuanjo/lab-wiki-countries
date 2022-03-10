import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <div id="countries-page">
   
        <div><CountriesList /></div>
        
        <div>

        <Routes>
          <Route path="/:alpha3Code" element={<CountryDetails />} />
        </Routes>
        </div>

      </div>
      




      

      


    </div>
  );
}

export default App;
