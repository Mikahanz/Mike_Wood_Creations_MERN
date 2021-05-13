import express, { Application } from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import chalk from 'chalk';
import cors from 'cors';
import productsRouter from './routes/product';
import connectDB from './config/db';
import { notFoundError, allErrorsHandler } from './middlewares/errorHandler';

// This allows us to use environment variables
dotenv.config();

// Connect to MongoDB using Mongoose
connectDB();

// App express application
const app: Application = express();

// Node environment
const nodeEnv = process.env.NODE_ENV;
if (nodeEnv === 'development') {
  app.use(morgan('dev'));
}

// This will allow accept json data in the body from the request
app.use(express.json());

// Enable CORS
app.use(cors());

//? Routes starts here-------------------------------

// Product Routes
app.use('/api/v1/products', productsRouter);

//? Routes ends here---------------------------------

// Error Handling
app.use(notFoundError);
app.use(allErrorsHandler);

//todo ----------------------------------------------
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    chalk.magenta.bold(
      `Node Server Running On Port ${PORT}, In '${nodeEnv}' Mode`
    )
  );
});
