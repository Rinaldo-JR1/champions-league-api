import { NextFunction, Request, Response } from "express";
import { PlayerService } from "../services/player.service";
import { PlayerModel } from "../models/PlayerModel";

export class PlayerController {
  private playerService: PlayerService;

  constructor() {
    this.playerService = new PlayerService();
    this.getPlayer = this.getPlayer.bind(this);
    this.getPlayerById = this.getPlayerById.bind(this);
    this.addPlayer = this.addPlayer.bind(this);
    this.deletePlayer = this.deletePlayer.bind(this);
    this.updatePlayer = this.updatePlayer.bind(this);
  }

  public async getPlayer(req: Request, res: Response, next: NextFunction) {
    const httpResponse = await this.playerService.getPlayers();
    return res.status(httpResponse.statusCode).json(httpResponse.body);
  }

  public async getPlayerById(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    const httpResponse = await this.playerService.getPlayerById(parseInt(id));
    return res.status(httpResponse.statusCode).json(httpResponse.body);
  }
  public async addPlayer(req: Request, res: Response, next: NextFunction) {
    const player: PlayerModel = req.body;
    const httpReponse = await this.playerService.addPlayer(req.body);
    return res.status(httpReponse.statusCode).json(httpReponse.body);
  }
  public async deletePlayer(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    const httpResponse = await this.playerService.deletePlayer(parseInt(id));
    return res.status(httpResponse.statusCode).json(httpResponse.body);
  }
  public async updatePlayer(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    const player: PlayerModel = req.body;
    const httpResponse = await this.playerService.updatePlayer(parseInt(id), player);
    return res.status(httpResponse.statusCode).json(httpResponse.body);
  }
}
