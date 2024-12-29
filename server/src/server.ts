import { Server } from 'http';
import mongoose from 'mongoose';
import app from './app';
import config from './config';
// import { errorlogger, logger } from './shared/logger';

process.on('uncaughtException', (error) => {
  // errorlogger.error(error);
  console.error(error);
  process.exit(1);
});

let server: Server;

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
async function bootstrap() {
  try {
    await mongoose.connect(config.database_url as string);
    // logger.info(`Database is connected successfully!`);
    console.log(`Database is connected successfully!`);

    server = app.listen(config.port, () => {
      // logger.info(
      //   `[server]: Server is running at http://localhost:${config?.port}`
      // );
      console.log(
        `[server]: Server is running at http://localhost:${config?.port}`
      );
    });
  } catch (err) {
    // errorlogger.error('Failed to connect database', err);
    console.error('Failed to connect database', err);
  }

  process.on('unhandledRejection', (error) => {
    if (server) {
      server.close(() => {
        // errorlogger.error(error);
        console.error(error);
        process.exit(1);
      });
    } else {
      process.exit(1);
    }
  });
}

bootstrap();

process.on('SIGTERM', () => {
  // logger.info('SIGTERM is received');
  console.log('SIGTERM is received');
  if (server) {
    server.close();
  }
});
