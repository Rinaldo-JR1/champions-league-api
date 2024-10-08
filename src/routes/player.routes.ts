import { Router } from "express";

import { PlayerController } from "../controllers/players.controller";

const playerRoutes = Router();
const playerController = new PlayerController();

playerRoutes.get("/", playerController.getPlayer);
playerRoutes.get("/:id", playerController.getPlayerById);
playerRoutes.post("/register", playerController.addPlayer);
playerRoutes.delete("/delete/:id", playerController.deletePlayer);

playerRoutes.put("/update/:id", playerController.updatePlayer);

export { playerRoutes };
