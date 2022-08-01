import { Request, Response } from "express"
import { TypeAllocation } from "../model/types/Alocacao.types";
import {Allocation} from "../model/schemas/Allocation"
import { StringifyOptions } from "querystring";

export const listOperations = async (request:Request, response:Response) =>{
	const {initialDate,finalDate}:{initialDate:string,finalDate:string} = request.body;
	try{
		let allocations = await Allocation.find();
		if(allocations[0]!= undefined)
		{
			let allocationValid = checkDate(allocations,initialDate,finalDate)
			return response.status(200).send(allocationValid);
		}
		else
			throw new Error("Data Base empty")
	}
	catch(err:any)
	{
		return response.status(400).send({error:err.message})
	}

}


export type TypeAllocationId = {
	id: string,
	cnpj: string,
	razaoSocial: string,
	operacao: string,
	dataOperacao: string,
	cotas: number,
	valor: number
}


export const editAllocation = async (request:Request, response:Response) =>
{
	const {id,cnpj,razaoSocial,operacao,dataOperacao,cotas,valor}:TypeAllocationId =request.body

	try{
		console.log(id)
		const newAlocation = new Allocation({cnpj,razaoSocial,operacao,dataOperacao,cotas,valor});
		let data = await Allocation.findByIdAndUpdate(id,newAlocation);
		console.log(data);
		return response.sendStatus(201)
	}
	catch(err:any)
	{
		console.log(err);
		return response.status(400).send({error:err.message})
	}
}

const checkDate = (allocations:Array<TypeAllocation>,initialDate:string,finalDate:string):Array<TypeAllocation>=>{
	let allocationValid:Array<TypeAllocation> = [];

	allocations.forEach((element)=>{
		if(isDateValid(element.dataOperacao,initialDate,finalDate))
		{
			allocationValid.push(element);
		}
	})
	return (allocationValid);
}

const isDateValid = (date:string,initialDate:string,finalDate:string):boolean=>{

	let dateYear = parseInt(date.slice(-4))
	let dateMounth = parseInt(date.slice(3,5))
	let dateDay = parseInt(date.slice(0,2))

	if (dateYear < parseInt(finalDate.slice(-4)) && dateYear > parseInt(initialDate.slice(-4)))
		return true;
	else if(dateYear === parseInt(finalDate.slice(-4)) || dateYear === parseInt(initialDate.slice(-4)))
	{
		if (dateMounth < parseInt(finalDate.slice(3,5)) && dateMounth > parseInt(initialDate.slice(3,5)))
			return true
		else if (dateMounth === parseInt(finalDate.slice(3,5)) || dateMounth === parseInt(initialDate.slice(3,5)))
			if (dateDay <= parseInt(finalDate.slice(0,2)) && dateDay >= parseInt(initialDate.slice(0,2)))
				return true;
	}

	return false;
}
