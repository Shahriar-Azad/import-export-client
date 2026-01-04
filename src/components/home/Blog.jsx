import { FiCalendar, FiUser, FiArrowRight } from 'react-icons/fi';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Top 10 Export Markets to Watch in 2024',
      excerpt: 'Discover the emerging markets that present the best opportunities for exporters looking to expand their global reach.',
      author: 'Sarah Johnson',
      date: 'January 15, 2024',
      category: 'Market Trends',
      image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'Understanding International Trade Regulations',
      excerpt: 'A comprehensive guide to navigating customs, tariffs, and compliance requirements in international trade.',
      author: 'Michael Chen',
      date: 'January 10, 2024',
      category: 'Regulations',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800',
      readTime: '8 min read'
    },
    {
      id: 3,
      title: 'How to Find Reliable Import Partners',
      excerpt: 'Learn the essential strategies for identifying and vetting trustworthy import partners for your business.',
      author: 'Emma Davis',
      date: 'January 5, 2024',
      category: 'Business Tips',
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800',
      readTime: '6 min read'
    },
    {
      id: 4,
      title: 'Digital Transformation in Global Trade',
      excerpt: 'Explore how technology is revolutionizing import-export operations and creating new opportunities.',
      author: 'David Wilson',
      date: 'December 28, 2023',
      category: 'Technology',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
      readTime: '7 min read'
    },
    {
      id: 5,
      title: 'Sustainable Practices in International Shipping',
      excerpt: 'Learn about eco-friendly shipping methods and how to reduce your carbon footprint in global trade.',
      author: 'Lisa Anderson',
      date: 'December 20, 2023',
      category: 'Sustainability',
      image: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=800',
      readTime: '5 min read'
    },
    {
      id: 6,
      title: 'Managing Currency Risk in Export Business',
      excerpt: 'Strategies to protect your business from foreign exchange fluctuations and minimize financial risk.',
      author: 'Robert Martinez',
      date: 'December 15, 2023',
      category: 'Finance',
      image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800',
      readTime: '6 min read'
    }
  ];

  const categories = ['All', 'Market Trends', 'Regulations', 'Business Tips', 'Technology', 'Sustainability', 'Finance'];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container-custom py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Import Export Insights
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Stay updated with the latest trends, tips, and insights in international trade
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className="px-6 py-2 rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-colors shadow-md"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden mb-12">
          <div className="grid md:grid-cols-2">
            <div className="h-64 md:h-auto">
              <img
                src={blogPosts[0].image}
                alt={blogPosts[0].title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 flex flex-col justify-center">
              <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium mb-4 w-fit">
                Featured
              </span>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {blogPosts[0].title}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {blogPosts[0].excerpt}
              </p>
              <div className="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400 mb-6">
                <div className="flex items-center gap-2">
                  <FiUser size={16} />
                  <span>{blogPosts[0].author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiCalendar size={16} />
                  <span>{blogPosts[0].date}</span>
                </div>
                <span>{blogPosts[0].readTime}</span>
              </div>
              <button className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:gap-3 transition-all font-medium">
                Read More <FiArrowRight />
              </button>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post) => (
            <div
              key={post.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 rounded-full text-xs font-medium mb-3">
                  {post.category}
                </span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <div className="flex items-center gap-2">
                    <FiUser size={14} />
                    <span>{post.author}</span>
                  </div>
                  <span>{post.readTime}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <FiCalendar size={14} />
                  <span>{post.date}</span>
                </div>
                <button className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:gap-3 transition-all font-medium">
                  Read Article <FiArrowRight />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Get the latest insights on international trade delivered directly to your inbox. 
            Stay ahead of market trends and industry news.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;