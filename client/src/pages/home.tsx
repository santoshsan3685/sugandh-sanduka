import { HeroSection } from "@/components/hero-section";
import { FeaturedProducts } from "@/components/featured-products";
import { CollectionsSection } from "@/components/collections-section";
import { FeaturesSection } from "@/components/features-section";
import { AboutSection } from "@/components/about-section";
import { NewsletterSection } from "@/components/newsletter-section";

export default function Home() {
  return (
    <main data-testid="page-home">
      <HeroSection />
      <FeaturedProducts />
      <CollectionsSection />
      <FeaturesSection />
      <AboutSection />
      <NewsletterSection />
    </main>
  );
}
