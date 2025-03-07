// This file serves as an entry point for Cloudflare Workers
import { Hono } from 'hono';
import { Context, Next } from 'hono';
import { serveStatic } from 'hono/cloudflare-workers';

// Define the environment type for Cloudflare Workers
interface Env {
  ASSETS: {
    fetch: (request: Request) => Promise<Response>;
  };
}

const app = new Hono<{ Bindings: Env }>();

// Add error handler middleware
app.use('*', async (c: Context, next: Next) => {
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
app.all('/api/*', async (c: Context) => {
  // Here you would implement your API handlers
  return c.json({ message: 'API endpoint' });
});

// Serve the index.html for all other routes (SPA fallback)
app.get('*', async (c: Context) => {
  try {
    // Try to serve index.html from the static assets
    const response = await c.env.ASSETS.fetch(c.req);
    if (response.status === 404) {
      // If the asset is not found, serve the fallback content
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
    return response;
  } catch (error) {
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
