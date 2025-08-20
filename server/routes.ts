import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertSuggestionSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Suggestions endpoint
  app.post("/api/suggestions", async (req, res) => {
    try {
      const validatedData = insertSuggestionSchema.parse(req.body);
      const suggestion = await storage.createSuggestion(validatedData);
      
      // Here you would typically send an email
      // For now, we'll just log it and return success
      console.log("New suggestion received:", suggestion);
      
      res.json({ 
        success: true, 
        message: "Suggestion submitted successfully!",
        id: suggestion.id 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Invalid data provided",
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Failed to submit suggestion" 
        });
      }
    }
  });

  // Get all suggestions (for admin purposes)
  app.get("/api/suggestions", async (req, res) => {
    try {
      const suggestions = await storage.getAllSuggestions();
      res.json(suggestions);
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch suggestions" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
