export class PlayerService {
  constructor() {}

  public static async getPlayers() {
    return [
      { name: "Bellingham", position: "CM" },
      { name: "Haaland", position: "ST" },
    ];
  }
}
