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

// Handle API requests
app.all('/api/*', async (c: Context) => {
  // Here you would implement your API handlers
  return c.json({ message: 'API endpoint' });
});

// Serve static files and handle SPA routing
app.get('*', async (c: Context) => {
  try {
    // First try to serve the requested file
    const response = await c.env.ASSETS.fetch(c.req);
    
    // If the file exists, return it
    if (response.status !== 404) {
      return response;
    }

    // If the file doesn't exist, try to serve index.html
    const indexResponse = await c.env.ASSETS.fetch(new Request(new URL('/index.html', c.req.url)));
    
    // If index.html exists, return it
    if (indexResponse.status !== 404) {
      return indexResponse;
    }

    // If neither exists, return the fallback content
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
  } catch (error) {
    console.error('Error serving content:', error);
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
