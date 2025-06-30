
import { Router } from "express";
const router = Router();
import { getPagination,topNSellers } from "../controllers/pagination.controller.js";

router.get("/products", getPagination);
router.get("/top-sellers", topNSellers);

export default router;