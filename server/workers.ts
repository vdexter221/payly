
// This file serves as an entry point for Cloudflare Workers
import { Hono } from 'hono';
import { serveStatic } from 'hono/cloudflare-workers';
import path from 'path';

const app = new Hono();

// Serve static files
app.get('/*', serveStatic({ root: './public' }));

// Handle API requests
app.all('/api/*', async (c) => {
  // Here you would implement your API handlers or proxy to your Express app
  return c.json({ message: 'API endpoint' });
});

// Handle all other routes for SPA
app.get('*', serveStatic({ path: './public/index.html' }));

export default app;
