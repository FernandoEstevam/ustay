import { Router } from "express";
import User from "../controllers/User.Controller";

class Routers {
  private _routers = Router();
  private _user = User;

  constructor() {
    this._configure();
  }

  get routers() {
    return this._routers;
  }

  private _configure() {
    this._routers.get("/", (req, res) => {
      return res.status(200).json({
        api: "Ustay API",
        version: "Version 1.0.0",
      });
    });

    this._routers.get("/user", this._user.index);
  }
}

export default new Routers();
