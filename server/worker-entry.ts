
import app from './workers';

// Export the default fetch handler for Cloudflare Workers
export default {
  fetch: app.fetch,
};
