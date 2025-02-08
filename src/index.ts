// src/index.ts
import express from 'express';
import bodyParser from 'body-parser';
import authorizationRoutes from './routes/authorization';
import fungibleRoutes from './routes/fungible';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Mount routes
app.use('/authorization', authorizationRoutes);
app.use('/fungible', fungibleRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
