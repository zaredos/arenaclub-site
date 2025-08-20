import { Box, Users, RotateCcw, Scale, PlusCircle, Lightbulb } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: <Box className="w-8 h-8" />,
      title: "100% Vanilla",
      description: "No plugins or mods required! Built entirely with command blocks and vanilla Minecraft functions.",
      color: "minecraft-green",
      borderColor: "border-minecraft-green"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Open to All",
      description: "Anyone can join! No whitelist, no applications. Just connect and start playing immediately.",
      color: "minecraft-blue",
      borderColor: "border-minecraft-blue"
    },
    {
      icon: <RotateCcw className="w-8 h-8" />,
      title: "Latest Version",
      description: "Always updated to the latest Minecraft version with cutting-edge features and improvements.",
      color: "minecraft-orange",
      borderColor: "border-minecraft-orange"
    },
    {
      icon: <Scale className="w-8 h-8" />,
      title: "Balanced Combat",
      description: "Constantly balanced classes ensure fair and competitive gameplay for all skill levels.",
      color: "minecraft-green",
      borderColor: "border-minecraft-green"
    },
    {
      icon: <PlusCircle className="w-8 h-8" />,
      title: "Growing Content",
      description: "New classes and features are regularly added based on community feedback and suggestions.",
      color: "minecraft-blue",
      borderColor: "border-minecraft-blue"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Community Driven",
      description: "We listen to our players! Your suggestions directly influence server development and improvements.",
      color: "minecraft-orange",
      borderColor: "border-minecraft-orange"
    }
  ];

  return (
    <section id="features" className="py-20 bg-dark-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-gaming text-3xl md:text-4xl font-bold mb-4 minecraft-green">Why Choose ArenaClub?</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">Pure vanilla Minecraft with innovative PvP mechanics</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`bg-dark-primary p-6 rounded-xl hover:bg-slate-800 transition-all duration-300 hover:scale-105 border border-slate-700 hover:${feature.borderColor}`}
              data-testid={`feature-card-${index}`}
            >
              <div className={`${feature.color} text-3xl mb-4`}>
                {feature.icon}
              </div>
              <h3 className={`font-gaming text-xl font-bold mb-3 ${feature.color}`}>
                {feature.title}
              </h3>
              <p className="text-slate-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
