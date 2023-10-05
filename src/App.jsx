import './App.css';
import ChooseUs from './Components/ChooseUs/ChooseUs';
import JoinUs from './Components/JoinUs/JoinUs';

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

      <JoinUs/>

    </div>
    </>
  )
}

export default App
