import "./src/loadEnvironments.js";
import createDebug from "debug";
import chalk from "chalk";
import startServer from "./src/server/startServer.js";
import connectDatabase from "./src/database/connectDatabase.js";
const debug = createDebug("app");
const port = process.env.PORT!;
const url = process.env.DATABASE_CONNECTION_URL!;

try {
  await startServer(Number(port));
  debug(chalk.bgGreen(`Start with server 'http://localhost:${port}'`));

  await connectDatabase(url);
  debug(chalk.bgGreen("Connected to database"));
} catch (error) {
  debug(chalk.bgRed(error.message));
}
