
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Youtube } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I'm always interested in new opportunities and collaborations. 
            Let's discuss how we can work together!
          </p>
        </div>

        <Card className="group hover:shadow-lg transition-all duration-300 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Get In Touch</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-lg text-muted-foreground">
              Based in Croydon, England • Available for freelance projects and full-time opportunities
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="https://uk.linkedin.com/in/sofia-bargues" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="https://github.com/SofiaBargues" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 mr-2" />
                  GitHub
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-center gap-6">
          <a 
            href="https://github.com/SofiaBargues" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-4 rounded-full border border-border hover:bg-accent transition-all duration-300 hover:scale-110"
          >
            <Github className="w-6 h-6" />
          </a>
          <a 
            href="https://uk.linkedin.com/in/sofia-bargues" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-4 rounded-full border border-border hover:bg-accent transition-all duration-300 hover:scale-110"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a 
            href="https://www.youtube.com/@sofiabargues" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-4 rounded-full border border-border hover:bg-accent transition-all duration-300 hover:scale-110"
          >
            <Youtube className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
