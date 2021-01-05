import dotenv from "dotenv";

import App from "../app";

dotenv.config({
  path: ".env",
});

const server = App.getApp;

if (!process.env.APP_PORT) {
  process.exit(1);
}

const PORT: number = parseInt(process.env.APP_PORT as string, 10);

server.listen(PORT, () =>
  console.log(`Server listening on: http://localhost:${PORT}`)
);
