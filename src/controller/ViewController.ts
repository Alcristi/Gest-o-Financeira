import {Request, Response} from 'express'

export class ViewController{
	public static home(request: Request, response: Response){
		response.render('home',{});
	}
	public static register(request:Request, response:Response){
		response.render('register',{});
	}
	public static  consult(request:Request, response:Response){
		response.render('consult',{});
	}
}


