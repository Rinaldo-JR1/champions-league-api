import { PlayerModel } from "./../models/PlayerModel";
import { database } from "../data";

export class PlayerRepository {
  public async findAllPlayers(): Promise<PlayerModel[]> {
    return database;
  }
  public async findPlayerById(id: number): Promise<PlayerModel | undefined> {
    return database.find((player) => player.id === id);
  }
  public async addPlayer(player: PlayerModel): Promise<void> {
    try {
      database.push(player);
    } catch (error) {
      console.error(error);
    }
    return;
  }
  public async deletePlayer(id: number): Promise<boolean> {
    try {
      const index = database.findIndex((player) => player.id === id);
      if (index === -1) {
        return false;
      }
      database.splice(index, 1);
    } catch (error) {
      console.error(error);
      return false;
    }
    return true;
  }
}
