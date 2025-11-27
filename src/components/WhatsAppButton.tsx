import { useState, useEffect } from "react";
import whatsappIcon from "@/assets/whatsapp-icon.png";

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
  variant?: "floating" | "inline" | "prominent";
  showText?: boolean;
  className?: string;
}

const WhatsAppButton = ({ 
  phoneNumber, 
  message = "Hi! I'd like to inquire about your steel products.", 
  variant = "floating",
  showText = true,
  className = "" 
}: WhatsAppButtonProps) => {
  const [isOnline, setIsOnline] = useState(true);
  const [isPulsing, setIsPulsing] = useState(false);

  useEffect(() => {
    // Simulate online status with periodic pulse
    const interval = setInterval(() => {
      setIsPulsing(true);
      setTimeout(() => setIsPulsing(false), 1000);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\+/g, '').replace(/\s/g, '')}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  if (variant === "floating") {
    return (
      <button
        onClick={handleWhatsAppClick}
        className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white font-medium rounded-full px-4 py-3 shadow-lg transition-all duration-300 transform hover:scale-105 ${className}`}
        aria-label="Contact us on WhatsApp"
      >
        <img 
          src={whatsappIcon} 
          alt="WhatsApp" 
          className="w-6 h-6"
        />
        {showText && <span>Talk to us (Online)</span>}
      </button>
    );
  }

  // For 'inline' and 'prominent' variants
  const baseClasses = "relative flex items-center gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white font-medium rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl group";

  const variantClasses = {
    inline: "px-4 py-2",
    prominent: "px-6 py-4 text-lg shadow-2xl hover:shadow-green-500/25",
    floating: ""
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      aria-label="Contact us on WhatsApp"
    >
      <img 
        src={whatsappIcon} 
        alt="WhatsApp" 
        className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300"
      />
      {showText && <span>Order via WhatsApp</span>}
    </button>
  );
};

export default WhatsAppButton;