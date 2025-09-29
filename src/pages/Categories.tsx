import { Layout } from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { categories } from "@/data/emojis";

const categoryDescriptions: Record<string, { emoji: string; description: string }> = {
  "Meme": { 
    emoji: "😐", 
    description: "Popular meme faces like bruh face, moai, and other internet culture favorites" 
  },
  "Happy": { 
    emoji: "😀", 
    description: "Cheerful and joyful expressions perfect for positive messages" 
  },
  "Love": { 
    emoji: "😍", 
    description: "Romantic and affectionate emojis with hearts and kisses" 
  },
  "Playful": { 
    emoji: "😋", 
    description: "Fun and silly faces for lighthearted conversations" 
  },
  "Cool": { 
    emoji: "😎", 
    description: "Confident and stylish emojis with attitude" 
  },
  "Skeptical": { 
    emoji: "😏", 
    description: "Doubtful and questioning expressions for sarcasm" 
  },
  "Sad": { 
    emoji: "😢", 
    description: "Emotional faces expressing sadness and disappointment" 
  },
  "Angry": { 
    emoji: "😠", 
    description: "Frustrated and angry expressions for strong emotions" 
  },
  "Surprised": { 
    emoji: "😮", 
    description: "Shocked and astonished reactions" 
  },
  "Sick": { 
    emoji: "🤢", 
    description: "Unwell and uncomfortable face expressions" 
  },
  "Fantasy": { 
    emoji: "👻", 
    description: "Mythical creatures and costume faces for creative use" 
  },
};

const Categories = () => {
  const displayCategories = categories.filter(cat => cat !== "All");

  return (
    <Layout>
      <div className="container mx-auto max-w-6xl px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Emoji Categories
        </h1>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Explore our organized collection of emoji faces. Each category is carefully curated 
          to help you find the perfect emoji for every emotion and situation.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayCategories.map((category) => {
            const info = categoryDescriptions[category];
            return (
              <Card 
                key={category} 
                className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-center">
                  <div className="text-6xl mb-4">{info?.emoji}</div>
                  <h2 className="text-2xl font-semibold mb-3">{category}</h2>
                  <p className="text-muted-foreground mb-4 text-sm">
                    {info?.description}
                  </p>
                  <Link to={`/?category=${category}`}>
                    <Button className="w-full">
                      Browse {category}
                    </Button>
                  </Link>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Categories;
