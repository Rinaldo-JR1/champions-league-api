import { HttpHelper } from "../utils/http.helper";

export class PlayerService {
  constructor() {}

  public static async getPlayers() {
    const data = [
      { name: "Bellingham", position: "CM" },
      { name: "Haaland", position: "ST" },
    ];

    let response = null;
    if (!data) {
      response = await HttpHelper.noContent(data);
    } else {
      response = await HttpHelper.ok(data);
    }

    return response;
  }
}
