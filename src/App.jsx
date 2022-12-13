import './App.css';
import Footer from './components/foot/footer/Footer.jsx';
import Header from './components/head/header/Header.jsx';
import Indent from './components/head/indent/Indent.jsx';

function App() {
  const headerSize = 100;
  return (
    <>
      <Header height={headerSize} />
      <Indent indentSize={headerSize} />
      <Footer />
    </>
  );
}

export default App;
