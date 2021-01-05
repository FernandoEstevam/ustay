import { Request, Response, NextFunction } from "express";
import ErroHandler from "../middlewares/ErroHandler";

const notFound = (req: Request, res: Response, next: NextFunction) => {
  const erro = new ErroHandler(404, "Not found");

  next(erro);
};

export default notFound;
