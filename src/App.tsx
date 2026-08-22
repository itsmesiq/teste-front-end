import Header from './components/Header/Header';
import MainBanner  from './components/MainBanner/MainBanner';
import CategorySection from './components/CategorySection/CategorySection';
import ProductSection from './components/ProductSection/ProductSection';
import BannersGrid from './components/BannersGrid/BannersGrid';
import Newsletter from './components/Newsletter/Newsletter';
import Footer from './components/Footer/Footer';

import mainBanner from './data/mainBanner.json';
import secondaryBanners from './data/secondaryBanners.json';

function App() {
  return (
    <main>
      <Header />
      <MainBanner banner={mainBanner} />
      <CategorySection />
      <ProductSection categories={true} />
      <BannersGrid banners={secondaryBanners} />
      <ProductSection categories={false} />
      <BannersGrid banners={secondaryBanners} />
      <Newsletter />
      <Footer />
    </main>
  );
}

export default App
