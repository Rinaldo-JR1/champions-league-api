import { NextFunction, Request, Response } from "express";
import { ClubService } from "../services/club.service";

export class ClubController {
  private clubService;
  constructor() {
    this.clubService = new ClubService();
    this.getClubs = this.getClubs.bind(this);
  }

  public async getClubs(req: Request, res: Response, next: NextFunction) {
    const httpResponse = await this.clubService.getClubs();
    return res.status(httpResponse.statusCode).json(httpResponse.body);
  }
}
