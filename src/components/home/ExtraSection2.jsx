import { FiUsers, FiPackage, FiGlobe, FiDollarSign } from 'react-icons/fi';

const ExtraSection2 = () => {
  const stats = [
    {
      icon: <FiUsers className="w-8 h-8" />,
      value: '10,000+',
      label: 'Active Users',
      bgColor: 'bg-blue-500'
    },
    {
      icon: <FiPackage className="w-8 h-8" />,
      value: '50,000+',
      label: 'Products Listed',
      bgColor: 'bg-purple-500'
    },
    {
      icon: <FiGlobe className="w-8 h-8" />,
      value: '150+',
      label: 'Countries',
      bgColor: 'bg-indigo-500'
    },
    {
      icon: <FiDollarSign className="w-8 h-8" />,
      value: '$10M+',
      label: 'Trade Volume',
      bgColor: 'bg-pink-500'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-blue-500 to-blue-900 text-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-white">
            Our Impact in Numbers
          </h2>
          <p className="text-blue-100 max-w-2xl mx-auto">
            Join thousands of businesses already using our platform
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300 border border-white/20 hover:scale-105"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 ${stat.bgColor} text-white rounded-full mb-4 shadow-lg`}>
                {stat.icon}
              </div>
              <div className="text-4xl font-bold mb-2 text-white">{stat.value}</div>
              <div className="text-blue-100 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExtraSection2;