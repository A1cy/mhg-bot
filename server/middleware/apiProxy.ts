import { createProxyMiddleware } from 'http-proxy-middleware';

export default defineEventHandler(async (event) => {
    createProxyMiddleware({
        target: 'https://mhg-backend.onrender.com', // The actual target server
        changeOrigin: true,
        pathRewrite: {
            '^/api/': '/api/', // You might need to adjust the rewrite rules based on your setup
        },
    })(event.req, event.res, (error) => {
        if (error) {
            console.error('Proxy error:', error);
        }
    });
});
