import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { BLOGS } from '../constants';

const BlogDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const blog = BLOGS.find(b => b.id === id);

  if (!blog) {
    return (
       <div className="bg-theme-bg-main min-h-full py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-theme-bg-white rounded-xl shadow-lg p-8 sm:p-12 border border-theme-border text-center">
              <h2 className="text-3xl font-bold font-heading text-theme-secondary mb-4">Blog Post Not Found</h2>
              <p className="text-theme-text-main mb-6">Sorry, we couldn't find the post you were looking for.</p>
              <Link to="/blog" className="text-theme-primary hover:underline font-semibold mt-4 inline-block">
                &larr; Back to all blogs
              </Link>
            </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-theme-bg-main min-h-full py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <button
            onClick={() => navigate('/blog')}
            className="text-theme-secondary hover:text-theme-primary font-semibold transition-colors"
          >
            &larr; Back to Blogs
          </button>
        </div>
        
        <div className="bg-theme-bg-white rounded-xl shadow-lg p-8 sm:p-12 border border-theme-border">
          <article>
            <header className="mb-8 text-center">
              <p className="text-base text-theme-primary font-semibold tracking-wide uppercase">{blog.category}</p>
              <h1 className="text-4xl font-extrabold text-theme-secondary font-heading my-2 sm:text-5xl">
                {blog.title}
              </h1>
              <p className="text-theme-text-light">{blog.date}</p>
            </header>

            <img src={blog.image} alt={blog.title} className="w-full h-auto max-h-96 object-cover rounded-lg shadow-lg mb-8" />
            
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          </article>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPage;