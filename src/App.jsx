import './App.css';
import ChooseUs from './Components/ChooseUs/ChooseUs';

import LandingSection from './Components/LandingSection/LandingSection';
import MarketUpdate from './Components/MarketUpdate/MarketUpdate';
import NavBar from './Components/NavBar/NavBar';

function App() {

  return (
    <>
    <NavBar/>

    <div className='center'>

      <LandingSection/>

      <MarketUpdate/>

      <ChooseUs/>

    </div>
    </>
  )
}

export default App
