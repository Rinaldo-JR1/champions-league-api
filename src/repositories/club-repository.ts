import { ClubModel } from "../models/ClubModel";
import fs from "fs/promises";
import path from "path";
export class ClubRepository {
  private data: ClubModel[] = [];
  constructor() {
    const dataPath = path.join(__dirname, `../data/clubs.json`);
    fs.readFile(dataPath, "utf-8").then((data) => {
      this.data = JSON.parse(data);
    });
  }
  public async getAllClubs(): Promise<ClubModel[]> {
    return this.data;
  }
}
