import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { StartupSplash } from './components/common/StartupSplash';
import { ScrollToTop } from './components/common/ScrollToTop';
import { IntroProvider } from './context/IntroContext';
import { AnalyticsTracker } from './components/common/AnalyticsTracker';

const CarPage = React.lazy(() => import('./pages/CarPage').then((m) => ({ default: m.CarPage })));
const CompetitionsPage = React.lazy(() => import('./pages/CompetitionsPage').then((m) => ({ default: m.CompetitionsPage })));
const TeamHistoryPage = React.lazy(() => import('./pages/TeamHistoryPage').then((m) => ({ default: m.TeamHistoryPage })));
const DepartmentsPage = React.lazy(() => import('./pages/DepartmentsPage').then((m) => ({ default: m.DepartmentsPage })));
const RecruitmentPage = React.lazy(() => import('./pages/RecruitmentPage').then((m) => ({ default: m.RecruitmentPage })));
const PartnersPage = React.lazy(() => import('./pages/PartnersPage').then((m) => ({ default: m.PartnersPage })));
const SupportPage = React.lazy(() => import('./pages/SupportPage').then((m) => ({ default: m.SupportPage })));
const SupportFormNoticePage = React.lazy(() => import('./pages/SupportFormNoticePage').then((m) => ({ default: m.SupportFormNoticePage })));
const ContactPage = React.lazy(() => import('./pages/ContactPage').then((m) => ({ default: m.ContactPage })));
const EventsPage = React.lazy(() => import('./pages/EventsPage').then((m) => ({ default: m.EventsPage })));

export function App() {
  return (
    <IntroProvider>
      <BrowserRouter>
        <AnalyticsTracker />
        <ScrollToTop />
        <StartupSplash />
        <div className="min-h-screen bg-warm-100 text-warm-900 flex flex-col font-sans selection:bg-brand-red selection:text-white">
        <Navbar />
        
        <main className="flex-grow">
          <React.Suspense fallback={<div className="min-h-screen bg-warm-100" />}>
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
              <Route path="/join" element={<RecruitmentPage />} />
              <Route path="/join-us" element={<RecruitmentPage />} />
              <Route path="/partners" element={<PartnersPage />} />
              <Route path="/sponsors" element={<PartnersPage />} />
              <Route path="/sponsorship" element={<PartnersPage />} />
              <Route path="/support" element={<SupportPage />} />
              <Route path="/support/notice" element={<SupportFormNoticePage />} />
              <Route path="/support/form" element={<SupportFormNoticePage />} />
              <Route path="/support/formular-230" element={<SupportFormNoticePage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </React.Suspense>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  </IntroProvider>
  );
}

export default App;

