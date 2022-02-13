import * as React from "react";
import { Routes, Route} from "react-router-dom";
import './App.css';
import { HomePage } from './components/pages/HomePage';
import { Contactanos } from './components/pages/Contactanos';
import { QuienesSomos } from './components/pages/Quienessomos';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="HomePage" element={<HomePage />} />
        <Route path="Contactanos" element={<Contactanos />} />
        <Route path="QuienesSomos" element={<QuienesSomos />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
