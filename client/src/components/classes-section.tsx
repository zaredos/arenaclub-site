import { Sword, Target, FlaskConical, Wand } from "lucide-react";

export default function ClassesSection() {
  const classes = [
    {
      name: "Berserker",
      type: "Melee Specialist",
      icon: <Sword className="w-6 h-6" />,
      color: "minecraft-green",
      bgColor: "bg-minecraft-green",
      description: "A fierce warrior that excels in close-quarters combat with enhanced damage and regeneration abilities.",
      items: ["Netherite Sword", "Shield", "Strength Potions"],
      abilities: [
        "Rage Mode: Increased damage and speed",
        "Battle Regeneration: Health recovery during combat",
        "Berserker's Fury: Damage increases as health decreases"
      ]
    },
    {
      name: "Archer",
      type: "Ranged Specialist",
      icon: <Target className="w-6 h-6" />,
      color: "minecraft-blue",
      bgColor: "bg-minecraft-blue",
      description: "Master of ranged combat with enhanced bow abilities and special arrow types for tactical advantage.",
      items: ["Enchanted Bow", "Special Arrows", "Crossbow"],
      abilities: [
        "Multi-Shot: Fire multiple arrows simultaneously",
        "Eagle Eye: Increased accuracy and range",
        "Arrow Rain: Area-of-effect arrow barrage"
      ]
    },
    {
      name: "Alchemist",
      type: "Support Specialist",
      icon: <FlaskConical className="w-6 h-6" />,
      color: "minecraft-orange",
      bgColor: "bg-minecraft-orange",
      description: "Expert in potion brewing and magical effects, providing powerful buffs and debuffs to control the battlefield.",
      items: ["Splash Potions", "Lingering Potions", "Brewing Stand"],
      abilities: [
        "Potion Mastery: Enhanced potion effects",
        "Toxic Cloud: Area denial with poison",
        "Quick Brew: Instant potion creation"
      ]
    },
    {
      name: "Enchanter",
      type: "Magic Specialist",
      icon: <Wand className="w-6 h-6" />,
      color: "text-purple-400",
      bgColor: "bg-purple-500",
      description: "Harnesses the power of enchantments and magical effects to enhance weapons and provide mystical advantages.",
      items: ["Enchanted Books", "Trident", "End Crystal"],
      abilities: [
        "Weapon Enchantment: Temporarily enhance weapons",
        "Magic Shield: Reflect magical attacks",
        "Teleportation: Short-range tactical movement"
      ]
    }
  ];

  return (
    <section id="classes" className="py-20 bg-dark-primary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-gaming text-3xl md:text-4xl font-bold mb-4 minecraft-green">Unique Classes</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">Master different combat styles with our innovative class system. Each class offers unique abilities, items, and playstyles.</p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {classes.map((classItem, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-dark-secondary to-slate-800 p-8 rounded-xl border border-slate-600 hover:border-minecraft-green transition-all duration-300 hover:scale-[1.02]"
              data-testid={`class-card-${index}`}
            >
              <div className="flex items-center mb-6">
                <div className={`${classItem.bgColor} p-3 rounded-lg mr-4`}>
                  <div className="text-dark-primary">
                    {classItem.icon}
                  </div>
                </div>
                <div>
                  <h3 className={`font-gaming text-2xl font-bold ${classItem.color}`} data-testid={`class-name-${index}`}>
                    {classItem.name}
                  </h3>
                  <p className="text-slate-400" data-testid={`class-type-${index}`}>{classItem.type}</p>
                </div>
              </div>
              
              <p className="text-slate-300 mb-6" data-testid={`class-description-${index}`}>
                {classItem.description}
              </p>
              
              <div className="space-y-4">
                <div>
                  <h4 className={`font-semibold ${classItem.color} mb-2`}>Primary Items:</h4>
                  <div className="flex flex-wrap gap-2">
                    {classItem.items.map((item, itemIndex) => (
                      <span 
                        key={itemIndex}
                        className="bg-slate-700 px-3 py-1 rounded-full text-sm"
                        data-testid={`class-item-${index}-${itemIndex}`}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className={`font-semibold ${classItem.color} mb-2`}>Special Abilities:</h4>
                  <ul className="text-slate-300 space-y-1">
                    {classItem.abilities.map((ability, abilityIndex) => (
                      <li 
                        key={abilityIndex}
                        data-testid={`class-ability-${index}-${abilityIndex}`}
                      >
                        • {ability}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <div className="bg-gradient-to-r from-minecraft-green to-minecraft-blue p-1 rounded-xl inline-block">
            <div className="bg-dark-secondary px-8 py-4 rounded-lg">
              <p className="text-lg font-semibold mb-2">More Classes Coming Soon!</p>
              <p className="text-slate-300">New classes are regularly added based on community feedback and creative ideas.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
