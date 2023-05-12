import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import getHeroesStats from './api/getHeroStats';
import HeroPageExpanded from './page/HeroPageExpanded';
import HomePage from './page/HomePage';



function AppRouter() {

    return (
        <BrowserRouter>
            <Routes>
                <Route index path="/" exact={true} element={<HomePage   />} />
                <Route index path="/hero/:name" element={<HeroPageExpanded/>} />
            </Routes>
        </BrowserRouter>
  );
}

export default AppRouter;