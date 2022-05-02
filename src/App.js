import * as React from "react";
import { Routes, Route} from "react-router-dom";
import './App.css';
import { HomePage } from './components/pages/HomePage';
import { ContactanosPage } from './components/pages/ContactanosPage';
import { QuienessomosPage } from './components/pages/QuienessomosPage';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import {LoginPage} from './components/pages/LoginPage';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/contactanos" element={<ContactanosPage />} />
        <Route path="/quienessomos" element={<QuienessomosPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
