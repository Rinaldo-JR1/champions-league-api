import { PlayerModel } from "./../models/PlayerModel";
import { database } from "../data";

export class PlayerRepository {
  public async findAllPlayers(): Promise<PlayerModel[]> {
    return database;
  }
  public async findPlayerById(id: number): Promise<PlayerModel | undefined> {
    return database.find((player) => player.id === id);
  }
}
