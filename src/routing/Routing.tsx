import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

import { HomePage, TeamPage, AboutPage } from '../pages';

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
