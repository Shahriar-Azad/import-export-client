import { FiStar } from 'react-icons/fi';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      company: 'Global Textiles Inc.',
      role: 'CEO',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      rating: 5,
      text: 'Import Export Hub has transformed how we do international business. We\'ve connected with reliable partners across 3 continents and increased our export volume by 150%.'
    },
    {
      id: 2,
      name: 'Michael Chen',
      company: 'Tech Components Ltd.',
      role: 'Import Manager',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      rating: 5,
      text: 'The platform\'s verification system gives us confidence in every transaction. We\'ve found quality suppliers and the process is incredibly smooth and transparent.'
    },
    {
      id: 3,
      name: 'Priya Sharma',
      company: 'Spice Trade International',
      role: 'Founder',
      image: 'https://randomuser.me/api/portraits/women/68.jpg',
      rating: 5,
      text: 'Outstanding platform! The market insights and analytics have helped us identify new opportunities. Our business has grown by 200% in just one year.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Real stories from successful traders
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FiStar key={i} className="text-yellow-500 fill-current" size={20} />
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-6 italic">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;