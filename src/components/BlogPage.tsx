
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { BLOGS } from '../constants';
import { Blog, BlogCategory } from '../types';

interface BlogCardProps {
  blog: Blog;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 flex flex-col">
    <Link to={`/blog/${blog.id}`}>
      <img src={blog.image} alt={blog.title} className="w-full h-56 object-cover" />
    </Link>
    <div className="p-6 flex-grow flex flex-col">
      <p className="text-sm text-sky-600 font-semibold mb-2">{blog.category} &bull; {blog.date}</p>
      <h3 className="text-xl font-bold text-slate-800 mb-3 flex-grow">
        <Link to={`/blog/${blog.id}`} className="hover:text-sky-700 transition-colors">
          {blog.title}
        </Link>
      </h3>
      <p className="text-slate-600 mb-4">{blog.excerpt}</p>
      <div className="mt-auto">
        <Link to={`/blog/${blog.id}`} className="font-semibold text-sky-600 hover:text-sky-800 transition-colors">
          Read More &rarr;
        </Link>
      </div>
    </div>
  </div>
);

const BlogPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<BlogCategory | 'All'>('All');
  
  const categories: ('All' | BlogCategory)[] = ['All', ...Object.values(BlogCategory)];

  const filteredBlogs = useMemo(() => {
    if (activeCategory === 'All') {
      return BLOGS;
    }
    return BLOGS.filter(blog => blog.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="bg-slate-50 min-h-full">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Recent Blogs
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Insights on Tech, Product, Management, and more.
          </p>
        </div>

        <div className="mt-12 mb-12 flex justify-center flex-wrap gap-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-colors duration-300 ${
                activeCategory === category
                  ? 'bg-sky-600 text-white shadow'
                  : 'bg-white text-slate-700 hover:bg-slate-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.map(blog => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
