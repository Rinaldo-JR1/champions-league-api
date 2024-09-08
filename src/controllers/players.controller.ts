import { NextFunction, Request, Response } from "express";
import { PlayerService } from "../services/player.service";

export class PlayerController {
  private playerService: PlayerService;

  constructor() {
    this.playerService = new PlayerService();
    this.getPlayer = this.getPlayer.bind(this);
    this.getPlayerById = this.getPlayerById.bind(this);
  }

  public async getPlayer(req: Request, res: Response, next: NextFunction) {
    const httpResponse = await this.playerService.getPlayers();
    return res.status(httpResponse.statusCode).json(httpResponse.body);
  }
  public async getPlayerById(req: Request, res: Response, next: NextFunction) {
    const httpResponse = await this.playerService.getPlayers();
    return res.status(httpResponse.statusCode).json(httpResponse.body);
  }
}
