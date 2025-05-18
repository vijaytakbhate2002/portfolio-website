import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post('/api/contact', async (req, res) => {
    try {
      const { name, email, subject, message } = req.body as ContactMessage;
      
      // Validate required fields
      if (!name || !email || !subject || !message) {
        return res.status(400).json({ 
          message: 'All fields are required (name, email, subject, message)'
        });
      }
      
      // Here you could add email sending logic or database storage
      // For now, we'll just return a success response
      console.log('Contact form submission:', { name, email, subject, message });
      
      return res.status(200).json({ 
        message: 'Message received successfully'
      });
    } catch (error) {
      console.error('Error processing contact form:', error);
      return res.status(500).json({ 
        message: 'An error occurred while processing your message'
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
