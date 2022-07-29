import {Allocation} from '../model/schemas/Allocation'
import {Request,Response} from 'express'
import { TypeAllocation } from '../model/types/Alocacao.types';

export const registerAllocation = async (request:Request,response:Response) => {

	let {cnpj,razaoSocial,operacao,dataOperacao,cotas,valor}:TypeAllocation = request.body;
	if(!cnpj || !razaoSocial || !operacao || !dataOperacao || !cotas || !valor){
		console.log(request.body);
		response.status(401).send({error:'Fill field is empty'});
		response.redirect('register');
	}
	else
	{
		try{
			console.log(request.body)
			const newAlocation = new Allocation({cnpj,razaoSocial,operacao,dataOperacao,cotas,valor});
			await newAlocation.save();
			response.redirect('/');
		}
		catch(err: any)
		{
			response.status(401).send({error:err.message});
			response.redirect('register');
		}

	}

}

