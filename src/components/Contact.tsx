import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Youtube, Mail, Twitter, Twitch } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-secondary border-2 border-border rounded-2xl">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I'm always interested in new opportunities and collaborations. 
            Let's discuss how we can work together!
          </p>
        </div>

        <div className="flex justify-center gap-6">
          <a
            href="mailto:barguessofia@gmail.com"
            className="p-4 rounded-full border-2 border-border hover:bg-accent transition-all duration-300 hover:scale-110 text-foreground"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
          <a
            href="https://x.com/bargues_sofia"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-full border-2 border-border hover:bg-accent transition-all duration-300 hover:scale-110 text-foreground"
            aria-label="X (Twitter)"
          >
            <Twitter className="w-6 h-6" />
          </a>
          <a 
            href="https://uk.linkedin.com/in/sofia-bargues" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-4 rounded-full border-2 border-border hover:bg-accent transition-all duration-300 hover:scale-110 text-foreground"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
