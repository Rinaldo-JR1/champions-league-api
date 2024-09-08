import { Router } from "express";
import { ClubController } from "../controllers/clubs.controller";

const clubsRouter = Router();
const clubsController = new ClubController();
clubsRouter.get("/", clubsController.getClubs);

export { clubsRouter };
