import Banner from '../components/home/Banner';
import LatestProducts from '../components/home/LatestProducts';
import ExtraSection1 from '../components/home/ExtraSection1';
import ExtraSection2 from '../components/home/ExtraSection2';
import useTitle from '../hooks/useTitle';
import HeroSection from '../components/home/HeroSection';
import Highlights from '../components/home/Highlights';
import Statistics from '../components/home/Statistics';
import Testimonials from '../components/home/Testimonials';
import LatestBlogs from '../components/home/LatestBlogs';
import Newsletter from '../components/home/Newsletter';
import FAQ from '../components/home/FAQ';
import CTA from '../components/home/CTA';

const Home = () => {
  useTitle('Home');

  return (
    <div>

      <Banner />
             {/* <HeroSection /> */}
      <LatestProducts />
      <ExtraSection1 />
      <ExtraSection2 />
     
      <Highlights />
      <Statistics />
      <Testimonials />
      <LatestBlogs />
      <Newsletter />
      <FAQ />
      <CTA />
    </div>
  );
};

export default Home;