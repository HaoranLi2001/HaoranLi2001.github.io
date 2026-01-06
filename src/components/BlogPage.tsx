import React from 'react';

interface BlogPageProps {
  onBlogPostClick: (postId: string) => void;
}

export function BlogPage({ onBlogPostClick }: BlogPageProps) {
  const blogPosts = [
    {
      id: 'bitter-lesson',
      title: 'Search and Learning',
      description: 'Notes and Quotes on "The Bitter Lesson" by Sutton',
      date: 'October 3, 2025'
    }
    {
      id: 'LLM',
      title: 'LLMQAQSOSZZZZZ',
      description: 'SOS',
      date: 'January 6, 2026'
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-2xl mx-auto px-6">
        {/* Page Title */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Blog
          </h1>
        </div>

        {/* Blog Posts */}
        <div className="space-y-8">
          {blogPosts.map((post) => (
            <article 
              key={post.id}
              className="bg-card border border-border rounded-lg p-8 hover:shadow-md transition-all duration-200 cursor-pointer hover:border-blue-600/30"
              onClick={() => onBlogPostClick(post.id)}
            >
              <h2 className="text-2xl font-bold mb-3 text-card-foreground hover:text-blue-600 transition-colors duration-200">
                {post.title}
              </h2>
              <div className="text-sm text-muted-foreground mb-4">
                Published on {post.date}
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {post.description}
              </p>
              <div className="text-blue-600 hover:underline font-medium">
                Read more →
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}