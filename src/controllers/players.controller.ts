import { NextFunction, Request, Response } from "express";
import { PlayerService } from "../services/player.service";

export class PlayerController {
  public async getPlayer(req: Request, res: Response, next: NextFunction) {
    const result = await PlayerService.getPlayers("Teste");

    res.status(200).json(result);
  }
}
