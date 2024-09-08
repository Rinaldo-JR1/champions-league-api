import express, { NextFunction, Request, Response } from "express";
import { playerRoutes } from "../routes/player.routes";
import { clubsRouter } from "../routes/clubs.routes";
import cors, { CorsOptions } from "cors";
class App {
  private app: express.Application;
  private port: number;
  private baseUrl = "/api";

  constructor(port: number) {
    this.app = express();
    this.port = port;
    const corsOptions: CorsOptions = {
      origin: ["http://localhost:3000"],
    };
    this.app.use(cors(corsOptions));
    this.app.use(express.json());
    this.app.use((req: Request, res: Response, next: NextFunction) => {
      console.log(`Ip: ${req.ip} || Request: ${req.method} ${req.path}`);
      next();
    });
    this.app.use(`${this.baseUrl}/players`, playerRoutes);
    this.app.use(`${this.baseUrl}/clubs`, clubsRouter);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server is running on port ${this.port}`);
    });
  }
}

export { App };
