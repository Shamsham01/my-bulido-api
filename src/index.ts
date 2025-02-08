import express from 'express';
import bodyParser from 'body-parser';
import authorizationRoutes from './routes/authorization.js';
import fungibleRoutes from './routes/fungible.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/authorization', authorizationRoutes);
app.use('/fungible', fungibleRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
