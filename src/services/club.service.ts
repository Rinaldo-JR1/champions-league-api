import { HttpHelper } from "../utils/http.helper";
import { ClubRepository } from "../repositories/club-repository";
export class ClubService {
  private clubRepository;
  constructor() {
    this.clubRepository = new ClubRepository();
  }
  public async getClubs() {
    const data = await this.clubRepository.getAllClubs();
    return await HttpHelper.ok({ message: "GET clubs", data: data });
  }
}
