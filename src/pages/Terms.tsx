import { Layout } from "@/components/Layout";
import { Card } from "@/components/ui/card";

const Terms = () => {
  return (
    <Layout>
      <div className="container mx-auto max-w-4xl px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Terms of Service
        </h1>
        <p className="text-center text-muted-foreground mb-8">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <div className="space-y-6">
          <Card className="p-8">
            <h2 className="text-2xl font-semibold mb-4">Agreement to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing and using EmojiHub, you accept and agree to be bound by the terms and 
              provisions of this agreement. If you do not agree to these terms, please do not use 
              our service. We reserve the right to modify these terms at any time, and such 
              modifications shall be effective immediately upon posting.
            </p>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-semibold mb-4">Use of Service</h2>
            <h3 className="text-xl font-semibold mb-3 mt-4">Permitted Use</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              EmojiHub provides a platform for discovering, copying, and sharing emoji faces and 
              emoticons. You may use our service for personal, non-commercial purposes, or for 
              commercial purposes in accordance with applicable laws and regulations.
            </p>
            
            <h3 className="text-xl font-semibold mb-3 mt-4">Prohibited Activities</h3>
            <p className="text-muted-foreground leading-relaxed mb-2">You agree not to:</p>
            <ul className="space-y-2 text-muted-foreground ml-4">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Use the service for any illegal purpose or in violation of any laws</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Attempt to gain unauthorized access to our systems or networks</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Interfere with or disrupt the service or servers</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Use automated systems to access the service in a manner that sends more requests than a human could reasonably produce</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Collect or harvest any information from the service</span>
              </li>
            </ul>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-semibold mb-4">Intellectual Property</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The emojis displayed on EmojiHub are part of the Unicode standard and are publicly 
              available. Our website design, layout, graphics, and compilation of emojis are protected 
              by copyright and other intellectual property laws.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              You may copy and use the emojis for your personal or commercial projects. However, you 
              may not copy or reproduce the overall design, layout, or structure of our website without 
              explicit permission.
            </p>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-semibold mb-4">Content Accuracy</h2>
            <p className="text-muted-foreground leading-relaxed">
              While we strive to ensure that the information and emojis displayed on EmojiHub are 
              accurate and up-to-date, we make no warranties or representations regarding the accuracy, 
              completeness, or reliability of any content. The appearance of emojis may vary depending 
              on the platform, device, and operating system being used.
            </p>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-semibold mb-4">Third-Party Links and Advertising</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              EmojiHub may contain links to third-party websites and advertisements. We are not 
              responsible for the content, privacy policies, or practices of any third-party websites. 
              We use Google AdSense to display advertisements, which may use cookies to personalize ads.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              You acknowledge and agree that we shall not be responsible or liable for any damage or 
              loss caused by your use of or reliance on any third-party content, goods, or services.
            </p>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-semibold mb-4">Disclaimer of Warranties</h2>
            <p className="text-muted-foreground leading-relaxed">
              EmojiHub is provided "as is" and "as available" without any warranties of any kind, 
              either express or implied. We do not warrant that the service will be uninterrupted, 
              secure, or error-free. Your use of the service is at your sole risk.
            </p>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              To the fullest extent permitted by law, EmojiHub and its operators shall not be liable 
              for any indirect, incidental, special, consequential, or punitive damages resulting from 
              your use of or inability to use the service, even if we have been advised of the 
              possibility of such damages.
            </p>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-semibold mb-4">Changes to Service</h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to modify, suspend, or discontinue any part of the service at any 
              time without notice. We will not be liable to you or any third party for any modification, 
              suspension, or discontinuance of the service.
            </p>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-semibold mb-4">Governing Law</h2>
            <p className="text-muted-foreground leading-relaxed">
              These Terms shall be governed by and construed in accordance with applicable laws, 
              without regard to its conflict of law provisions. Any disputes arising from these terms 
              or your use of the service shall be resolved in accordance with applicable jurisdiction.
            </p>
          </Card>

          <Card className="p-8 bg-gradient-to-r from-primary/10 to-secondary/10">
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about these Terms of Service, please contact us through our 
              Contact page or email us at legal@emojihub.com.
            </p>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Terms;
