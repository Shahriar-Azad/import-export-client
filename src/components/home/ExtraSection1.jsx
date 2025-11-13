import { FiGlobe, FiShield, FiZap, FiTrendingUp } from 'react-icons/fi';

const ExtraSection1 = () => {
  const features = [
    {
      icon: <FiGlobe className="w-8 h-8" />,
      title: 'Global Reach',
      description: 'Connect with exporters and importers from over 150 countries worldwide'
    },
    {
      icon: <FiShield className="w-8 h-8" />,
      title: 'Secure Transactions',
      description: 'Your data and transactions are protected with industry-leading security'
    },
    {
      icon: <FiZap className="w-8 h-8" />,
      title: 'Instant Import',
      description: 'Import products with just one click and manage your inventory efficiently'
    },
    {
      icon: <FiTrendingUp className="w-8 h-8" />,
      title: 'Market Insights',
      description: 'Get real-time data and insights to make informed business decisions'
    }
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose Us?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We provide the best platform for seamless import-export operations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card p-6 text-center hover:transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExtraSection1;