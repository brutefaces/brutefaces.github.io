import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

interface HeroProps {
  onSearchClick: () => void;
}

export const Hero = ({ onSearchClick }: HeroProps) => {
  return (
    <section className="hero-section py-20 px-4">
      <div className="container mx-auto max-w-6xl text-center">
        <div className="featured-emoji mb-8 animate-bounce-slow">
          <span className="text-9xl">😎</span>
        </div>
        
        <h1 className="hero-title mb-6">
          Emoji Faces & Emoticons
        </h1>
        
        <p className="hero-description mb-8">
          Discover, copy, and share thousands of expressive emoji faces and emoticons.
          From bruh faces to smileys, we've got them all!
        </p>
        
        <Button 
          size="lg" 
          onClick={onSearchClick}
          className="hero-button"
        >
          <Search className="mr-2 h-5 w-5" />
          Explore Emojis
        </Button>
      </div>
    </section>
  );
};
