import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "@/components/ui/skeleton";
import { ProductCard } from "@/components/product-card";
import type { Product, Collection } from "@shared/schema";

import freshImg from "@assets/generated_images/ocean_blue_car_freshener.png";
import floralImg from "@assets/generated_images/lavender_purple_car_freshener.png";
import premiumImg from "@assets/generated_images/sandalwood_brown_car_freshener.png";

const defaultCollections: Collection[] = [
  {
    id: "fresh",
    name: "Fresh & Clean",
    description: "Ocean breeze, eucalyptus, mint, and other refreshing scents that invigorate your senses",
    image: freshImg,
    productCount: 2,
  },
  {
    id: "floral",
    name: "Floral Garden",
    description: "Lavender, jasmine, rose, and other delicate floral fragrances",
    image: floralImg,
    productCount: 1,
  },
  {
    id: "premium",
    name: "Premium Collection",
    description: "Leather, sandalwood, and exotic blends for the discerning driver",
    image: premiumImg,
    productCount: 1,
  },
];

export default function Collections() {
  const { data: products, isLoading: productsLoading } = useQuery<Product[]>({
    queryKey: ["/api/products"],
  });

  const { data: collections } = useQuery<Collection[]>({
    queryKey: ["/api/collections"],
  });

  const displayCollections = collections || defaultCollections;

  const getProductsByCategory = (categoryId: string) => {
    if (!products) return [];
    return products.filter((product) => product.category === categoryId);
  };

  return (
    <main className="pt-20 lg:pt-24" data-testid="page-collections">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8 lg:py-12">
        <div className="text-center mb-12">
          <h1 className="font-serif text-3xl lg:text-5xl font-bold mb-4">
            Our Collections
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Explore our curated collections of premium car fresheners, each designed
            to transform your driving experience
          </p>
        </div>

        {productsLoading ? (
          <div className="space-y-12">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i}>
                <Skeleton className="h-8 w-48 mb-4" />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {Array.from({ length: 2 }).map((_, j) => (
                    <Skeleton key={j} className="aspect-square rounded-lg" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-16">
            {displayCollections.map((collection) => {
              const categoryProducts = getProductsByCategory(collection.id);
              if (categoryProducts.length === 0) return null;

              return (
                <section key={collection.id} data-testid={`section-collection-${collection.id}`}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={collection.image}
                        alt={collection.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h2 className="font-serif text-2xl lg:text-3xl font-bold">
                        {collection.name}
                      </h2>
                      <p className="text-muted-foreground text-sm mt-1">
                        {collection.description}
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categoryProducts.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
}
