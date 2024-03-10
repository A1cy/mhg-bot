import { createProxyMiddleware } from 'http-proxy-middleware'
export default defineEventHandler(async (event) => {
    await new Promise((resolve, reject) => {
        createProxyMiddleware({
            target: process.env.SERVER_DOMAIN,
            changeOrigin: true, // This might be necessary for Vercel deployments
            pathRewrite: {
                '^/api/': '', // assuming you want to strip '/api/' from the proxied request
            },
        })(event.node.req, event.node.res, (err) => {
            if (err) reject(err);
            else resolve(true);
        });
    });
});
