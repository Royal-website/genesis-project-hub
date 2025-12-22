import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { ServiceCards } from "@/components/home/ServiceCards";
import { AboutSection } from "@/components/home/AboutSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ServiceCards />
      <AboutSection />
    </Layout>
  );
};

export default Index;