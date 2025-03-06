import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

(async () => {
  const server = await registerRoutes(app);

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
    throw err;
  });

  // importantly only setup vite in development and after
  // setting up all the other routes so the catch-all route
  // doesn't interfere with the other routes
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  // Try to serve on port 5000 first, then fallback to other ports
  const tryPort = (port) => {
    // Close any existing connection before trying to listen
    server.close();
    
    server.listen({
      port,
      host: "0.0.0.0",
      reusePort: true,
    }, () => {
      log(`serving on port ${port}`);
    }).on('error', (err) => {
      if (err.code === 'EADDRINUSE') {
        log(`Port ${port} is in use, trying port ${port + 1}`);
        tryPort(port + 1);
      } else {
        throw err;
      }
    });
  };
  
  // Check if running in Cloudflare Workers environment
  if (typeof process.env.REPLIT_DEPLOYMENT !== 'undefined') {
    log('Running in deployment environment');
    // Use port from environment or default to 8787 for Cloudflare Workers
    const port = process.env.PORT || 8787;
    server.listen({
      port: parseInt(port.toString()),
      host: "0.0.0.0",
    }, () => {
      log(`serving on port ${port} in deployment mode`);
    });
  } else {
    // Start with port 5000 for development
    tryPort(5000);
  }
})();
