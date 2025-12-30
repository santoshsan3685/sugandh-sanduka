import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Filter, Grid3X3, LayoutGrid, Search, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ProductCard } from "@/components/product-card";
import { SEO, BreadcrumbStructuredData } from "@/components/seo";
import type { Product } from "@shared/schema";

const categories = [
  { value: "all", label: "All Categories" },
  { value: "fresh", label: "Fresh & Clean" },
  { value: "floral", label: "Floral" },
  { value: "woody", label: "Woody & Earthy" },
  { value: "fruity", label: "Fruity" },
];

const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
  { value: "newest", label: "Newest" },
  { value: "rating", label: "Top Rated" },
];

export default function Shop() {
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [sortBy, setSortBy] = useState("featured");
  const [gridCols, setGridCols] = useState<3 | 4>(4);

  const { data: products, isLoading } = useQuery<Product[]>({
    queryKey: ["/api/products"],
  });

  const filteredProducts = products
    ?.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.scent.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        category === "all" || product.category === category;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "rating":
          return b.rating - a.rating;
        case "newest":
          return 0;
        default:
          return b.featured ? 1 : -1;
      }
    });

  return (
    <main className="pt-20 lg:pt-24" data-testid="page-shop">
      <SEO 
        title="Shop Premium Car Air Fresheners"
        description="Browse our complete collection of premium car air fresheners. Fresh, floral, woody and fruity scents. 45-day lasting fragrance. Order via WhatsApp."
        keywords="buy car freshener, car freshener online India, premium car scent, car perfume shop"
        canonicalUrl="/shop"
      />
      <BreadcrumbStructuredData items={[
        { name: "Home", url: "/" },
        { name: "Shop", url: "/shop" }
      ]} />
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8 lg:py-12">
        <div className="mb-8">
          <h1 className="font-serif text-3xl lg:text-4xl font-bold mb-2">
            Shop All Fresheners
          </h1>
          <p className="text-muted-foreground">
            Discover our complete collection of premium car fresheners
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search fresheners..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
              data-testid="input-search"
            />
          </div>
          <div className="flex flex-wrap gap-3">
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="w-[180px]" data-testid="select-category">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((cat) => (
                  <SelectItem key={cat.value} value={cat.value}>
                    {cat.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[180px]" data-testid="select-sort">
                <SlidersHorizontal className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                {sortOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <div className="hidden lg:flex items-center gap-1 border rounded-lg p-1">
              <Button
                variant={gridCols === 3 ? "secondary" : "ghost"}
                size="icon"
                onClick={() => setGridCols(3)}
                data-testid="button-grid-3"
              >
                <Grid3X3 className="h-4 w-4" />
              </Button>
              <Button
                variant={gridCols === 4 ? "secondary" : "ghost"}
                size="icon"
                onClick={() => setGridCols(4)}
                data-testid="button-grid-4"
              >
                <LayoutGrid className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {isLoading ? (
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ${
              gridCols === 4 ? "xl:grid-cols-4" : ""
            } gap-6`}
          >
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="space-y-3">
                <Skeleton className="aspect-square rounded-lg" />
                <Skeleton className="h-4 w-2/3" />
                <Skeleton className="h-4 w-1/3" />
              </div>
            ))}
          </div>
        ) : filteredProducts?.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
              <Search className="h-10 w-10 text-muted-foreground" />
            </div>
            <h3 className="font-medium text-lg mb-2">No products found</h3>
            <p className="text-muted-foreground text-sm">
              Try adjusting your search or filter criteria
            </p>
          </div>
        ) : (
          <>
            <p className="text-sm text-muted-foreground mb-4">
              Showing {filteredProducts?.length} products
            </p>
            <div
              className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ${
                gridCols === 4 ? "xl:grid-cols-4" : ""
              } gap-6`}
            >
              {filteredProducts?.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </>
        )}
      </div>
    </main>
  );
}
