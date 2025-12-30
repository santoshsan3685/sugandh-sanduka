import { HeroSection } from "@/components/hero-section";
import { FeaturedProducts } from "@/components/featured-products";
import { CollectionsSection } from "@/components/collections-section";
import { FeaturesSection } from "@/components/features-section";
import { AboutSection } from "@/components/about-section";
import { NewsletterSection } from "@/components/newsletter-section";
import { SEO, OrganizationStructuredData } from "@/components/seo";

export default function Home() {
  return (
    <main data-testid="page-home">
      <SEO 
        title="Premium Car Air Fresheners India | 45-Day Fragrance"
        description="Sugandh Sanduka offers handcrafted premium car air fresheners in India. Long-lasting 45-day fragrances, elegant designs. Order via WhatsApp. Free shipping."
        keywords="car freshener, car air freshener, premium car freshener, car perfume India, long lasting freshener, handcrafted car freshener"
        canonicalUrl="/"
      />
      <OrganizationStructuredData />
      <HeroSection />
      <FeaturedProducts />
      <CollectionsSection />
      <FeaturesSection />
      <AboutSection />
      <NewsletterSection />
    </main>
  );
}
