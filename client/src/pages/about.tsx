import { Link } from "wouter";
import { ArrowRight, Award, Heart, Leaf, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SEO, BreadcrumbStructuredData } from "@/components/seo";
import aboutImg from "@assets/generated_images/car_freshener_lifestyle_shot.png";
import craftImg from "@assets/generated_images/premium_car_fresheners_display.png";

const values = [
  {
    icon: Leaf,
    title: "Sustainability",
    description: "Eco-friendly materials and responsible sourcing practices",
  },
  {
    icon: Award,
    title: "Quality First",
    description: "Premium ingredients and rigorous quality control",
  },
  {
    icon: Heart,
    title: "Customer Love",
    description: "Dedicated to exceeding expectations with every product",
  },
  {
    icon: Users,
    title: "Community",
    description: "Building a family of fragrance enthusiasts",
  },
];

const stats = [
  { value: "50K+", label: "Happy Customers" },
  { value: "100+", label: "Unique Scents" },
  { value: "5+", label: "Years of Excellence" },
  { value: "45", label: "Days of Fragrance" },
];

export default function About() {
  return (
    <main className="pt-20 lg:pt-24" data-testid="page-about">
      <SEO 
        title="About Sugandh Sanduka - Our Story"
        description="Learn about Sugandh Sanduka, India's premium car freshener brand. Founded in 2019, we blend traditional aromatherapy with modern fragrance technology."
        keywords="about Sugandh Sanduka, car freshener company India, handcrafted car freshener"
        canonicalUrl="/about"
      />
      <BreadcrumbStructuredData items={[
        { name: "Home", url: "/" },
        { name: "About Us", url: "/about" }
      ]} />
      <section className="relative py-16 lg:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-medium text-sm tracking-wider uppercase">
                About Us
              </span>
              <h1 className="font-serif text-3xl lg:text-5xl font-bold mt-2 mb-6">
                Crafting Moments of
                <span className="text-primary"> Pure Bliss</span>
              </h1>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Welcome to Sugandh Sanduka, where we believe every journey
                  deserves to be exceptional. Founded in 2019, we set out with a
                  simple mission: to transform the mundane commute into a sensory
                  experience worth savoring.
                </p>
                <p>
                  Our name, which translates to &quot;Fragrance Box&quot; in Hindi, reflects
                  our commitment to delivering carefully curated scents that evoke
                  emotions, memories, and pure joy.
                </p>
                <p>
                  We blend traditional Indian aromatherapy wisdom with modern
                  fragrance technology, sourcing the finest ingredients from
                  around the world to create scents that are uniquely ours.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <img
                  src={aboutImg}
                  alt="Sugandh Sanduka workshop"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-card rounded-lg"
                data-testid={`stat-${index}`}
              >
                <div className="font-serif text-3xl lg:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold mb-4">
              Our Values
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center" data-testid={`value-${index}`}>
                <CardContent className="pt-8 pb-6">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <img
                  src={craftImg}
                  alt="Premium car fresheners"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-serif text-3xl lg:text-4xl font-bold mb-6">
                Our Quality Promise
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Every Sugandh Sanduka freshener is crafted with care using
                  premium fragrances that last up to 45 days. We use only the
                  finest essential oils and aromatic compounds.
                </p>
                <p>
                  Our fresheners are designed to hang elegantly from your
                  rearview mirror, slowly releasing their captivating scent
                  throughout your journey. Experience the difference quality makes.
                </p>
              </div>
              <Link href="/shop">
                <Button className="mt-8" data-testid="button-shop-products">
                  Explore Our Products
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
