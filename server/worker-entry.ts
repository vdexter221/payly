
import app from './workers';

// Define the static content manifest if it doesn't exist
declare global {
  const __STATIC_CONTENT_MANIFEST: string;
  const __STATIC_CONTENT: {
    [key: string]: any;
  };
}

// Export the default fetch handler for Cloudflare Workers
export default {
  fetch: app.fetch,
};
