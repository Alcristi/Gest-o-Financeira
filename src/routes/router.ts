import { Router,Request,Response } from "express";
import {ViewController} from "../controller/ViewController"
import {registerAllocation} from "../controller/RegisterController"
import { consultAllocation } from "../controller/ConsultController";
import { listOperations } from "../controller/AdminController";

const router : Router = Router();

router.get("/",ViewController.home);
router.get("/register",ViewController.register)
router.post("/register",registerAllocation);

router.get("/consult",ViewController.consult);
router.post("/consult",consultAllocation);

router.post("/admin",listOperations);
router.delete("/admin");
router.put("/admin/edit");
export {router};
