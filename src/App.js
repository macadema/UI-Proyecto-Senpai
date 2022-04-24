import * as React from "react";
import { Routes, Route} from "react-router-dom";
import './App.css';
import { HomePage } from './components/pages/HomePage';
import { ContactanosPage } from './components/pages/ContactanosPage';
import { QuienessomosPage } from './components/pages/QuienessomosPage';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="HomePage" element={<HomePage />} />
        <Route path="Contactanos" element={<ContactanosPage />} />
        <Route path="QuienesSomos" element={<QuienessomosPage />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
