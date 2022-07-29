import {Alocacao} from '../model/schemas/Alocacao'
import {Request,Response} from 'express'
import { TAlocacao } from '../model/types/Alocacao.types';
import { ConsultJsonDto } from '../model/dto/ConsultJson.dto';




export const registerAlocacao= async (request:Request,response:Response) => {

	let {cnpj,razaoSocial,operacao,dataOperacao,cotas,valor}:TAlocacao = request.body;
	if(!cnpj || !razaoSocial || !operacao || !dataOperacao || !cotas || !valor){
		console.log(request.body);
		response.status(401).send({error:'Fill field is empty'});
		response.redirect('register');
	}
	else
	{
		try{
			console.log(request.body)
			const newAlocation = new Alocacao({cnpj,razaoSocial,operacao,dataOperacao,cotas,valor});
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

