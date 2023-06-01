import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import des composants dans le dossier / composant, crée en des nouveaux et importe les pour les ajouter sur les routeset avoir une nouvelle page
import Home from './Components/Home/Home';
import Scan from './Components/Scan/Scan'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      {/* Index avec router : permet de gerer tes routes dans l'url la route * redirige toutes les non definies sur / */}
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}>
                </Route>
                <Route path="/scan" element={<Scan />}>
                </Route>
                <Route path="*" element={<Navigate to="/" />}>
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
