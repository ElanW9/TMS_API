import express from "express";
const router = express.Router();
import {
  getAllSingers,
  getSingerById,
  postSinger,
  updateSinger,
  deleteSinger,
} from "../controllers/singerController.js";

router.get("/", getAllSingers);

router.get(`/:id`, getSingerById);

router.post("/", postSinger);

router.put(`/:id`, updateSinger);

router.delete(`/:id`, deleteSinger);

export default router;
