import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { BLOGS } from '../constants';
import { Blog, BlogCategory } from '../types';

// Icon Components
const CalendarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5 inline-block text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
);

const TagIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5 inline-block text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 5h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zm0 5h14" />
    </svg>
);

const SearchIcon = () => (
    <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
);

const ArrowLeftIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
);
const ArrowRightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
);


interface BlogCardProps {
  blog: Blog;
  className?: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog, className = '' }) => (
  <div className={`bg-theme-bg-white rounded-lg shadow-md overflow-hidden flex flex-col border border-theme-border ${className}`}>
    <Link to={`/blog/${blog.id}`} className="block overflow-hidden">
      <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-300" />
    </Link>
    <div className="p-6 flex-grow flex flex-col">
      <div className="flex-grow">
          <h4 className="text-lg font-bold text-theme-secondary font-heading mb-3 h-14 overflow-hidden">
            <Link to={`/blog/${blog.id}`} className="hover:text-theme-primary transition-colors">
              {blog.title}
            </Link>
          </h4>
          <div className="flex flex-wrap text-sm text-gray-500 mb-4 space-x-4">
              <span className="flex items-center"><CalendarIcon />{blog.date}</span>
              <span className="flex items-center"><TagIcon />{blog.category}</span>
          </div>
      </div>
      <div className="mt-auto">
        <Link to={`/blog/${blog.id}`} className="font-semibold text-theme-secondary hover:text-theme-primary transition-colors text-sm">
          Read More &rarr;
        </Link>
      </div>
    </div>
  </div>
);

const BlogPage: React.FC = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const categoryFromUrl = searchParams.get('category');
    const carouselRef = useRef<HTMLDivElement>(null);

    const getInitialTab = (): BlogCategory | 'All' => {
        if (categoryFromUrl && Object.values(BlogCategory).includes(categoryFromUrl as BlogCategory)) {
            return categoryFromUrl as BlogCategory;
        }
        return 'All';
    };
    
    const [activeTab, setActiveTab] = useState<BlogCategory | 'All'>(getInitialTab());
    const [searchTerm, setSearchTerm] = useState('');
    const [newsletterEmail, setNewsletterEmail] = useState('');
    const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    useEffect(() => {
        setActiveTab(getInitialTab());
    }, [categoryFromUrl]);

    const recentBlogs = useMemo(() => BLOGS.slice(0, 6), []);
    
    const blogsInActiveTab = useMemo(() => {
        if (activeTab === 'All') {
            return BLOGS;
        }
        return BLOGS.filter(blog => blog.category === activeTab);
    }, [activeTab]);
    
    const searchResults = useMemo(() => {
        if (!searchTerm.trim()) return [];
        const lowercasedTerm = searchTerm.toLowerCase();
        return BLOGS.filter(blog => 
            blog.title.toLowerCase().includes(lowercasedTerm) || 
            blog.excerpt.toLowerCase().includes(lowercasedTerm)
        );
    }, [searchTerm]);

    const handleTabClick = (category: BlogCategory | 'All') => {
        setActiveTab(category);
        if (category === 'All') {
            searchParams.delete('category');
        } else {
            searchParams.set('category', category);
        }
        setSearchParams(searchParams);
    };
    
    const scrollCarousel = (direction: 'left' | 'right') => {
        if (carouselRef.current) {
            const scrollAmount = carouselRef.current.offsetWidth;
            carouselRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
        }
    };
    
    const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setNewsletterStatus('submitting');
        // This is a mock submission. In a real app, you would make an API call.
        setTimeout(() => {
            if (newsletterEmail && /^\S+@\S+\.\S+$/.test(newsletterEmail)) {
                setNewsletterStatus('success');
                setNewsletterEmail('');
                setTimeout(() => setNewsletterStatus('idle'), 5000);
            } else {
                setNewsletterStatus('error');
            }
        }, 1000);
    };

    const tabs: (BlogCategory | 'All')[] = ['All', ...Object.values(BlogCategory)];

  return (
    <div className="bg-theme-bg-main min-h-full animate-fadeIn pt-12">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-theme-secondary font-heading sm:text-5xl">
            Blog
          </h1>
        </div>

        {/* Recent Posts Section */}
        <section className="mb-16">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-theme-secondary font-heading">Recent Posts</h2>
            <Link to="/posts" className="font-semibold text-theme-secondary hover:text-theme-primary transition-colors flex items-center gap-2">
              Read All <span>&rarr;</span>
            </Link>
          </div>
          <div className="relative">
            <div ref={carouselRef} className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide -mx-4 px-4 py-4">
              {recentBlogs.map((blog) => (
                <div key={blog.id} className="snap-start shrink-0 w-full sm:w-1/2 lg:w-1/3 px-4">
                  <BlogCard blog={blog} className="h-full"/>
                </div>
              ))}
            </div>
             <button onClick={() => scrollCarousel('left')} className="absolute top-1/2 left-0 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition-opacity opacity-75 hover:opacity-100 z-10 lg:-left-4">
                <ArrowLeftIcon />
            </button>
            <button onClick={() => scrollCarousel('right')} className="absolute top-1/2 right-0 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition-opacity opacity-75 hover:opacity-100 z-10 lg:-right-4">
                <ArrowRightIcon />
            </button>
          </div>
        </section>

        <hr className="border-t-2 border-theme-border my-16" />

        {/* Categories Section */}
        <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-theme-secondary font-heading mb-8">Categories</h2>
            <div className="border-b border-gray-200">
                <nav className="-mb-px flex justify-center space-x-4 sm:space-x-8" aria-label="Tabs">
                    {tabs.map((category) => (
                        <button
                            key={category}
                            onClick={() => handleTabClick(category)}
                            className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-lg transition-colors duration-300 ${
                                activeTab === category
                                    ? 'border-theme-primary text-theme-primary'
                                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </nav>
            </div>
            <div className="mt-8">
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {blogsInActiveTab.map(blog => (
                    <BlogCard key={blog.id} blog={blog} />
                  ))}
                </div>
            </div>
        </section>

        <hr className="border-t-2 border-theme-border my-16" />

        {/* Search & Newsletter Section */}
        <section className="bg-slate-50 rounded-lg p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Search */}
                <div>
                    <h3 className="text-xl font-bold font-heading text-theme-secondary mb-4">Search</h3>
                    <form onSubmit={e => e.preventDefault()} className="flex items-center gap-2">
                        <input 
                            type="search" 
                            placeholder="Search articles..."
                            value={searchTerm}
                            onChange={e => setSearchTerm(e.target.value)}
                            className="w-full px-4 py-2 rounded-md bg-white border-2 border-theme-border focus:border-theme-primary focus:ring-0 transition-all duration-300"
                        />
                        <button type="submit" className="bg-theme-secondary text-white p-2.5 rounded-md hover:bg-opacity-90 transition-colors">
                           <SearchIcon />
                        </button>
                    </form>
                    {searchTerm && (
                        <div className="mt-6">
                            <h4 className="font-bold text-theme-secondary mb-4">{searchResults.length} results found for "{searchTerm}"</h4>
                            <div className="space-y-4">
                                {searchResults.length > 0 ? (
                                    searchResults.map(blog => (
                                        <Link key={blog.id} to={`/blog/${blog.id}`} className="block p-4 bg-white rounded-md hover:bg-theme-bg-subtle border border-theme-border">
                                            <p className="font-semibold text-theme-secondary">{blog.title}</p>
                                            <p className="text-sm text-theme-text-light">{blog.excerpt}</p>
                                        </Link>
                                    ))
                                ) : (
                                    <p className="text-theme-text-light">No articles found matching your search.</p>
                                )}
                            </div>
                        </div>
                    )}
                </div>

                {/* Newsletter */}
                <div>
                    <h3 className="text-xl font-bold font-heading text-theme-secondary mb-2">Join My Community Newsletter</h3>
                    <p className="text-theme-text-main text-sm mb-4">Subscribe now to get thoughtful insights, practical tips, and curated resources delivered straight to you.</p>
                    <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
                         <input 
                            type="email" 
                            placeholder="Enter Email Address"
                            value={newsletterEmail}
                            onChange={e => setNewsletterEmail(e.target.value)}
                            required
                            className="w-full px-4 py-2 rounded-md bg-white border-2 border-theme-border focus:border-theme-primary focus:ring-0 transition-all duration-300"
                        />
                        <button type="submit" disabled={newsletterStatus === 'submitting'} className="w-full sm:w-auto bg-theme-primary text-white font-semibold px-4 py-2 rounded-md hover:bg-theme-primary-hover transition-colors duration-300 disabled:bg-slate-400">
                            {newsletterStatus === 'submitting' ? 'Subscribing...' : 'Subscribe'}
                        </button>
                    </form>
                    {newsletterStatus === 'success' && <p className="text-green-600 text-sm mt-2">Success! Thanks for subscribing.</p>}
                    {newsletterStatus === 'error' && <p className="text-red-600 text-sm mt-2">Please enter a valid email.</p>}
                </div>
            </div>
        </section>

      </div>
    </div>
  );
};

export default BlogPage;