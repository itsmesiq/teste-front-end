import Header from "./components/Header/Header";
import ProductSection from "./components/ProductCarousel/ProductCarousel";
import Footer from "./components/Footer/Footer";
import Newsletter from "./components/Newsletter/Newsletter";
import MainBanner  from "./components/MainBanner/MainBanner";
import CategorySection from "./components/CategorySection/CategorySection";

import mainBanner from './data/mainBanner.json';

function App() {
  return (
    <main>
      <Header />
      <MainBanner {...mainBanner} />
      <CategorySection />
      <ProductSection />
      <Newsletter />
      <Footer />
    </main>
  );
}

export default App
