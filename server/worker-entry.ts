
import app from './workers';

// Define the static content manifest if it doesn't exist
declare global {
  var __STATIC_CONTENT_MANIFEST: string | undefined;
  var __STATIC_CONTENT: {
    [key: string]: any;
  } | undefined;
}

// Initialize static content if available
let manifest: Record<string, string> = {};
try {
  if (typeof __STATIC_CONTENT_MANIFEST !== 'undefined') {
    manifest = JSON.parse(__STATIC_CONTENT_MANIFEST);
    console.log('Static content manifest loaded successfully');
  } else {
    console.log('Static content manifest not available');
  }
} catch (err) {
  console.error('Error loading static content manifest:', err);
}

// Export the default fetch handler for Cloudflare Workers
export default {
  fetch: app.fetch,
};
