import { Star } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Product } from "@shared/schema";
import { formatPrice } from "@/lib/format-price";

interface ProductCardProps {
  product: Product;
}

const WHATSAPP_NUMBER = "919890991136";

export function ProductCard({ product }: ProductCardProps) {
  const hasDiscount = product.originalPrice && product.originalPrice > product.price;
  const discountPercent = hasDiscount
    ? Math.round((1 - product.price / product.originalPrice!) * 100)
    : 0;

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      `Hi, I would like to purchase "${product.name}" (${formatPrice(product.price)}). Please provide more details.`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <Card
      className="group overflow-visible transition-transform duration-300 hover:scale-[1.02]"
      data-testid={`card-product-${product.id}`}
    >
      <div className="relative aspect-square overflow-hidden rounded-t-lg bg-gradient-to-br from-primary/10 via-muted to-primary/5">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {hasDiscount && (
          <Badge
            variant="destructive"
            className="absolute top-3 left-3"
            data-testid={`badge-discount-${product.id}`}
          >
            -{discountPercent}%
          </Badge>
        )}
        {product.featured && !hasDiscount && (
          <Badge
            className="absolute top-3 left-3"
            data-testid={`badge-featured-${product.id}`}
          >
            Featured
          </Badge>
        )}
      </div>
      <CardContent className="p-4">
        <div className="flex items-center gap-1 mb-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-3.5 w-3.5 ${
                i < Math.floor(product.rating)
                  ? "text-primary fill-primary"
                  : "text-muted-foreground"
              }`}
            />
          ))}
          <span className="text-xs text-muted-foreground ml-1">
            ({product.reviewCount})
          </span>
        </div>
        <h3 className="font-medium text-sm mb-1 line-clamp-1" data-testid={`text-product-name-${product.id}`}>
          {product.name}
        </h3>
        <p className="text-xs text-muted-foreground mb-2">{product.scent}</p>
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="font-bold text-lg" data-testid={`text-price-${product.id}`}>
              {formatPrice(product.price)}
            </span>
            {hasDiscount && (
              <span className="text-sm text-muted-foreground line-through">
                {formatPrice(product.originalPrice!)}
              </span>
            )}
          </div>
          <Button
            size="sm"
            className="bg-[#25D366] hover:bg-[#128C7E] text-white"
            onClick={handleWhatsAppClick}
            data-testid={`button-whatsapp-${product.id}`}
          >
            <SiWhatsapp className="h-4 w-4 mr-1" />
            Buy
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
