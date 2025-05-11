import { Send } from "lucide-react";
import { useState } from "react";

export default function CustomSendButton() {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <button 
      className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-center transform hover:-translate-y-1 flex items-center justify-center gap-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span>Send Message</span>
      <Send 
        size={20} 
        className={`transition-transform duration-300 ${isHovered ? "translate-x-1" : ""}`}
      />
    </button>
  );
}