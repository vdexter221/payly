
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
    // Try to serve index.html
    return await serveStatic({ path: './index.html' })(c);
  } catch (error) {
    // Fallback content when index.html can't be served
    console.error('Error serving index.html:', error);
    return c.html(`
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Payly</title>
          <style>
            body { font-family: system-ui, sans-serif; margin: 0; padding: 2rem; text-align: center; }
            h1 { color: #0066ff; }
          </style>
        </head>
        <body>
          <h1>Welcome to Payly</h1>
          <p>The application is currently being set up.</p>
        </body>
      </html>
    `, 200);
  }
});

export default app;
