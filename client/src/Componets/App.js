
import React  from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homes from './Home';
import IntakeFormPage from './Intakeformpage';
 import Upload from './Upload'; // Replace 'Upload' with the actual import for your upload component
import Viewing from './Viewing';
import BuyForm from './Buyform';


function App() {
  
  

  return (
    <div>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Homes/>} />
    <Route path="/intake-form" element={<IntakeFormPage />} />
    <Route path="/documents-upload" element={<Upload />} />
    <Route path="/buying-form" element={<BuyForm />} />
    <Route path="/viewing-date" element={<Viewing />} /> {/* Define a route for the IntakeFormPage */}
    </Routes>
   
    </BrowserRouter>
    
    </div>
  );
}

export default App;
