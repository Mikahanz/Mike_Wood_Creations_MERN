import mongoose from 'mongoose';
import chalk from 'chalk';

const connectDB = async () => {
  const mongoURI: string = await process.env.MONGO_URI!;
  try {
    const conn = await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });

    console.log(
      chalk.blueBright.underline(`MongoDB Connected: ${conn.connection.host}`)
    );
  } catch (error) {
    console.error(chalk.redBright.bold.underline(`Error: ${error.message}`));
    process.exit(1);
  }
};

export default connectDB;
