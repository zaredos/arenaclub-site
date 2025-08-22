import { Check, Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function JoinSection() {
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

  const requirements = [
    "Minecraft Java Edition 1.21.8+",
    "No mods or plugins required",
    "Stable internet connection",
    "Basic PvP knowledge recommended"
  ];

  const steps = [
    "Open Minecraft Java Edition",
    "Click \"Multiplayer\"",
    "Add server with IP: arenaclub.club",
    "Join and start fighting!"
  ];

  return (
    <section id="join" className="py-20 bg-dark-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-gaming text-3xl md:text-4xl font-bold mb-8 minecraft-green">Ready to Join the Battle?</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-dark-primary p-8 rounded-xl border border-slate-700">
              <h3 className="font-gaming text-xl font-bold mb-4 minecraft-blue">Requirements</h3>
              <ul className="text-slate-300 space-y-3 text-left">
                {requirements.map((requirement, index) => (
                  <li key={index} className="flex items-center" data-testid={`requirement-${index}`}>
                    <Check className="minecraft-green mr-3 w-5 h-5" />
                    {requirement}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-dark-primary p-8 rounded-xl border border-slate-700">
              <h3 className="font-gaming text-xl font-bold mb-4 minecraft-orange">How to Connect</h3>
              <ol className="text-slate-300 space-y-3 text-left">
                {steps.map((step, index) => (
                  <li key={index} className="flex items-start" data-testid={`step-${index}`}>
                    <span className="bg-minecraft-orange text-dark-primary rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">
                      {index + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-minecraft-green to-minecraft-blue p-1 rounded-xl">
            <div className="bg-dark-primary px-8 py-6 rounded-lg">
              <h3 className="font-gaming text-2xl font-bold mb-4">Server IP</h3>
              <div className="flex items-center justify-center space-x-4 mb-4">
                <code className="font-mono text-3xl font-bold minecraft-green" data-testid="join-server-ip">
                  arenaclub.club
                </code>
                <button 
                  onClick={() => copyToClipboard('arenaclub.club')} 
                  className="bg-minecraft-green hover:bg-emerald-600 text-dark-primary px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 font-semibold"
                  data-testid="join-copy-ip-button"
                >
                  <Copy className="w-4 h-4 mr-2 inline" />
                  Copy IP
                </button>
              </div>
              <p className="text-slate-400">Click to copy the server IP to your clipboard</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
