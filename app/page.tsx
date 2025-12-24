import Delivery from "./components/Delivery/Delivery";
import Header from "./components/Header/header";
import Hero from "./components/HeroSection/HeroSection";
import ProductsUx from "./components/Products-ux/Products-ux";
import Calendy from "@/app/components/Calendy/Calendly";
import PackagesSection from "./components/Packages/Pacakages";
import CaseStudies from "./components/Case-studies/Case-studies";
import CaseStudyComponent from "./components/CaseStudiesCta/CaseStudiesCta";
import DesignShowcase from "./components/design-showcase/Design-showcase";
import Testimonials from "./components/Testimonials/Testimonials";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import PortfolioSection from "./components/PortfolioSection/PortfolioSection";
import Footer from "./components/Footer/Footer";
import LiveChatWidget from "./components/Livechat/LiveChat";

export default function Home() {
  return <div>
    <LiveChatWidget />
    <Header />
    <Hero />
    <Delivery />
    <ProductsUx />
    <PackagesSection />
    <CaseStudies />
    <CaseStudyComponent />
    <PortfolioSection />
    <DesignShowcase />
    <Testimonials />
    <HowItWorks />
    <Calendy />
    <Footer />
  </div>

}
