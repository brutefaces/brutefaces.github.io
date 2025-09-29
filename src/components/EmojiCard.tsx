import { Card } from "@/components/ui/card";
import { Copy, Check } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface EmojiCardProps {
  emoji: string;
  name: string;
  category: string;
}

export const EmojiCard = ({ emoji, name, category }: EmojiCardProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(emoji);
    setCopied(true);
    toast.success(`${name} copied!`);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card 
      className="group relative overflow-hidden border-border bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer"
      onClick={handleCopy}
    >
      <div className="aspect-square flex flex-col items-center justify-center p-6">
        <div className="text-6xl mb-3 group-hover:scale-110 transition-transform duration-300">
          {emoji}
        </div>
        <p className="text-sm font-medium text-foreground text-center truncate w-full px-2">
          {name}
        </p>
        <p className="text-xs text-muted-foreground mt-1">{category}</p>
      </div>
      
      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="bg-primary text-primary-foreground rounded-full p-2">
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        </div>
      </div>
    </Card>
  );
};
