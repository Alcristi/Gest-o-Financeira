import { Router,Request,Response } from "express";
import {ViewController} from "../controller/ViewController"
import {registerAlocacao} from "../controller/RegisterController"
import { consultAlocacao } from "../controller/ConsultController";

const router : Router = Router();

router.get("/",ViewController.home);
router.get("/register",ViewController.register)
router.post("/register",registerAlocacao);

router.get("/consult",ViewController.consult);
router.post("/consult",consultAlocacao);

router.post("/admin");
router.delete("/admin");
router.put("/admin/edit");
export {router};
