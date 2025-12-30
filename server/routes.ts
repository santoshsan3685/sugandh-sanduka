import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { newsletterSchema } from "@shared/schema";
import path from "path";
import fs from "fs";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Get all products
  app.get("/api/products", async (req, res) => {
    try {
      const featured = req.query.featured === "true";
      const products = featured
        ? await storage.getFeaturedProducts()
        : await storage.getProducts();
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch products" });
    }
  });

  // Get single product
  app.get("/api/products/:id", async (req, res) => {
    try {
      const product = await storage.getProduct(req.params.id);
      if (!product) {
        return res.status(404).json({ error: "Product not found" });
      }
      res.json(product);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch product" });
    }
  });

  // Get all collections
  app.get("/api/collections", async (req, res) => {
    try {
      const collections = await storage.getCollections();
      res.json(collections);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch collections" });
    }
  });

  // Get single collection
  app.get("/api/collections/:id", async (req, res) => {
    try {
      const collection = await storage.getCollection(req.params.id);
      if (!collection) {
        return res.status(404).json({ error: "Collection not found" });
      }
      res.json(collection);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch collection" });
    }
  });

  // Newsletter subscription
  app.post("/api/newsletter", async (req, res) => {
    try {
      const result = newsletterSchema.safeParse(req.body);
      if (!result.success) {
        return res.status(400).json({ error: "Invalid email address" });
      }
      await storage.addNewsletterSubscription(result.data.email);
      res.json({ success: true, message: "Successfully subscribed" });
    } catch (error) {
      res.status(500).json({ error: "Failed to subscribe" });
    }
  });

  // Serve product images from generated images
  const imageMap: Record<string, { folder: string; filename: string }> = {
    product1: { folder: "generated_images", filename: "ocean_blue_car_freshener.png" },
    product2: { folder: "generated_images", filename: "lavender_purple_car_freshener.png" },
    product3: { folder: "generated_images", filename: "green_mint_car_freshener.png" },
    product4: { folder: "generated_images", filename: "sandalwood_brown_car_freshener.png" },
    collection1: { folder: "generated_images", filename: "ocean_blue_car_freshener.png" },
    collection2: { folder: "generated_images", filename: "lavender_purple_car_freshener.png" },
    collection3: { folder: "generated_images", filename: "sandalwood_brown_car_freshener.png" },
  };

  app.get("/api/images/:id", (req, res) => {
    const imageInfo = imageMap[req.params.id];
    if (!imageInfo) {
      return res.status(404).send("Image not found");
    }
    const imagePath = path.join(process.cwd(), "attached_assets", imageInfo.folder, imageInfo.filename);
    if (fs.existsSync(imagePath)) {
      res.sendFile(imagePath);
    } else {
      res.status(404).send("Image not found");
    }
  });

  return httpServer;
}
