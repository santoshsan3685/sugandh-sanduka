import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, real, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  scent: string;
  inStock: boolean;
  featured: boolean;
  rating: number;
  reviewCount: number;
}

export interface Collection {
  id: string;
  name: string;
  description: string;
  image: string;
  productCount: number;
}

export interface CartItem {
  productId: string;
  quantity: number;
  product: Product;
}

export interface Cart {
  items: CartItem[];
  subtotal: number;
  itemCount: number;
}

export const insertProductSchema = z.object({
  name: z.string().min(1),
  description: z.string().min(1),
  price: z.number().positive(),
  originalPrice: z.number().positive().optional(),
  image: z.string().min(1),
  category: z.string().min(1),
  scent: z.string().min(1),
  inStock: z.boolean().default(true),
  featured: z.boolean().default(false),
  rating: z.number().min(0).max(5).default(4.5),
  reviewCount: z.number().int().min(0).default(0),
});

export type InsertProduct = z.infer<typeof insertProductSchema>;

export const addToCartSchema = z.object({
  productId: z.string().min(1),
  quantity: z.number().int().positive().default(1),
});

export type AddToCart = z.infer<typeof addToCartSchema>;

export const newsletterSchema = z.object({
  email: z.string().email(),
});

export type NewsletterSubscription = z.infer<typeof newsletterSchema>;
