import { useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ProductGrid from "@/components/ProductGrid";
import { getProductsByCategory } from "@/data/products";

const CategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  
  if (!category) {
    return <div>Category not found</div>;
  }

  // Convert URL parameter to proper category name
  const categoryName = category
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  const products = getProductsByCategory(categoryName);

  const categoryDescriptions: Record<string, string> = {
    "Steel Bars": "Premium quality deformed and round steel bars for construction and reinforcement applications. All products are KEBS certified and meet international standards.",
    "Mabati Roofing": "Premium mabati roofing solutions including box profile, versatile sheets, romantile, corrugated iron, and advanced alu-zinc coated products. Weather-resistant with warranties up to 25 years.",
    "Security Products": "Complete range of security fencing solutions including barbed wire and chain link fencing for perimeter security and property protection.",
    "BRC Mesh": "Pre-fabricated welded reinforcement mesh for concrete construction. Saves time and ensures consistent quality in your projects.",
    "Construction Materials": "Essential building materials including hoop iron, binding wire, polythene sheets, and marine boards for various construction needs."
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Breadcrumb */}
      <div className="bg-muted/30 py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-4">
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            <span>/</span>
            <span className="text-foreground">{categoryName}</span>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{categoryName}</h1>
              <p className="text-lg text-muted-foreground max-w-3xl">
                {categoryDescriptions[categoryName] || "Explore our selection of premium quality products."}
              </p>
            </div>
            
            <Link to="/">
              <Button variant="ghost">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Products */}
      <ProductGrid products={products} />

      {/* No products found */}
      {products.length === 0 && (
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="max-w-md mx-auto">
            <div className="text-6xl mb-4">📦</div>
            <h2 className="text-2xl font-bold mb-4">No Products Found</h2>
            <p className="text-muted-foreground mb-6">
              We couldn't find any products in the "{categoryName}" category.
            </p>
            <Link to="/">
              <Button variant="industrial">
                Browse All Products
              </Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryPage;