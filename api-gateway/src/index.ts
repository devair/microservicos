// api-gateway/index.js
import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';


const app = express();
app.disable("x-powered-by")
app.use(express.json())

app.use('/orders-service', createProxyMiddleware({ target: 'http://orders-service:3333', changeOrigin: true }));
app.use('/payments-service', createProxyMiddleware({ target: 'http://payments-service:3334', changeOrigin: true }));
app.use('/production-service', createProxyMiddleware({ target: 'http://production-service:3335', changeOrigin: true }));

app.get('/', (request, response) => {
  return response.status(200).send('Ok');
})

app.listen(3000, () => {
  console.log('API Gateway running on port 3000');
});
