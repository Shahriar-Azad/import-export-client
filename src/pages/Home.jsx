import Banner from '../components/home/Banner';
import LatestProducts from '../components/home/LatestProducts';
import ExtraSection1 from '../components/home/ExtraSection1';
import ExtraSection2 from '../components/home/ExtraSection2';
import useTitle from '../hooks/useTitle';

const Home = () => {
  useTitle('Home');

  return (
    <div>
      <Banner />
      <LatestProducts />
      <ExtraSection1 />
      <ExtraSection2 />
    </div>
  );
};

export default Home;