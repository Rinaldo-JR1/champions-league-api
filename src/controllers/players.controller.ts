import { NextFunction, Request, Response } from "express";
import { PlayerService } from "../services/player.service";

export class PlayerController {
  public async getPlayer(req: Request, res: Response, next: NextFunction) {
    const httpResponse = await PlayerService.getPlayers();
    return res.status(httpResponse.statusCode).json(httpResponse.body);
  }
}
