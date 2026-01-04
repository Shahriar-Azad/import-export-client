import { FiGlobe, FiTrendingUp, FiShield, FiUsers } from 'react-icons/fi';

const Highlights = () => {
  const highlights = [
    {
      icon: <FiGlobe size={32} />,
      title: 'Global Marketplace',
      description: 'Connect with verified importers and exporters from over 150 countries worldwide',
      color: 'blue'
    },
    {
      icon: <FiShield size={32} />,
      title: 'Secure Transactions',
      description: 'Advanced security measures and verified business profiles ensure safe trading',
      color: 'green'
    },
    {
      icon: <FiTrendingUp size={32} />,
      title: 'Market Insights',
      description: 'Access real-time trade data, trends, and analytics to make informed decisions',
      color: 'purple'
    },
    {
      icon: <FiUsers size={32} />,
      title: 'Trusted Community',
      description: 'Join thousands of verified traders and build lasting business relationships',
      color: 'orange'
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400',
      green: 'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400',
      purple: 'bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400',
      orange: 'bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-400'
    };
    return colors[color] || colors.blue;
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose Import Export Hub?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Everything you need to succeed in international trade
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className={`w-16 h-16 ${getColorClasses(highlight.color)} rounded-lg flex items-center justify-center mb-4`}>
                {highlight.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {highlight.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;