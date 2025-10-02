import React, { useState } from 'react';
import { ThemeProvider } from './components/ThemeProvider';
import { Navigation } from './components/Navigation';
import { HomePage } from './components/HomePage';
import { BlogPage } from './components/BlogPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'blog'>('home');

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background transition-colors duration-300">
        <Navigation 
          currentPage={currentPage} 
          onPageChange={setCurrentPage} 
        />
        
        <main>
          {currentPage === 'home' ? <HomePage /> : <BlogPage />}
        </main>
      </div>
    </ThemeProvider>
  );
}