import { PlayerModel } from "./../models/PlayerModel";
import { Players } from "../data/players";

export class PlayerRepository {
  public async findAllPlayers(): Promise<PlayerModel[]> {
    return Players;
  }
  public async findPlayerById(id: number): Promise<PlayerModel | undefined> {
    return Players.find((player) => player.id === id);
  }
  public async addPlayer(player: PlayerModel): Promise<void> {
    try {
      Players.push(player);
    } catch (error) {
      console.error(error);
    }
    return;
  }
  public async deletePlayer(id: number): Promise<boolean> {
    try {
      const index = Players.findIndex((player) => player.id === id);
      if (index === -1) {
        return false;
      }
      Players.splice(index, 1);
    } catch (error) {
      console.error(error);
      return false;
    }
    return true;
  }
  public async updatePlayer(id: number, player: PlayerModel): Promise<boolean> {
    try {
      const index = Players.findIndex((player) => player.id === id);
      if (index === -1) {
        return false;
      }
      Players[index] = { ...Players[index], ...player };
    } catch (error) {
      console.error(error);
      return false;
    }
    return true;
  }
}
