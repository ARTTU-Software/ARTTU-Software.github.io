import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { CarPage } from './pages/CarPage';
import { CompetitionsPage } from './pages/CompetitionsPage';
import { TeamHistoryPage } from './pages/TeamHistoryPage';
import { DepartmentsPage } from './pages/DepartmentsPage';
import { RecruitmentPage } from './pages/RecruitmentPage';
import { PartnersPage } from './pages/PartnersPage';
import { SupportPage } from './pages/SupportPage';
import { ContactPage } from './pages/ContactPage';
import { EventsPage } from './pages/EventsPage';
import { StartupSplash } from './components/common/StartupSplash';
import { ScrollToTop } from './components/common/ScrollToTop';
import { IntroProvider } from './context/IntroContext';

export function App() {
  return (
    <IntroProvider>
      <BrowserRouter>
        <ScrollToTop />
        <StartupSplash />
        <div className="min-h-screen bg-warm-100 text-warm-900 flex flex-col font-sans selection:bg-brand-red selection:text-white">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/car" element={<CarPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/competitions" element={<CompetitionsPage />} />
            <Route path="/history" element={<CompetitionsPage />} />
            <Route path="/history/team" element={<TeamHistoryPage />} />
            <Route path="/team-history" element={<TeamHistoryPage />} />
            <Route path="/departments" element={<DepartmentsPage />} />
            <Route path="/recruitment" element={<RecruitmentPage />} />
            <Route path="/partners" element={<PartnersPage />} />
            <Route path="/sponsors" element={<PartnersPage />} />
            <Route path="/sponsorship" element={<PartnersPage />} />
            <Route path="/support" element={<SupportPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  </IntroProvider>
  );
}

export default App;

