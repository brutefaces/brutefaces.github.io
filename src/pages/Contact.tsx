import { Layout } from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MessageSquare, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <Layout>
      <div className="container mx-auto max-w-4xl px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Contact Us
        </h1>
        <p className="text-center text-muted-foreground mb-12">
          Have questions, suggestions, or feedback? We'd love to hear from you!
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="p-6">
            <div className="flex items-start space-x-4">
              <div className="bg-primary/10 p-3 rounded-lg">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Email Us</h3>
                <p className="text-muted-foreground text-sm">
                  Send us an email and we'll respond within 24-48 hours.
                </p>
                <p className="text-primary mt-2">support@emojihub.com</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-start space-x-4">
              <div className="bg-secondary/10 p-3 rounded-lg">
                <MessageSquare className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Feedback</h3>
                <p className="text-muted-foreground text-sm">
                  Your feedback helps us improve and add new features.
                </p>
                <p className="text-secondary mt-2">feedback@emojihub.com</p>
              </div>
            </div>
          </Card>
        </div>

        <Card className="p-8">
          <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input
                id="subject"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="What's this about?"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell us more..."
                rows={6}
                required
              />
            </div>

            <Button type="submit" className="w-full md:w-auto" size="lg">
              <Send className="mr-2 h-4 w-4" />
              Send Message
            </Button>
          </form>
        </Card>
      </div>
    </Layout>
  );
};

export default Contact;
