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
		this.database = process.env.MONGO || "";
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
		this.server.use(express.static(__dirname + '/views'))
		this.server.set('views', path.join(__dirname, 'views'));
		this.server.set('view engine','ejs');
	}

	private connectDatabase():void{
		mongoose.connect(this.database)
		.then(()=>console.log('connect with Db'))
		.catch(err => console.log(err.message))
	}
}
