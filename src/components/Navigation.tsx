import React, { useState } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from './ThemeProvider';

interface NavigationProps {
  currentPage: 'home' | 'blog';
  onPageChange: (page: 'home' | 'blog') => void;
}

export function Navigation({ currentPage, onPageChange }: NavigationProps) {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-end">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => onPageChange('home')}
            className={`transition-colors duration-200 hover:text-blue-600 ${
              currentPage === 'home' ? 'text-blue-600' : 'text-muted-foreground'
            }`}
          >
            Home
          </button>
          <button
            onClick={() => onPageChange('blog')}
            className={`transition-colors duration-200 hover:text-blue-600 ${
              currentPage === 'blog' ? 'text-blue-600' : 'text-muted-foreground'
            }`}
          >
            Blog
          </button>
          
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-secondary hover:bg-accent transition-colors duration-200"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? (
              <Moon className="w-5 h-5" />
            ) : (
              <Sun className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-secondary hover:bg-accent transition-colors duration-200"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? (
              <Moon className="w-5 h-5" />
            ) : (
              <Sun className="w-5 h-5" />
            )}
          </button>
          
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-lg bg-secondary hover:bg-accent transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="px-6 py-4 space-y-4">
            <button
              onClick={() => {
                onPageChange('home');
                setIsMenuOpen(false);
              }}
              className={`block w-full text-left transition-colors duration-200 hover:text-blue-600 ${
                currentPage === 'home' ? 'text-blue-600' : 'text-muted-foreground'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => {
                onPageChange('blog');
                setIsMenuOpen(false);
              }}
              className={`block w-full text-left transition-colors duration-200 hover:text-blue-600 ${
                currentPage === 'blog' ? 'text-blue-600' : 'text-muted-foreground'
              }`}
            >
              Blog
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}