import { Layout } from "@/components/Layout";
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <Layout>
      <div className="container mx-auto max-w-4xl px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          About EmojiHub
        </h1>

        <div className="space-y-6">
          <Card className="p-8">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed">
              EmojiHub is dedicated to providing the most comprehensive collection of emoji faces and emoticons on the web. 
              Our mission is to help people express themselves better through the universal language of emojis. Whether you're 
              looking for the perfect reaction emoji, a meme face, or just browsing for inspiration, we've got you covered.
            </p>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start">
                <span className="text-2xl mr-3">😀</span>
                <span>Thousands of carefully categorized emoji faces and emoticons</span>
              </li>
              <li className="flex items-start">
                <span className="text-2xl mr-3">🔍</span>
                <span>Powerful search functionality to find exactly what you need</span>
              </li>
              <li className="flex items-start">
                <span className="text-2xl mr-3">📋</span>
                <span>One-click copy feature for instant sharing</span>
              </li>
              <li className="flex items-start">
                <span className="text-2xl mr-3">🎨</span>
                <span>Regular updates with new emoji additions</span>
              </li>
              <li className="flex items-start">
                <span className="text-2xl mr-3">📱</span>
                <span>Fully responsive design for all devices</span>
              </li>
            </ul>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We understand the power of visual communication in today's digital world. Emojis have become an essential 
              part of how we express emotions, convey messages, and connect with others online. EmojiHub makes it easy 
              to find and use the perfect emoji for any situation.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our user-friendly interface, comprehensive collection, and commitment to regular updates make us the go-to 
              destination for emoji enthusiasts, content creators, social media managers, and anyone who loves to communicate 
              with style.
            </p>
          </Card>

          <Card className="p-8 bg-gradient-to-r from-primary/10 to-secondary/10">
            <h2 className="text-2xl font-semibold mb-4">Join Our Community</h2>
            <p className="text-muted-foreground leading-relaxed">
              We're constantly growing and improving based on user feedback. Have a suggestion or want to see a specific 
              emoji category? We'd love to hear from you! Visit our Contact page to get in touch.
            </p>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default About;
