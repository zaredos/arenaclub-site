import { Box } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dark-secondary border-t border-slate-700 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Box className="minecraft-green text-3xl" />
            <span className="font-gaming text-2xl font-bold minecraft-green">ArenaClub</span>
          </div>
          
          <p className="text-slate-400 mb-6 max-w-2xl mx-auto">
            The ultimate vanilla Minecraft PvP experience with unique class-based combat. Join thousands of players in epic battles!
          </p>
          
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="font-mono text-xl font-bold minecraft-green" data-testid="footer-server-ip">
                arenaclub.club
              </div>
              <div className="text-sm text-slate-400">Server IP</div>
            </div>
            <div className="text-center">
              <div className="font-mono text-xl font-bold minecraft-blue" data-testid="footer-version">
                Latest
              </div>
              <div className="text-sm text-slate-400">Minecraft Version</div>
            </div>
            <div className="text-center">
              <div className="font-mono text-xl font-bold minecraft-orange" data-testid="footer-status">
                Online
              </div>
              <div className="text-sm text-slate-400">Server Status</div>
            </div>
          </div>
          
          <div className="border-t border-slate-700 pt-6">
            <p className="text-sm text-slate-500">
              © 2024 ArenaClub. All rights reserved. Not affiliated with Mojang or Microsoft.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
