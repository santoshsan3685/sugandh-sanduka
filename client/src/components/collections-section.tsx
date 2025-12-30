import { useQuery } from "@tanstack/react-query";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import type { Collection } from "@shared/schema";

import freshImg from "@assets/generated_images/fresh_ocean_blue_freshener.png";
import floralImg from "@assets/generated_images/floral_lavender_freshener.png";
import premiumImg from "@assets/generated_images/premium_sandalwood_freshener.png";

const collectionImages: Record<string, string> = {
  fresh: freshImg,
  floral: floralImg,
  premium: premiumImg,
};

export function CollectionsSection() {
  const { data: collections, isLoading } = useQuery<Collection[]>({
    queryKey: ["/api/collections"],
  });

  const displayCollections = collections || [
    {
      id: "fresh",
      name: "Fresh & Clean",
      description: "Ocean breeze, eucalyptus, and mint scents",
      image: freshImg,
      productCount: 12,
    },
    {
      id: "floral",
      name: "Floral Garden",
      description: "Lavender, jasmine, and rose fragrances",
      image: floralImg,
      productCount: 8,
    },
    {
      id: "premium",
      name: "Premium Collection",
      description: "Leather, sandalwood, and exotic blends",
      image: premiumImg,
      productCount: 6,
    },
  ];

  return (
    <section
      className="py-16 lg:py-24 bg-card"
      data-testid="section-collections"
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold mb-4">
            Shop by Collection
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find the perfect scent family that matches your style and mood
          </p>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Array.from({ length: 3 }).map((_, i) => (
              <Skeleton key={i} className="aspect-[4/5] rounded-lg" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {displayCollections.map((collection) => (
              <Link
                key={collection.id}
                href={`/shop?category=${collection.id}`}
              >
                <Card
                  className="group relative aspect-[4/5] overflow-hidden cursor-pointer"
                  data-testid={`card-collection-${collection.id}`}
                >
                  <img
                    src={collection.image}
                    alt={collection.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-serif text-2xl font-bold text-white mb-2">
                      {collection.name}
                    </h3>
                    <p className="text-white/80 text-sm mb-4">
                      {collection.description}
                    </p>
                    <div className="flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                      <span>Explore Collection</span>
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
