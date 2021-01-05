import { Request, Response } from "express";
import ErroHandler from "../middlewares/ErroHandler";

class Middlware {
  erro(err: ErroHandler, req: Request, res: Response) {
    return res.status(err.statusCode || 500).json({
      status: "erro",
      statusCode: err.statusCode,
      message: err.message,
    });
  }
}

export default new Middlware();
