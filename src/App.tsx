import React, { useState } from 'react';
import { ThemeProvider } from './components/ThemeProvider';
import { Navigation } from './components/Navigation';
import { HomePage } from './components/HomePage';
import { BlogPage } from './components/BlogPage';
import { BlogPost } from './components/BlogPost';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'blog' | 'blog-post'>('home');
  const [currentBlogPost, setCurrentBlogPost] = useState<string | null>(null);

  const handleBlogPostClick = (postId: string) => {
    setCurrentBlogPost(postId);
    setCurrentPage('blog-post');
  };

  const handleBackToBlog = () => {
    setCurrentPage('blog');
    setCurrentBlogPost(null);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'blog':
        return <BlogPage onBlogPostClick={handleBlogPostClick} />;
      case 'blog-post':
        return <BlogPost postId={currentBlogPost} onBack={handleBackToBlog} />;
      default:
        return <HomePage />;
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background transition-colors duration-300">
        <Navigation 
          currentPage={currentPage === 'blog-post' ? 'blog' : currentPage} 
          onPageChange={setCurrentPage} 
        />
        
        <main>
          {renderCurrentPage()}
        </main>
      </div>
    </ThemeProvider>
  );
}