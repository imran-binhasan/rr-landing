import Navbar          from "../components/layout/navbar.jsx";
import Hero            from "../components/sections/hero.jsx";
import FeatureSection  from "../components/sections/feature-section.jsx";
import FeatureFee      from "../components/sections/feature-fee.jsx";
import FeatureShowcase from "../components/sections/feature-showcase.jsx";
import CTA             from "../components/sections/cta.jsx";
import FAQ             from "../components/sections/faq.jsx";
import Footer          from "../components/layout/footer.jsx";
import ScrollTop       from "../components/ui/scroll-top.jsx";

const Home = () => (
  <div id="top">
    <Navbar />
    <Hero />
    <FeatureSection />
    <FeatureFee />
    <FeatureShowcase />
    <CTA />
    <FAQ />
    <Footer />
    <ScrollTop />
  </div>
);

export default Home;
