import { Layout } from "@/components/Layout";
import { Card } from "@/components/ui/card";

const Privacy = () => {
  return (
    <Layout>
      <div className="container mx-auto max-w-4xl px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Privacy Policy
        </h1>
        <p className="text-center text-muted-foreground mb-8">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <div className="space-y-6">
          <Card className="p-8">
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              At EmojiHub, we take your privacy seriously. This Privacy Policy explains how we collect, 
              use, and protect your information when you visit and use our website. By using EmojiHub, 
              you agree to the collection and use of information in accordance with this policy.
            </p>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
            <h3 className="text-xl font-semibold mb-3 mt-4">Usage Data</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We may collect information about how you access and use our website. This usage data may 
              include information such as your computer's IP address, browser type, browser version, 
              the pages you visit, the time and date of your visit, the time spent on pages, and other 
              diagnostic data.
            </p>
            
            <h3 className="text-xl font-semibold mb-3 mt-4">Cookies and Tracking</h3>
            <p className="text-muted-foreground leading-relaxed">
              We use cookies and similar tracking technologies to track activity on our website and 
              store certain information. Cookies are files with small amounts of data that may include 
              an anonymous unique identifier. You can instruct your browser to refuse all cookies or 
              to indicate when a cookie is being sent.
            </p>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>To provide and maintain our service</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>To improve and personalize your experience</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>To monitor usage and analyze trends</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>To detect and prevent technical issues</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>To provide customer support</span>
              </li>
            </ul>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-semibold mb-4">Third-Party Services</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We may employ third-party companies and individuals to facilitate our service, provide 
              the service on our behalf, perform service-related tasks, or assist us in analyzing how 
              our service is used.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              These third parties may have access to your information only to perform these tasks on 
              our behalf and are obligated not to disclose or use it for any other purpose. We may 
              use Google AdSense for advertising purposes, which uses cookies to serve ads based on 
              your prior visits to our website.
            </p>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              The security of your data is important to us, but remember that no method of transmission 
              over the Internet or method of electronic storage is 100% secure. While we strive to use 
              commercially acceptable means to protect your information, we cannot guarantee its absolute 
              security.
            </p>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-semibold mb-4">Children's Privacy</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our service is intended for general audiences and does not knowingly collect personally 
              identifiable information from children under 13. If you are a parent or guardian and you 
              are aware that your child has provided us with personal information, please contact us.
            </p>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-semibold mb-4">Changes to This Privacy Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update our Privacy Policy from time to time. We will notify you of any changes by 
              posting the new Privacy Policy on this page and updating the "Last updated" date at the 
              top of this policy. You are advised to review this Privacy Policy periodically for any changes.
            </p>
          </Card>

          <Card className="p-8 bg-gradient-to-r from-primary/10 to-secondary/10">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us through our 
              Contact page or email us at privacy@emojihub.com.
            </p>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Privacy;
