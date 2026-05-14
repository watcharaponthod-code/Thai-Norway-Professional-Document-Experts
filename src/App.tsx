/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { LanguageProvider } from './context/LanguageContext';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { ServiceDetailPage } from './components/ServiceDetailPage';
import { LineQRModal } from './components/LineQRModal';

function AppContent() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/service/:id" element={<ServiceDetailPage />} />
      </Routes>
      <LineQRModal />
    </>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
