import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';

// Import pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import AttorneyPage from './pages/AttorneyPage';
import ContactPage from './pages/ContactPage';
import FAQPage from './pages/FAQPage';
import ResourcesPage from './pages/ResourcesPage';
import FamilyImmigrationPage from './pages/FamilyImmigrationPage';
import BusinessImmigrationPage from './pages/BusinessImmigrationPage';
import DeportationDefensePage from './pages/DeportationDefensePage';
import CitizenshipPage from './pages/CitizenshipPage';
import AsylumPage from './pages/AsylumPage';
import ServicesPage from './pages/ServicesPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="attorney" element={<AttorneyPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="faq" element={<FAQPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="blog/:id" element={<BlogPostPage />} />
          <Route path="resources" element={<ResourcesPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="services/family-immigration" element={<FamilyImmigrationPage />} />
          <Route path="services/business-immigration" element={<BusinessImmigrationPage />} />
          <Route path="services/deportation-defense" element={<DeportationDefensePage />} />
          <Route path="services/citizenship" element={<CitizenshipPage />} />
          <Route path="services/asylum" element={<AsylumPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
