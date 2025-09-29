import { useState, useRef, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Hero } from "@/components/Hero";
import { CategoryFilter } from "@/components/CategoryFilter";
import { SearchBar } from "@/components/SearchBar";
import { EmojiCard } from "@/components/EmojiCard";
import { emojiData, categories } from "@/data/emojis";

const Index = () => {
  const [searchParams] = useSearchParams();
  const categoryFromUrl = searchParams.get("category") || "All";
  const [activeCategory, setActiveCategory] = useState(categoryFromUrl);
  const [searchQuery, setSearchQuery] = useState("");
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (categoryFromUrl !== "All") {
      setActiveCategory(categoryFromUrl);
      setTimeout(() => {
        gridRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [categoryFromUrl]);

  const handleSearchClick = () => {
    gridRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const filteredEmojis = emojiData.filter((emoji) => {
    const matchesCategory = activeCategory === "All" || emoji.category === activeCategory;
    const matchesSearch = emoji.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         emoji.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Layout>
      <Hero onSearchClick={handleSearchClick} />
      
      <section className="py-12 px-4" ref={gridRef}>
        <div className="container mx-auto max-w-7xl">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
          
          <CategoryFilter
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
          
          <div className="emoji-grid">
            {filteredEmojis.map((emoji, index) => (
              <EmojiCard
                key={`${emoji.emoji}-${index}`}
                emoji={emoji.emoji}
                name={emoji.name}
                category={emoji.category}
              />
            ))}
          </div>
          
          {filteredEmojis.length === 0 && (
            <div className="text-center py-20">
              <p className="text-2xl text-muted-foreground">No emojis found 😢</p>
              <p className="text-muted-foreground mt-2">Try a different search or category</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Index;
