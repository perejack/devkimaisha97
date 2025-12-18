import { Link } from "react-router-dom";
import { ArrowRight, Building, Shield, Award, Truck } from "lucide-react";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { products, getProductsByCategory } from "@/data/products";
import steelBarsImg from "@/assets/steel-bars.jpg";
import boxProfileImg from "@/assets/BOX PROFILE.jpg";
import securityWireImg from "@/assets/security-wire.jpg";
import brcMeshImg from "@/assets/brc-mesh.jpg";
import heroSteelImg from "@/assets/hero-steel.jpg";

const Home = () => {
  // Get all mabati products for prominent display
  const mabatiProducts = getProductsByCategory("Mabati Roofing");
  // Get featured products (first 8 products)
  const featuredProducts = products.slice(0, 8);
  
  const categories = [
    {
      name: "Steel Bars",
      description: "Deformed and round steel bars for construction",
      image: steelBarsImg,
      count: getProductsByCategory("Steel Bars").length,
      href: "/category/steel-bars"
    },
    {
      name: "Mabati Roofing",
      description: "Premium roofing sheets with 25-year warranty",
      image: boxProfileImg,
      count: getProductsByCategory("Mabati Roofing").length,
      href: "/category/mabati-roofing"
    },
    {
      name: "Security Products", 
      description: "Barbed wire and chain link fencing",
      image: securityWireImg,
      count: getProductsByCategory("Security Products").length,
      href: "/category/security-products"
    },
    {
      name: "BRC Mesh",
      description: "Welded reinforcement mesh for concrete",
      image: brcMeshImg,
      count: getProductsByCategory("BRC Mesh").length,
      href: "/category/brc-mesh"
    },
    {
      name: "Construction Materials",
      description: "Essential building materials and supplies",
      image: heroSteelImg,
      count: getProductsByCategory("Construction Materials").length,
      href: "/category/construction-materials"
    }
  ];

  const features = [
    {
      title: "KEBS Certified",
      description: "All our products meet Kenya Bureau of Standards quality requirements"
    },
    {
      title: "Fast Delivery",
      description: "Quick delivery across Kenya with our efficient logistics network"
    },
    {
      title: "Competitive Pricing",
      description: "Best market prices with flexible payment terms for bulk orders"
    },
    {
      title: "Expert Support",
      description: "Technical support and consultation for your construction projects"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Mabati Products Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Premium Mabati Roofing Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover our complete range of high-quality mabati roofing products with warranties up to 25 years
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {mabatiProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:-translate-y-3 border-2 hover:border-accent/50">
                <CardHeader className="p-0 relative">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  {product.features.some(f => f.includes("SALE") || f.includes("LIMITED OFFER")) && (
                    <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      {product.features.find(f => f.includes("SALE") || f.includes("LIMITED OFFER"))}
                    </div>
                  )}
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-xl mb-3 text-primary">{product.name}</CardTitle>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{product.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.features.slice(0, 2).map((feature, idx) => (
                      <span key={idx} className="bg-accent/10 text-accent text-xs px-2 py-1 rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-primary">{product.currency} {product.price}</span>
                      <span className="text-sm text-muted-foreground ml-1">/{product.unit}</span>
                    </div>
                    <span className="text-green-600 font-semibold text-sm">Free Delivery</span>
                  </div>
                  
                  <Link to={`/product/${product.id}`}>
                    <Button variant="industrial" className="w-full group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link to="/category/mabati-roofing">
              <Button size="lg" variant="outline" className="text-lg px-8 py-4">
                View All Mabati Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Product Categories</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive range of premium steel products for all your construction needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {categories.map((category, index) => (
              <Card key={index} className="overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <CardHeader className="p-0">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={category.image} 
                      alt={category.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <CardTitle className="text-base mb-2">{category.name}</CardTitle>
                  <p className="text-xs text-muted-foreground mb-3 h-8">{category.description}</p>
                  <p className="text-xs text-accent font-semibold mb-3">
                    {category.count} Products
                  </p>
                  <Link to={category.href}>
                    <Button variant="outline" size="sm" className="w-full">
                      Browse
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <ProductGrid 
        products={featuredProducts} 
        title="Featured Products" 
        showFilters={false}
      />

      {/* Features Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Devki Steel Mills Mabati?</h2>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Industry-leading quality steel and mabati products with superior service and reliability
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-industrial-orange/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-industrial-orange" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-primary-foreground/80">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Get a custom quote for your steel requirements. Our team is ready to help you choose the right products for your construction needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="industrial" className="text-lg px-8 py-4">
                Get Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4">
                Browse All Products
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;