import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import aboutImg from "@assets/generated_images/handcrafted_car_freshener_workshop.png";

export function AboutSection() {
  return (
    <section
      className="py-16 lg:py-24 bg-card"
      data-testid="section-about"
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden">
              <img
                src={aboutImg}
                alt="About Sugandh Sanduka"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-lg hidden lg:block">
              <div className="text-4xl font-bold">5+</div>
              <div className="text-sm opacity-90">Years of Excellence</div>
            </div>
          </div>

          <div>
            <span className="text-primary font-medium text-sm tracking-wider uppercase">
              Our Story
            </span>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold mt-2 mb-6">
              Crafting Scents That
              <span className="text-primary"> Move You</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Sugandh Sanduka was born from a simple idea: every drive should
                be an experience worth savoring. What started as a passion
                project in a small workshop has grown into India&apos;s most loved
                car freshener brand.
              </p>
              <p>
                We blend traditional Indian aromatherapy wisdom with modern
                fragrance technology to create scents that don&apos;t just mask
                odors—they transform your entire driving experience.
              </p>
              <p>
                Each freshener is handcrafted with care, using premium
                ingredients sourced from across the globe. From the calming
                lavender fields of Provence to the exotic sandalwood forests of
                Karnataka, we bring the world&apos;s finest fragrances to your car.
              </p>
            </div>
            <Link href="/about">
              <Button className="mt-8" data-testid="button-learn-more">
                Learn More About Us
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
