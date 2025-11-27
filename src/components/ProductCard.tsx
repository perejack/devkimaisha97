import { ShoppingCart, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden hover:shadow-[var(--shadow-steel)] transition-all duration-300 hover:-translate-y-1">
      <div className="aspect-square relative overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
        
        {/* Stock Badge */}
        <Badge 
          variant={product.inStock ? "default" : "destructive"}
          className="absolute top-3 left-3"
        >
          {product.inStock ? "In Stock" : "Out of Stock"}
        </Badge>

        {/* Quick Actions */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Link to={`/product/${product.id}`}>
            <Button size="icon" variant="secondary" className="h-8 w-8">
              <Eye className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>

      <CardContent className="p-4">
        <div className="space-y-2">
          <h3 className="font-semibold text-lg leading-tight group-hover:text-accent transition-colors">
            {product.name}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {product.description}
          </p>
          
          {/* Category Badge */}
          <Badge variant="outline" className="text-xs">
            {product.category}
          </Badge>

          {/* Key Specifications */}
          {product.specifications.length > 0 && (
            <div className="space-y-1">
              <p className="text-xs font-medium text-muted-foreground">Key Specs:</p>
              <p className="text-xs text-foreground">
                {product.specifications[0]}
              </p>
            </div>
          )}
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-baseline gap-2">
              <span className="text-xl sm:text-2xl font-bold text-accent">
                {product.currency} {product.price.toLocaleString()}
              </span>
            </div>
            {product.unit && (
              <p className="text-xs text-muted-foreground">{product.unit}</p>
            )}
          </div>

          <div className="flex gap-2 w-full sm:w-auto">
            <Link to={`/product/${product.id}`} className="flex-1 sm:flex-none">
              <Button variant="outline" size="sm" className="w-full">
                View Details
              </Button>
            </Link>
            <Button variant="steel" size="sm" disabled={!product.inStock} className="flex-1 sm:flex-none">
              <ShoppingCart className="h-4 w-4 mr-1" />
              Quote
            </Button>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;