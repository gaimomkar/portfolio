
import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { BLOGS } from '../constants';

const BlogDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const blog = BLOGS.find(b => b.id === id);

  if (!blog) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold">Blog Post Not Found</h2>
        <Link to="/blog" className="text-sky-600 hover:underline mt-4 inline-block">
          &larr; Back to all blogs
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-full">
      <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
        <div className="mb-8">
          <button
            onClick={() => navigate('/blog')}
            className="text-sky-600 hover:text-sky-800 font-semibold transition-colors"
          >
            &larr; Back to Blogs
          </button>
        </div>
        
        <article>
          <header className="mb-8">
            <p className="text-base text-sky-600 font-semibold tracking-wide uppercase">{blog.category}</p>
            <h1 className="text-4xl font-extrabold text-slate-900 my-2 sm:text-5xl">
              {blog.title}
            </h1>
            <p className="text-slate-500">{blog.date}</p>
          </header>

          <img src={blog.image} alt={blog.title} className="w-full h-auto max-h-96 object-cover rounded-lg shadow-lg mb-8" />
          
          <div 
            className="prose prose-lg prose-sky max-w-none text-slate-600"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </article>
      </div>
    </div>
  );
};

export default BlogDetailPage;
