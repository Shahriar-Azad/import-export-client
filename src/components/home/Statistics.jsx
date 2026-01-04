import { FiUsers, FiGlobe, FiDollarSign, FiPackage } from 'react-icons/fi';

const Statistics = () => {
  const statistics = [
    { number: '15K+', label: 'Active Traders' },
    { number: '150+', label: 'Countries' },
    { number: '$2.5B+', label: 'Trade Volume' },
    { number: '50K+', label: 'Products Listed' }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-xl text-blue-100">
            Trusted by thousands of businesses worldwide
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {statistics.map((stat, index) => (
            <div key={index} className="text-center">
              {/* <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                {stat.icon}
              </div> */}
              <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
              <div className="text-lg text-blue-100">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;