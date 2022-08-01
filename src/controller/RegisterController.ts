import {Allocation} from '../model/schemas/Allocation'
import {Request,Response} from 'express'
import { TypeAllocation } from '../model/types/Alocacao.types';
import mongoose from 'mongoose';

export const registerAllocation = async (request:Request,response:Response) => {

	let {cnpj,razaoSocial,operacao,dataOperacao,cotas,valor}:TypeAllocation = request.body;
	if(!cnpj || !razaoSocial || !operacao || !dataOperacao || !cotas || !valor){
		console.log(request.body);
		return response.status(400).send({error:'Fill field is empty'});
	}
	else
	{
		try{
			console.log(request.body)
			const newAlocation = new Allocation({cnpj,razaoSocial,operacao,dataOperacao,cotas,valor});
			newAlocation._id instanceof mongoose.Types.ObjectId
			//await newAlocation.save();
			return response.status(201).send(await newAlocation.save())
		}
		catch(err: any)
		{
			return response.status(400).send({error:err.message});
		}

	}

}

