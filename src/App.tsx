import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header';
import Converter from './pages/Converter/Converter';
import Currencies from './pages/Currencies/Currencies';
import Layout from './components/Layout/Layout';
import BaseCurrency from './components/BaseCurrency/BaseCurrency';
import { path } from './const';

const App: React.FC = () => (
    <div className='app'>
        <BrowserRouter>
            <Header />
            <Layout leftContent={<Routes>
                <Route path={path.CONVERTER} element={<Converter />} />
                <Route path={path.CURRENCIES} element={<Currencies />} />
            </Routes>} rightContent={<BaseCurrency />} />
        </BrowserRouter>
    </div>);


export default App;
