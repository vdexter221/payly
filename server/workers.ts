
// This file serves as an entry point for Cloudflare Workers
import { Hono } from 'hono';
import { serveStatic } from 'hono/cloudflare-workers';

const app = new Hono();

// Add error handler middleware
app.use('*', async (c, next) => {
  try {
    return await next();
  } catch (error) {
    console.error('Error handling request:', error);
    return c.json({ error: 'Internal Server Error' }, 500);
  }
});

// Serve static files from the public directory
app.get('/assets/*', serveStatic({ root: './' }));

// Handle API requests
app.all('/api/*', async (c) => {
  // Here you would implement your API handlers
  return c.json({ message: 'API endpoint' });
});

// Serve the index.html for all other routes (SPA fallback)
app.get('*', async (c) => {
  try {
    return await serveStatic({ path: './index.html' })(c);
  } catch (error) {
    console.error('Error serving index.html:', error);
    return c.text('Welcome to Payly! The application is currently being set up.', 200);
  }
});

export default app;
