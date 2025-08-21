import { type User, type InsertUser, type Suggestion, type InsertSuggestion } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createSuggestion(suggestion: InsertSuggestion): Promise<Suggestion>;
  getAllSuggestions(): Promise<Suggestion[]>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private suggestions: Map<string, Suggestion>;

  constructor() {
    this.users = new Map();
    this.suggestions = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createSuggestion(insertSuggestion: InsertSuggestion): Promise<Suggestion> {
    const id = randomUUID();
    const suggestion: Suggestion = {
      ...insertSuggestion,
      id,
      createdAt: new Date(),
      email: insertSuggestion.email ?? null,
    };
    this.suggestions.set(id, suggestion);
    return suggestion;
  }

  async getAllSuggestions(): Promise<Suggestion[]> {
    return Array.from(this.suggestions.values());
  }
}

export const storage = new MemStorage();
