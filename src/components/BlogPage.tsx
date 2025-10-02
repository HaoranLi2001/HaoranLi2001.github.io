import React from 'react';
import { FileText } from 'lucide-react';

export function BlogPage() {
  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-2xl mx-auto px-6">
        {/* Page Title */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Blog
          </h1>
        </div>

        {/* Placeholder Content */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-card border border-border rounded-lg p-12 text-center shadow-sm">
            <div className="mb-6">
              <FileText className="w-16 h-16 mx-auto text-muted-foreground" />
            </div>
            <h2 className="text-2xl font-normal mb-4 text-card-foreground">
              Coming Soon
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Blog posts coming soon! Stay tuned for articles on Machine Learning, 
              LLMs, and AI applications.
            </p>
          </div>
        </div>

        {/* Future Blog Post Preview (commented for reference) */}
        {/* 
        <div className="space-y-8">
          <article className="bg-card border border-border rounded-lg p-8 hover:shadow-md transition-shadow duration-200">
            <h2 className="text-2xl font-bold mb-3 text-card-foreground hover:text-blue-600 cursor-pointer">
              Understanding Large Language Models
            </h2>
            <div className="text-sm text-muted-foreground mb-4">
              Published on March 15, 2024
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              An introduction to the fundamental concepts behind LLMs and their applications 
              in solving real-world problems. This post explores the architecture, training 
              methods, and practical implementations...
            </p>
            <a href="#" className="text-blue-600 hover:underline font-medium">
              Read more →
            </a>
          </article>
        </div>
        */}
      </div>
    </div>
  );
}