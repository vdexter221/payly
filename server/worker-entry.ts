
import app from './workers';

// Define the static content manifest if it doesn't exist
declare global {
  const __STATIC_CONTENT_MANIFEST: string;
  const __STATIC_CONTENT: {
    [key: string]: any;
  };
}

// Initialize static content if available
try {
  if (typeof __STATIC_CONTENT_MANIFEST !== 'undefined') {
    const manifest = JSON.parse(__STATIC_CONTENT_MANIFEST);
    // This sets up the worker environment with static content
    console.log('Static content manifest loaded successfully');
  }
} catch (err) {
  console.error('Error loading static content manifest:', err);
}

// Export the default fetch handler for Cloudflare Workers
export default {
  fetch: app.fetch,
};
