import express from "express";
import helmet from "helmet";

import Routers from "./routers/Routers";

import notFound from "./middlewares/NotFound";
import middleware from "./middlewares/middleware";

class App {
  private _app: express.Application;
  private _routers;

  constructor() {
    this._app = express();
    this._app.use(express.json());
    this._routers = Routers.routers;
    this._app.use(helmet());
    this._app.use("/api/v1", this._routers);
    this._app.use(notFound);
    this._app.use(middleware.erro);
  }

  get getApp() {
    return this._app;
  }
}

export default new App();
