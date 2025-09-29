import { useState, useRef } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Upload, Download, Copy, Image as ImageIcon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const AsciiConverter = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [asciiResult, setAsciiResult] = useState<string>("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const ASCII_CHARS = "@%#*+=-:. ";

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      setSelectedFile(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
      setAsciiResult("");
    } else {
      toast({
        title: "Invalid file",
        description: "Please select a valid image file",
        variant: "destructive",
      });
    }
  };

  const convertImageToAscii = async () => {
    if (!selectedFile) return;

    setIsProcessing(true);
    try {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const img = new Image();

      img.onload = () => {
        // Set canvas dimensions for ASCII output
        const maxWidth = 100;
        const maxHeight = 50;
        
        const aspectRatio = img.width / img.height;
        let width, height;
        
        if (aspectRatio > maxWidth / maxHeight) {
          width = maxWidth;
          height = Math.round(maxWidth / aspectRatio);
        } else {
          height = maxHeight;
          width = Math.round(maxHeight * aspectRatio);
        }

        canvas.width = width;
        canvas.height = height;
        
        ctx!.drawImage(img, 0, 0, width, height);
        
        // Get image data
        const imageData = ctx!.getImageData(0, 0, width, height);
        const pixels = imageData.data;
        
        let ascii = '';
        
        for (let i = 0; i < height; i++) {
          for (let j = 0; j < width; j++) {
            const pixelIndex = (i * width + j) * 4;
            const r = pixels[pixelIndex];
            const g = pixels[pixelIndex + 1];
            const b = pixels[pixelIndex + 2];
            
            // Convert to grayscale
            const gray = Math.round((r + g + b) / 3);
            
            // Map grayscale to ASCII character
            const charIndex = Math.floor((gray / 255) * (ASCII_CHARS.length - 1));
            ascii += ASCII_CHARS[charIndex];
          }
          ascii += '\n';
        }
        
        setAsciiResult(ascii);
        setIsProcessing(false);
        
        toast({
          title: "Conversion complete!",
          description: "Your image has been converted to ASCII art",
        });
      };

      img.src = URL.createObjectURL(selectedFile);
    } catch (error) {
      console.error('Error converting image:', error);
      setIsProcessing(false);
      toast({
        title: "Conversion failed",
        description: "There was an error converting your image",
        variant: "destructive",
      });
    }
  };

  const copyToClipboard = async () => {
    if (asciiResult) {
      try {
        await navigator.clipboard.writeText(asciiResult);
        toast({
          title: "Copied!",
          description: "ASCII art copied to clipboard",
        });
      } catch (error) {
        toast({
          title: "Copy failed",
          description: "Could not copy to clipboard",
          variant: "destructive",
        });
      }
    }
  };

  const downloadAsText = () => {
    if (asciiResult) {
      const blob = new Blob([asciiResult], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'ascii-art.txt';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      
      toast({
        title: "Downloaded!",
        description: "ASCII art saved as text file",
      });
    }
  };

  return (
    <Layout>
      <div className="container mx-auto max-w-6xl px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-4">
            Image to ASCII Converter
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Transform your images into beautiful ASCII art. Upload any image and get instant text-based artwork!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Upload Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Upload className="w-5 h-5" />
                Upload Image
              </CardTitle>
              <CardDescription>
                Select an image file to convert to ASCII art
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div 
                className="border-2 border-dashed border-border rounded-lg p-8 text-center cursor-pointer hover:border-primary transition-colors"
                onClick={() => fileInputRef.current?.click()}
                data-testid="file-upload-area"
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileSelect}
                  className="hidden"
                  data-testid="file-input"
                />
                {previewUrl ? (
                  <div className="space-y-4">
                    <img 
                      src={previewUrl} 
                      alt="Preview" 
                      className="max-w-full max-h-48 mx-auto rounded-lg"
                    />
                    <p className="text-sm text-muted-foreground">
                      {selectedFile?.name}
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <ImageIcon className="w-12 h-12 mx-auto text-muted-foreground" />
                    <div>
                      <p className="text-lg font-medium">Click to upload image</p>
                      <p className="text-sm text-muted-foreground">
                        Supports JPG, PNG, GIF and other image formats
                      </p>
                    </div>
                  </div>
                )}
              </div>

              <Button 
                onClick={convertImageToAscii}
                disabled={!selectedFile || isProcessing}
                className="w-full"
                data-testid="button-convert"
              >
                {isProcessing ? "Converting..." : "Convert to ASCII"}
              </Button>
            </CardContent>
          </Card>

          {/* Result Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ImageIcon className="w-5 h-5" />
                ASCII Result
              </CardTitle>
              <CardDescription>
                Your converted ASCII art will appear here
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea
                value={asciiResult}
                placeholder="Upload an image and click convert to see ASCII art here..."
                readOnly
                className="min-h-[300px] font-mono text-xs leading-tight resize-none"
                data-testid="textarea-result"
              />
              
              {asciiResult && (
                <div className="flex gap-2">
                  <Button
                    onClick={copyToClipboard}
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    data-testid="button-copy"
                  >
                    <Copy className="w-4 h-4 mr-2" />
                    Copy
                  </Button>
                  <Button
                    onClick={downloadAsText}
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    data-testid="button-download"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Tips Section */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Tips for Best Results</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Use images with high contrast for better ASCII art</li>
              <li>• Images with clear subjects work better than busy backgrounds</li>
              <li>• The converter works best with portraits, logos, and simple graphics</li>
              <li>• Larger images will be automatically resized to fit ASCII dimensions</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default AsciiConverter;