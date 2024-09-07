export class PlayerService {
  constructor() {}

  public static async getPlayers(teste: string) {
    console.log(teste);
    return [
      { name: "Bellingham", position: "CM" },
      { name: "Haaland", position: "ST" },
    ];
  }
}
