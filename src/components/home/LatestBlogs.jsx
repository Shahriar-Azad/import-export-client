import { Link } from 'react-router-dom';
import { FiArrowRight, FiCalendar } from 'react-icons/fi';

const LatestBlogs = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Top 5 Export Markets to Watch in 2026',
      excerpt: 'Discover emerging markets with high growth potential for exporters.',
      author: 'David Williams',
      date: 'January 2, 2026',
      image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800',
      category: 'Market Trends'
    },
    {
      id: 2,
      title: 'Understanding Import Regulations Made Easy',
      excerpt: 'A comprehensive guide to navigating international trade compliance.',
      author: 'Emma Davis',
      date: 'December 28, 2025',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800',
      category: 'Regulations'
    },
    {
      id: 3,
      title: 'How Technology is Reshaping Global Trade',
      excerpt: 'Explore how digital platforms are revolutionizing import-export.',
      author: 'Robert Martinez',
      date: 'December 25, 2025',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
      category: 'Technology'
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="container-custom">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Latest Insights
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Stay updated with trade news and tips
            </p>
          </div>
          <Link
            to="/blog"
            className="hidden md:flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:gap-3 transition-all font-medium"
          >
            View All <FiArrowRight />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-gray-50 dark:bg-gray-900 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full text-xs font-medium mb-3">
                  {post.category}
                </span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                  <span>{post.author}</span>
                  <div className="flex items-center gap-2">
                    <FiCalendar size={14} />
                    <span>{post.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Link
          to="/blog"
          className="md:hidden flex items-center justify-center gap-2 text-blue-600 dark:text-blue-400 hover:gap-3 transition-all font-medium mt-8"
        >
          View All Articles <FiArrowRight />
        </Link>
      </div>
    </section>
  );
};

export default LatestBlogs;