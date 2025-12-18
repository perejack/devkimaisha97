import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ShoppingCart, Share2, Phone, CheckCircle, Truck, Shield, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { getProductById, products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import WhatsAppButton from "@/components/WhatsAppButton";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  
  if (!id) {
    return <div>Product not found</div>;
  }

  const product = getProductById(id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🔍</div>
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <p className="text-muted-foreground mb-6">
            The product you're looking for doesn't exist or has been removed.
          </p>
          <Link to="/">
            <Button variant="industrial">
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  // Get related products (same category, exclude current product)
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const features = [
    {
      icon: CheckCircle,
      title: "Quality Guaranteed",
      description: "KEBS certified with quality assurance"
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Quick delivery across Kenya"
    },
    {
      icon: Shield,
      title: "Warranty",
      description: "Comprehensive product warranty"
    },
    {
      icon: Award,
      title: "Expert Support",
      description: "Technical support and consultation"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Breadcrumb */}
      <div className="bg-muted/30 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            <span>/</span>
            <Link 
              to={`/category/${product.category.toLowerCase().replace(' ', '-')}`}
              className="hover:text-foreground transition-colors"
            >
              {product.category}
            </Link>
            <span>/</span>
            <span className="text-foreground">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Products
        </Link>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="aspect-square bg-muted rounded-lg overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Badge variant="outline">{product.category}</Badge>
                <Badge variant={product.inStock ? "default" : "destructive"}>
                  {product.inStock ? "In Stock" : "Out of Stock"}
                </Badge>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{product.name}</h1>
              
              <p className="text-lg text-muted-foreground mb-6">
                {product.description}
              </p>

              <div className="flex items-baseline gap-4 mb-6">
                <span className="text-4xl font-bold text-accent">
                  {product.currency} {product.price.toLocaleString()}
                </span>
                {product.unit && (
                  <span className="text-lg text-muted-foreground">{product.unit}</span>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-4 mt-8">
              <Button
                size="lg"
                variant="industrial"
                className="w-full"
                disabled={!product.inStock}
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                Request Quote
              </Button>
              <WhatsAppButton 
                phoneNumber="+254755335197"
                message={`Hi! I'm interested in ${product.name}. Price: ${product.currency} ${product.price.toLocaleString()}${product.unit ? ` ${product.unit}` : ''}. Could you provide more details?`}
                variant="prominent"
                showText={true}
                className="w-full"
              />
              <Button 
                size="lg" 
                variant="outline"
                className="w-full"
                onClick={() => window.open('tel:+254755335197', '_self')}
              >
                <Phone className="h-5 w-5 mr-2" />
                Call to Order (+254755335197)
              </Button>
            </div>

            {/* Specifications */}
            <Card>
              <CardHeader>
                <CardTitle>Specifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {product.specifications.map((spec, index) => (
                    <div key={index} className="flex items-center justify-between py-2">
                      <span className="text-muted-foreground">{spec.split(':')[0]}:</span>
                      <span className="font-medium">{spec.split(':')[1]}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Features */}
            <Card>
              <CardHeader>
                <CardTitle>Key Features</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="text-center">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold">Related Products</h2>
              <Link to={`/category/${product.category.toLowerCase().replace(' ', '-')}`}>
                <Button variant="outline">
                  View All in {product.category}
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;