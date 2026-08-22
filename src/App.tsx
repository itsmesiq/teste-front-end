import Header from './components/Header/Header';
import MainBanner  from './components/MainBanner/MainBanner';
import CategorySection from './components/CategorySection/CategorySection';
import ProductSection from './components/ProductSection/ProductSection';
import Newsletter from './components/Newsletter/Newsletter';
import Footer from './components/Footer/Footer';

import mainBanner from './data/mainBanner.json';

function App() {
  return (
    <main>
      <Header />
      <MainBanner {...mainBanner} />
      <CategorySection />
      <ProductSection categories={true} />
      <ProductSection categories={false} />
      <Newsletter />
      <Footer />
    </main>
  );
}

export default App
