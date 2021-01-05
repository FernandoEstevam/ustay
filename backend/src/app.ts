import express from "express";
import helmet from "helmet";

import Routers from "./routers/Routers";

class App {
  private _app: express.Application;
  private _routers;

  constructor() {
    this._app = express();
    this._routers = Routers.routers;
    this._app.use(helmet());
    this._app.use("/api/v1", this._routers);
  }

  get getApp() {
    return this._app;
  }
}

export default new App();
