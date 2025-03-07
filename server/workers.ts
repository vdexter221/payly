// This file serves as an entry point for Cloudflare Workers
import { Hono } from 'hono';
import { Context, Next } from 'hono';

// Define the environment type for Cloudflare Workers
interface Env {
  __STATIC_CONTENT: KVNamespace;
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
    // Get the path from the request
    const url = new URL(c.req.url);
    const path = url.pathname;
    
    console.log(`Attempting to serve: ${path}`);

    // Try to get the file from static content
    const file = await c.env.__STATIC_CONTENT.get(path, {
      type: 'arrayBuffer',
    });

    if (file) {
      console.log(`Found file: ${path}`);
      // Determine content type based on file extension
      const contentType = getContentType(path);
      return new Response(file, {
        headers: {
          'Content-Type': contentType,
          'Cache-Control': 'public, max-age=31536000',
          'Access-Control-Allow-Origin': '*',
        },
      });
    }

    console.log(`File not found: ${path}, trying index.html`);

    // If file not found, try index.html
    const indexFile = await c.env.__STATIC_CONTENT.get('/index.html', {
      type: 'arrayBuffer',
    });

    if (indexFile) {
      console.log('Found index.html, serving as fallback');
      return new Response(indexFile, {
        headers: {
          'Content-Type': 'text/html',
          'Cache-Control': 'public, max-age=31536000',
          'Access-Control-Allow-Origin': '*',
        },
      });
    }

    console.log('No files found, serving fallback content');
    // If neither exists, return the fallback content
    return serveFallbackContent(c);
  } catch (error) {
    console.error('Error serving content:', error);
    return serveFallbackContent(c);
  }
});

// Helper function to serve fallback content
function serveFallbackContent(c: Context) {
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

// Helper function to determine content type
function getContentType(path: string): string {
  const ext = path.split('.').pop()?.toLowerCase();
  const contentTypes: Record<string, string> = {
    'html': 'text/html',
    'css': 'text/css',
    'js': 'application/javascript',
    'json': 'application/json',
    'png': 'image/png',
    'jpg': 'image/jpeg',
    'jpeg': 'image/jpeg',
    'gif': 'image/gif',
    'svg': 'image/svg+xml',
    'ico': 'image/x-icon',
    'woff': 'font/woff',
    'woff2': 'font/woff2',
    'ttf': 'font/ttf',
    'eot': 'application/vnd.ms-fontobject',
    'otf': 'font/otf',
    'webp': 'image/webp',
    'avif': 'image/avif',
    'apng': 'image/apng',
  };
  return contentTypes[ext || ''] || 'application/octet-stream';
}

export default app;
