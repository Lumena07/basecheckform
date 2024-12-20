import React, { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppRoutes } from './routes';
import { Header } from './components/layout/Header';
import { LoadingSpinner } from './components/ui/LoadingSpinner';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <Suspense fallback={<LoadingSpinner />}>
            <AppRoutes />
          </Suspense>
        </main>
      </div>
    </Router>
  );
}

export default App;