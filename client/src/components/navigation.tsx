import { useState } from "react";
import { Menu, X, Box } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-dark-primary/95 backdrop-blur-sm border-b border-slate-700">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Box className="text-minecraft-green text-2xl" />
            <span className="font-gaming text-xl font-bold minecraft-green">ArenaClub</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')} 
              className="hover:text-minecraft-green transition-colors duration-300"
              data-testid="nav-home"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('features')} 
              className="hover:text-minecraft-green transition-colors duration-300"
              data-testid="nav-features"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('classes')} 
              className="hover:text-minecraft-green transition-colors duration-300"
              data-testid="nav-classes"
            >
              Classes
            </button>
            <button 
              onClick={() => scrollToSection('join')} 
              className="hover:text-minecraft-green transition-colors duration-300"
              data-testid="nav-join"
            >
              Join Now
            </button>
            <button 
              onClick={() => scrollToSection('suggestions')} 
              className="hover:text-minecraft-green transition-colors duration-300"
              data-testid="nav-suggestions"
            >
              Suggestions
            </button>
          </div>
          
          <button 
            className="md:hidden text-slate-300 hover:text-minecraft-green"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            data-testid="mobile-menu-toggle"
          >
            {isMenuOpen ? <X className="text-xl" /> : <Menu className="text-xl" />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-slate-700 pt-4">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('home')} 
                className="text-left hover:text-minecraft-green transition-colors duration-300"
                data-testid="mobile-nav-home"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('features')} 
                className="text-left hover:text-minecraft-green transition-colors duration-300"
                data-testid="mobile-nav-features"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('classes')} 
                className="text-left hover:text-minecraft-green transition-colors duration-300"
                data-testid="mobile-nav-classes"
              >
                Classes
              </button>
              <button 
                onClick={() => scrollToSection('join')} 
                className="text-left hover:text-minecraft-green transition-colors duration-300"
                data-testid="mobile-nav-join"
              >
                Join Now
              </button>
              <button 
                onClick={() => scrollToSection('suggestions')} 
                className="text-left hover:text-minecraft-green transition-colors duration-300"
                data-testid="mobile-nav-suggestions"
              >
                Suggestions
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
