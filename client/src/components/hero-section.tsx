import { Play, Shield, Copy, Box, Sword } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function HeroSection() {
  const { toast } = useToast();
  
  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast({
        title: "Copied!",
        description: "Server IP copied to clipboard",
        className: "bg-minecraft-green text-dark-primary",
      });
    } catch (err) {
      toast({
        title: "Error",
        description: "Failed to copy to clipboard",
        variant: "destructive",
      });
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-dark-primary via-dark-secondary to-slate-900 relative overflow-hidden">
      {/* Floating particles background */}
      <div className="absolute inset-0 minecraft-texture opacity-5"></div>
      
      <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Server IP Highlight */}
          <div className="mb-8 animate-float">
            <div className="inline-block bg-gradient-to-r from-minecraft-green to-minecraft-blue p-1 rounded-xl animate-glow">
              <div className="bg-dark-primary px-8 py-4 rounded-lg">
                <p className="text-sm text-slate-300 mb-2">Server IP</p>
                <div className="flex items-center justify-center space-x-4">
                  <code className="font-mono text-2xl md:text-3xl font-bold minecraft-green" data-testid="server-ip">
                    arenaclub.club
                  </code>
                  <button 
                    onClick={() => copyToClipboard('arenaclub.club')} 
                    className="bg-minecraft-green hover:bg-emerald-600 text-dark-primary px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105"
                    data-testid="copy-ip-button"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          
            <h1 className="font-gaming text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-400 via-slate-300 to-slate-100 bg-clip-text text-transparent drop-shadow-lg">
              Arena
            </span>
            <span className="bg-gradient-to-r minecraft-green via-emerald-400 to-minecraft-blue bg-clip-text text-transparent drop-shadow-lg ml-2">
              Club
            </span>
            </h1>
          
          <h2 className="text-xl md:text-2xl lg:text-3xl text-slate-300 mb-8 font-light">
            Ultimate Vanilla Minecraft PvP Server
          </h2>
          
          <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Experience unique class-based combat in pure vanilla Minecraft. Master your weapon of choice with innovative classes built entirely with command blocks and built-in functions!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => scrollToSection('join')} 
              className="bg-minecraft-green hover:bg-emerald-600 text-dark-primary px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
              data-testid="join-server-button"
            >
              <Play className="w-5 h-5 mr-2 inline" />
              Join Server Now
            </button>
            <button 
              onClick={() => scrollToSection('classes')} 
              className="border-2 border-minecraft-blue minecraft-blue hover:bg-minecraft-blue hover:text-dark-primary px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105"
              data-testid="explore-classes-button"
            >
              <Shield className="w-5 h-5 mr-2 inline" />
              Explore Classes
            </button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-10 left-10 minecraft-green opacity-20 animate-float">
        <Box className="w-16 h-16" />
      </div>
      <div className="absolute top-1/2 right-10 minecraft-blue opacity-20 animate-float" style={{animationDelay: '1s'}}>
        <Sword className="w-12 h-12" />
      </div>
    </section>
  );
}
