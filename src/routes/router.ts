import { Router } from "express";
import { registerAllocation } from "../controller/RegisterController";
import { consultAllocation } from "../controller/ConsultController";
import {
  deleteAllocantion,
  editAllocation,
  listOperations,
} from "../controller/AdminController";

const router: Router = Router();

router.post("/register", registerAllocation);
router.post("/consult", consultAllocation);

router.post("/admin", listOperations);
router.delete("/admin", deleteAllocantion);
router.put("/admin", editAllocation);
export { router };
