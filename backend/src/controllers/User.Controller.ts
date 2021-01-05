import { Request, Response } from "express";

class User {
  index(req: Request, res: Response) {
    return res.status(200).json({
      name: "Fernando A. Estevam",
      idade: 35,
    });
  }

  show(req: Request, res: Response) {
    return res.status(200).json({
      nome: "Fernando",
    });
  }
}

export default new User();
