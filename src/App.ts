import express from "express"
import { router } from "./routes/router";
import mongoose from "mongoose";
import path from 'path'

export class App{
	public	server: express.Application;
	public	port: number | string;
	private	database : string;
	constructor(){
		this.server = express();
		this.port = process.env.PORT || 3000;
		this.database = "mongodb+srv://Alcristi:Dragonballeldorado@cluster0.gbvfigp.mongodb.net/?retryWrites=true&w=majority";
		this.middleware();
		this.router();
		this.setViews();
		this.connectDatabase();
	}

	private middleware():void{
		this.server.use(express.json());
		this.server.use(express.urlencoded({extended:false}))
	}
	private router():void{
		this.server.use(router);
	}

	private setViews():void{
		this.server.set('views', path.join(__dirname, 'views'));
		this.server.set('view engine','ejs');
	}

	private connectDatabase():void{
		mongoose.connect(this.database)
		.then(()=>console.log('e don connect'))
		.catch(err => console.log(err))
	}
}
