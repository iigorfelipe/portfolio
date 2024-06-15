import { Routes, Route, Navigate } from 'react-router-dom';
import Work from '../pages/work';
import About from '../pages/about';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/portfolio/" element={<Work />} />
      <Route path="/portfolio/work" element={<Work />} />
      <Route path="/portfolio/about" element={<About />} />
      <Route path="*" element={<Navigate to="/portfolio/work" />} />
    </Routes>
  );
};
