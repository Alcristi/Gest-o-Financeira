import { Router} from "express";
import {registerAllocation} from "../controller/RegisterController"
import { consultAllocation } from "../controller/ConsultController";
import { editAllocation, listOperations } from "../controller/AdminController";

const router : Router = Router();

router.post("/register",registerAllocation);
router.post("/consult",consultAllocation);

router.post("/admin",listOperations);
router.delete("/admin");
router.put("/admin",editAllocation);
export {router};
