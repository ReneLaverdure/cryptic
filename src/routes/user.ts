import { Router } from "express";
import { getUsers } from "../controllers/user";

const router = Router();

router.post("/");

router.get("/", getUsers);

router.patch("/:id");

router.delete("/:id");

export default router;
