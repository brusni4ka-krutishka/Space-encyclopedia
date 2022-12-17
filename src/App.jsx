import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/foot/footer/Footer.jsx';
import Header from './components/head/header/Header.jsx';
import Indent from './components/head/indent/Indent.jsx';
import MainPage from './pages/MainPage.jsx';
import CosmosPage from './pages/CosmosPage.jsx';
import CosmosPageStars from './pages/CosmosPageStars.jsx';
import CosmosPagePlanets from './pages/CosmosPagePlanets.jsx';
import CosmosPageSatellites from './pages/CosmosPageSatellites.jsx';

function App() {
  const headerSize = 100;
  return (
    <>
      <Header height={headerSize} />
      <Indent indentSize={headerSize} />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/cosmos' element={<CosmosPage />} />
        <Route path='/cosmos/stars' element={<CosmosPageStars />} />
        <Route path='/cosmos/planets' element={<CosmosPagePlanets />} />
        <Route path='/cosmos/satellites' element={<CosmosPageSatellites />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
