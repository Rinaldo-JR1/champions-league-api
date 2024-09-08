import express, { NextFunction, Request, Response } from "express";
import { playerRoutes } from "../routes/player.routes";

class App {
  private app: express.Application;
  private port: number;
  private baseUrl = "/api";

  constructor(port: number) {
    this.app = express();
    this.port = port;
    this.app.use(express.json());
    this.app.use((req: Request, res: Response, next: NextFunction) => {
      console.log(`Ip: ${req.ip} || Request: ${req.method} ${req.path}`);
      next();
    });
    this.app.use(`${this.baseUrl}/players`, playerRoutes);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server is running on port ${this.port}`);
    });
  }
}

export { App };
