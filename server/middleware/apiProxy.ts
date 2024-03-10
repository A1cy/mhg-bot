import { createProxyMiddleware } from 'http-proxy-middleware';

export default defineEventHandler((event) => {
    return new Promise((resolve, reject) => {
        const proxy = createProxyMiddleware({
            target: 'https://mhg-backend.onrender.com', // The actual target server
            changeOrigin: true,
            pathRewrite: {
                '^/api/': '/', // Adjust this as necessary
            },
        });

        proxy(event.req, event.res, (result) => {
            if (result instanceof Error) {
                console.error('Proxy error:', result);
                reject(result);
            } else {
                resolve(result);
            }
        });
    });
});
