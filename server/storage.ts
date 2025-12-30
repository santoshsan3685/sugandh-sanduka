import { type User, type InsertUser, type Product, type Collection } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  getProducts(): Promise<Product[]>;
  getFeaturedProducts(): Promise<Product[]>;
  getProduct(id: string): Promise<Product | undefined>;
  getCollections(): Promise<Collection[]>;
  getCollection(id: string): Promise<Collection | undefined>;
  addNewsletterSubscription(email: string): Promise<void>;
}

const sampleProducts: Product[] = [
  {
    id: "1",
    name: "Ocean Breeze",
    description: "Fresh and invigorating ocean scent that brings the sea to your car",
    price: 299,
    image: "/api/images/product1",
    category: "fresh",
    scent: "Fresh & Clean",
    inStock: true,
    featured: true,
    rating: 4.8,
    reviewCount: 124,
  },
  {
    id: "2",
    name: "Lavender Dreams",
    description: "Calming lavender fragrance for a relaxing drive",
    price: 349,
    originalPrice: 449,
    image: "/api/images/product2",
    category: "floral",
    scent: "Floral",
    inStock: true,
    featured: true,
    rating: 4.9,
    reviewCount: 89,
  },
  {
    id: "3",
    name: "Cool Mint",
    description: "Refreshing mint scent that energizes your senses",
    price: 249,
    image: "/api/images/product3",
    category: "fresh",
    scent: "Fresh & Minty",
    inStock: true,
    featured: true,
    rating: 4.7,
    reviewCount: 156,
  },
  {
    id: "4",
    name: "Sandalwood Elite",
    description: "Premium sandalwood fragrance with warm woody notes",
    price: 499,
    image: "/api/images/product4",
    category: "premium",
    scent: "Woody",
    inStock: true,
    featured: true,
    rating: 4.9,
    reviewCount: 67,
  },
];

const sampleCollections: Collection[] = [
  {
    id: "fresh",
    name: "Fresh & Clean",
    description: "Ocean breeze, eucalyptus, mint, and other refreshing scents",
    image: "/api/images/collection1",
    productCount: 2,
  },
  {
    id: "floral",
    name: "Floral Garden",
    description: "Lavender, jasmine, rose, and other delicate floral fragrances",
    image: "/api/images/collection2",
    productCount: 1,
  },
  {
    id: "premium",
    name: "Premium Collection",
    description: "Leather, sandalwood, and exotic blends for the discerning driver",
    image: "/api/images/collection3",
    productCount: 1,
  },
];

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private products: Map<string, Product>;
  private collections: Map<string, Collection>;
  private newsletterEmails: Set<string>;

  constructor() {
    this.users = new Map();
    this.products = new Map();
    this.collections = new Map();
    this.newsletterEmails = new Set();

    sampleProducts.forEach((product) => {
      this.products.set(product.id, product);
    });

    sampleCollections.forEach((collection) => {
      this.collections.set(collection.id, collection);
    });
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

  async getProducts(): Promise<Product[]> {
    return Array.from(this.products.values());
  }

  async getFeaturedProducts(): Promise<Product[]> {
    return Array.from(this.products.values()).filter((p) => p.featured);
  }

  async getProduct(id: string): Promise<Product | undefined> {
    return this.products.get(id);
  }

  async getCollections(): Promise<Collection[]> {
    return Array.from(this.collections.values());
  }

  async getCollection(id: string): Promise<Collection | undefined> {
    return this.collections.get(id);
  }

  async addNewsletterSubscription(email: string): Promise<void> {
    this.newsletterEmails.add(email);
  }
}

export const storage = new MemStorage();
