import {Request, Response} from 'express'

class FirstController{
	public home(request: Request, response: Response){
		response.render('template',{});
	}
}

export const firstController = new FirstController();
