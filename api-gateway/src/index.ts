// api-gateway/index.js
import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

const app = express();

app.use('/orders-service', createProxyMiddleware({ target: 'http://orders-service:3333', changeOrigin: true }));
app.use('/payments-service', createProxyMiddleware({ target: 'http://payments-service:3334', changeOrigin: true }));
//app.use('/shipping', createProxyMiddleware({ target: 'http://shipping-service:3002', changeOrigin: true }));

app.listen(3000, () => {
  console.log('API Gateway running on port 3000');
});
