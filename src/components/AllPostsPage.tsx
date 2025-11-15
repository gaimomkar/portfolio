import React, { useState, useMemo } from 'react';
// FIX: Import `useSearchParams` from `react-router-dom` to resolve the error.
import { Link, useSearchParams } from 'react-router-dom';
import { BLOGS } from '../constants';
import { Blog, BlogCategory } from '../types';

interface PostCardProps {
  blog: Blog;
}

const PostCard: React.FC<PostCardProps> = ({ blog }) => {
  // A simple way to get a comment count placeholder
  const commentCount = (blog.id.length % 5); // e.g., 0 to 4
  const commentText = commentCount === 1 ? '1 Comment' : `${commentCount} Comments`;
  if (commentCount === 0) {
      return (
          <article className="post-3177 post type-post status-publish format-standard has-post-thumbnail hentry category-business ast-grid-common-col ast-full-width ast-article-post ast-width-md-66 ast-featured-post ast-archive-post ast-separate-posts" id="post-3177" itemType="https://schema.org/CreativeWork" itemScope>
		<div className="ast-post-format- blog-layout-4 ast-article-inner ast-no-date-box">
	<div className="post-content ast-grid-common-col">
		<div className="ast-blog-featured-section post-thumb ast-blog-single-element"><div className="post-thumb-img-content post-thumb"><a href="https://kumaromkar.in/3177-2/" aria-label="Read: My&nbsp;First&nbsp;Industry&nbsp;Experience:&nbsp;Internship&nbsp;at&nbsp;DRDO"><img width="800" height="600" src="https://kumaromkar.in/wp-content/uploads/2025/07/DRDO_RCI_Internship-800x600.png" className="attachment-800x600 size-800x600" alt="" itemProp="&quot;image&quot;" decoding="async" /></a></div></div><h2 className="entry-title ast-blog-single-element" itemProp="headline"><a href="https://kumaromkar.in/3177-2/" rel="bookmark">My&nbsp;First&nbsp;Industry&nbsp;Experience:&nbsp;Internship&nbsp;at&nbsp;DRDO</a></h2>		<header className="entry-header ast-blog-single-element ast-blog-meta-container">
			<div className="entry-meta">			<span className="comments-link">
				<a href="https://kumaromkar.in/3177-2/#respond">Leave a Comment</a>			</span>

			 / <span className="ast-taxonomy-container cat-links default"><a href="https://kumaromkar.in/category/business/" rel="category tag">Business</a></span> / By <span className="posted-by vcard author" itemType="https://schema.org/Person" itemScope itemProp="author">			<a title="View all posts by Omkar" href="https://kumaromkar.in/author/admin/" rel="author" className="url fn n" itemProp="url">
				<span className="author-name" itemProp="name">
				Omkar			</span>
			</a>
		</span>

		</div>		</header>
		<p className="ast-blog-single-element ast-read-more-container read-more"> <a className="" href="https://kumaromkar.in/3177-2/"> <span className="screen-reader-text">My&nbsp;First&nbsp;Industry&nbsp;Experience:&nbsp;Internship&nbsp;at&nbsp;DRDO</span> Read More »</a></p>		<div className="entry-content clear" itemProp="text">
					</div>
	</div>
</div>
	</article>
      )
  }
  return(
      <article className="h-full bg-theme-bg-white shadow-md rounded-lg overflow-hidden border border-theme-border flex flex-col group">
        <div className="relative">
          <Link to={`/blog/${blog.id}`} className="block overflow-hidden">
            <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300" />
          </Link>
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <h2 className="text-xl font-bold font-heading text-theme-secondary mb-3 leading-tight group-hover:text-theme-primary transition-colors">
            <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
          </h2>
          <header className="text-xs text-theme-text-light mb-4">
            <div className="flex flex-wrap items-center gap-x-2">
              <span className="comments-link hover:text-theme-primary transition-colors">
                <Link to={`/blog/${blog.id}#comments`}>{commentText}</Link>
              </span>
              <span>/</span>
              <span className="cat-links hover:text-theme-primary transition-colors">
                <Link to={`/posts?category=${blog.category}`}>{blog.category}</Link>
              </span>
               <span>/</span>
               <span className="by-author">By Omkar</span>
            </div>
          </header>
          <div className="mt-auto">
            <Link to={`/blog/${blog.id}`} className="font-semibold text-theme-secondary text-sm group-hover:text-theme-primary transition-colors">
              Read More »
            </Link>
          </div>
        </div>
      </article>
  )
};

const AllPostsPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') as BlogCategory | null;
  
  const [activeCategory, setActiveCategory] = useState<BlogCategory | 'All'>(initialCategory || 'All');
  
  const categories: ('All' | BlogCategory)[] = ['All', ...Object.values(BlogCategory)];

  const filteredBlogs = useMemo(() => {
    if (activeCategory === 'All') {
      return BLOGS;
    }
    return BLOGS.filter(blog => blog.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="bg-theme-bg-main min-h-full animate-fadeIn">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-theme-secondary font-heading sm:text-5xl">
            My Posts
          </h1>
        </header>

        <div className="flex justify-center flex-wrap gap-3 mb-12" role="region" aria-label="Post Filters">
          {categories.map(category => (
            <Link
              key={category}
              to={category === 'All' ? '/posts' : `/posts?category=${category}`}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors duration-300 border ${
                activeCategory === category
                  ? 'bg-theme-primary text-white border-transparent shadow'
                  : 'bg-white text-theme-text-main border-theme-border hover:bg-theme-bg-subtle'
              }`}
              aria-current={activeCategory === category}
            >
              {category}
            </Link>
          ))}
        </div>

        <main>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map(blog => (
              <PostCard key={blog.id} blog={blog} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AllPostsPage;