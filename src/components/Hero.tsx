import { ArrowRight, Shield, Zap, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Hero = () => {
  const features = [];

  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(https://devkigroupke.com/wp-content/uploads/2023/02/dvkforgotten_town.png)` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-white text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Devki Steel Mills
              <span className="block text-industrial-orange">Maisha Mabati</span>
              <span className="block text-2xl sm:text-3xl md:text-4xl text-gray-300 mt-2">Complete Building Solutions</span>
            </h1>
            <p className="text-lg sm:text-xl mb-8 text-gray-200 leading-relaxed">
              From premium steel bars for your foundation to weather-resistant mabati roofing with 25-year warranties. 
              Devki Steel Mills Mabati - your trusted partner for complete construction solutions across Kenya.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center lg:justify-start">
              <Button size="lg" variant="industrial" className="text-lg px-8 py-4">
                Browse Mabati Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="ghost" className="text-lg px-8 py-4 text-white hover:bg-white/10 border-white/30">
                Get Free Quote
              </Button>
            </div>
          </div>

          {/* Right Column - Feature Cards */}
          <div className="space-y-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-industrial-orange/20 p-3 rounded-lg">
                        <Icon className="h-6 w-6 text-industrial-orange" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                        <p className="text-gray-200">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;