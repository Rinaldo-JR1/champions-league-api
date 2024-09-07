import express, { Request, Response } from "express";
import { playerRoutes } from "../routes/player.routes";

class App {
  private app: express.Application;
  private port: number;
  private baseUrl = "/api";
  constructor(port: number) {
    this.app = express();
    this.port = port;
    this.app.get("/", (req: Request, res: Response) => {
      res.status(200).json({ player: "Bellingham" });
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
