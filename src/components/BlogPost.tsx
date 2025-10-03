import React from 'react';
import { ArrowLeft, ExternalLink } from 'lucide-react';

interface BlogPostProps {
  postId: string | null;
  onBack: () => void;
}

export function BlogPost({ postId, onBack }: BlogPostProps) {
  // Blog post content
  const getBlogContent = (id: string | null) => {
    switch (id) {
      case 'bitter-lesson':
        return {
          title: 'Search and Learning',
          date: 'October 3, 2025',
          lastModified: 'October 3, 2025',
          content: (
            <div className="prose prose-lg max-w-none leading-relaxed tracking-wide">
              {/* References */}
              <div className="mb-8 p-6 bg-secondary rounded-lg">
                <h3 className="text-lg font-bold mb-4 text-foreground">References</h3>
                <div className="space-y-3">
                  <div>
                    <strong>The bitter lesson:</strong>{' '}
                    <a 
                      href="https://www.cs.utexas.edu/~eunsol/courses/data/bitter_lesson.pdf" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline inline-flex items-center gap-1"
                    >
                      https://www.cs.utexas.edu/~eunsol/courses/data/bitter_lesson.pdf
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                  <div>
                    <strong>Richard Sutton – Father of RL thinks LLMs are a dead end:</strong>{' '}
                    <a 
                      href="https://www.youtube.com/watch?v=21EYKqUsPfg" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline inline-flex items-center gap-1"
                    >
                      https://www.youtube.com/watch?v=21EYKqUsPfg
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="space-y-10">
                {/* Point 1 */}
                <section>
                  <h3 className="text-xl font-bold mb-4 text-foreground">
                    1. The bitter lesson: "General methods that leverage computation are ultimately the most effective, and by a large margin."
                  </h3>
                  
                  <p className="mb-6 text-muted-foreground leading-relaxed">
                    <strong>Trend:</strong> Leverage more computation, less human knowledge
                  </p>

                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p><strong>In computer chess:</strong> search-based &gt; strategies that leveraged human understanding</p>
                    <p><strong>In Go:</strong> search &amp; learning-based approach &gt; strategies that leveraged human understanding, AlphaZero (learning from itself) &gt; AlphaGo (learning from human games)</p>
                    <p><strong>In speech recognition:</strong> Deep learning methods &gt; HMM &gt; Human knowledge methods</p>
                    <p><strong>In computer vision:</strong> Deep learning methods &gt; detection of edges, cylinders, SIFT features……</p>
                  </div>
                </section>

                {/* Point 2 */}
                <section>
                  <h3 className="text-xl font-bold mb-4 text-foreground">
                    2. "We have to learn the bitter lesson that building in how we think we think does not work in the long run"
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    <strong>Historical observations:</strong> Try to build knowledge into agents → help in short term → in the long run it plateaus and even inhibits further progress → breakthrough progress arrives by an opposing approach based on scaling computation by search &amp; learning.
                  </p>
                </section>

                {/* Point 3 */}
                <section>
                  <h3 className="text-xl font-bold mb-4 text-foreground">
                    3. Two points should be learnt from the bitter lesson:
                  </h3>
                  
                  <div className="space-y-5 text-muted-foreground leading-relaxed">
                    <p>
                      <strong>The great power of general purpose methods,</strong> of methods continue to scale with increased computation → search &amp; learning
                    </p>
                    <p>
                      <strong>"The contents of minds are tremendously, irredeemably complex. The search for them should be by our methods, not by us".</strong>
                    </p>
                  </div>
                </section>
              </div>
            </div>
          )
        };
      default:
        return {
          title: 'Blog Post Not Found',
          date: '',
          lastModified: '',
          content: <p>The requested blog post could not be found.</p>
        };
    }
  };

  const post = getBlogContent(postId);

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-3xl mx-auto px-6">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-muted-foreground hover:text-blue-600 transition-colors duration-200 mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </button>

        {/* Blog Post Header */}
        <header className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {post.title}
          </h1>
          {post.date && (
            <div className="text-muted-foreground space-y-1">
              <div>Published on {post.date}</div>
              {post.lastModified && (
                <div>Last modified: {post.lastModified}</div>
              )}
            </div>
          )}
        </header>

        {/* Blog Post Content */}
        <article className="text-foreground leading-relaxed">
          {post.content}
        </article>
      </div>
    </div>
  );
}