// src/App.jsx
import { useState } from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import AboutTech from './components/AboutTech';
import Models from './components/Models';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import './App.css';

function App() {
  const [reload, setReload] = useState(false);

  const refreshList = () => setReload(!reload);

  return (
    <>
      <Hero />
      <Features />
      <AboutTech />
      <Models />
      <div style={{ maxWidth: 600, margin: 'auto', padding: '1rem' }}>
        
        <h1>Formulario de contacto para recibir actualizaciones y ofertas
          
        </h1>
        <ContactForm onSubmitSuccess={refreshList} />
        <hr />
        <ContactList reload={reload} />
      </div>
    </>
  );
}

export default App;
