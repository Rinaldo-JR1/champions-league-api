import { PlayerRepository } from "../repositories/players-repository";
import { HttpHelper } from "../utils/http.helper";

export class PlayerService {
  constructor() {}
  private playerRepository = new PlayerRepository();

  public async getPlayers() {
    const data = await this.playerRepository.findAllPlayers();
    let response = null;
    if (!data) {
      response = await HttpHelper.noContent(data);
    } else {
      response = await HttpHelper.ok(data);
    }

    return response;
  }
}
