
// This file serves as an entry point for Cloudflare Workers
import { Hono } from 'hono';
import { serveStatic } from 'hono/cloudflare-workers';

const app = new Hono();

// Serve static files from the public directory
app.get('/assets/*', serveStatic({ root: './' }));

// Handle API requests
app.all('/api/*', async (c) => {
  // Here you would implement your API handlers
  return c.json({ message: 'API endpoint' });
});

// Serve the index.html for all other routes (SPA fallback)
app.get('*', serveStatic({ path: './index.html' }));

export default app;
