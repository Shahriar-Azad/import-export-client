import { FiGlobe, FiTrendingUp, FiShield, FiUsers } from 'react-icons/fi';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container-custom py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Import Export Hub
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Your trusted platform for connecting global importers and exporters, 
            facilitating seamless international trade and business growth.
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Our Mission
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
            At Import Export Hub, we strive to simplify international trade by providing 
            a secure and efficient platform that connects businesses worldwide. Our mission 
            is to empower exporters and importers with the tools they need to expand their 
            reach, discover new opportunities, and build lasting partnerships across borders.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <FiGlobe className="text-blue-600 dark:text-blue-400" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Global Reach
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Connect with businesses from over 150 countries worldwide
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <FiTrendingUp className="text-green-600 dark:text-green-400" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Business Growth
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Expand your market and increase your trade opportunities
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center">
            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <FiShield className="text-purple-600 dark:text-purple-400" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Secure Platform
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Advanced security measures to protect your business data
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center">
            <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <FiUsers className="text-orange-600 dark:text-orange-400" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Trusted Community
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Join thousands of verified importers and exporters
            </p>
          </div>
        </div>

        {/* Story Section */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Our Story
          </h2>
          <div className="space-y-4 text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
            <p>
              Founded in 2020, Import Export Hub was born from the vision of making 
              international trade accessible to businesses of all sizes. We recognized 
              the challenges that small and medium enterprises face when trying to 
              enter the global market, and we set out to create a solution.
            </p>
            <p>
              Today, we serve thousands of businesses across the globe, facilitating 
              millions in trade value annually. Our platform has become a trusted 
              marketplace where quality meets reliability, and where businesses can 
              confidently expand their international presence.
            </p>
            <p>
              As we continue to grow, our commitment remains the same: to provide 
              the best possible experience for our users and to foster a community 
              of successful international traders.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg p-8 text-white">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Transparency</h3>
              <p className="text-blue-100">
                We believe in open and honest communication with our users
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-blue-100">
                Continuously improving our platform with cutting-edge technology
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Integrity</h3>
              <p className="text-blue-100">
                Maintaining the highest standards of ethics in all our operations
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;