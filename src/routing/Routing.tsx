import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

import { HomePage } from '../pages/HomePage';
import { TeamPage } from '../pages/TeamPage';
import { AboutPage } from '../pages/AboutPage';

export const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<HomePage />} />
          <Route path="about-us" element={<AboutPage />} />
          <Route path="our-team" element={<TeamPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
