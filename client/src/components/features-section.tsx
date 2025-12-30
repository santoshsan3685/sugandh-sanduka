import { Truck, Clock, Sparkles, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Sparkles,
    title: "Premium Fragrances",
    description:
      "Carefully crafted scents using the finest natural and synthetic essences",
  },
  {
    icon: Clock,
    title: "Long-Lasting Scent",
    description:
      "Each freshener delivers fragrance for up to 45 days of fresh driving",
  },
  {
    icon: Truck,
    title: "Free Shipping",
    description:
      "Complimentary delivery on all orders over $50 across India",
  },
  {
    icon: Shield,
    title: "Quality Guaranteed",
    description:
      "100% satisfaction guarantee or your money back, no questions asked",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-16 lg:py-24" data-testid="section-features">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold mb-4">
            Why Choose Sugandh Sanduka
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We&apos;re committed to transforming every journey into a sensory experience
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="text-center" data-testid={`card-feature-${index}`}>
              <CardContent className="pt-8 pb-6">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
