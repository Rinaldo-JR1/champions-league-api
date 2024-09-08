import { PlayerModel } from "../models/PlayerModel";
import { PlayerRepository } from "../repositories/players-repository";
import { HttpHelper } from "../utils/http.helper";

export class PlayerService {
  constructor() {}
  private playerRepository = new PlayerRepository();

  public async getPlayers() {
    const data = await this.playerRepository.findAllPlayers();

    if (!data) {
      return await HttpHelper.noContent({ message: "No players found" });
    }
    return await HttpHelper.ok(data);
  }

  public async getPlayerById(id: number) {
    const data = await this.playerRepository.findPlayerById(id);
    if (!data) {
      return await HttpHelper.notFound({ message: "Player not found", id: id });
    }
    return await HttpHelper.ok(data);
  }

  public async addPlayer(player: PlayerModel) {
    await this.playerRepository.addPlayer(player);
    if (!player) {
      return await HttpHelper.badRequest({ message: "Player not added" });
    }
    return await HttpHelper.created({ message: "Player added", data: player });
  }
  public async deletePlayer(id: number) {
    if (!id) {
      return await HttpHelper.badRequest({ message: "Player id is required" });
    }
    const deleted = await this.playerRepository.deletePlayer(id);
    if (deleted) {
      return await HttpHelper.ok({ message: "Player deleted", id: id });
    }
    return await HttpHelper.notFound({ message: "Player not found", id: id });
  }
}
