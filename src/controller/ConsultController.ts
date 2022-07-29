import {Alocacao} from '../model/schemas/Alocacao'
import {Request,Response} from 'express'
import { TAlocacao } from '../model/types/Alocacao.types';
import { ConsultJsonDto } from '../model/dto/ConsultJson.dto';

export const consultAlocacao= async(request:Request,response:Response) => {

	const {cnpj,valor}:{cnpj:string,valor:number} = request.body;
	let alocacoes = await Alocacao.find({cnpj})

	if(alocacoes[0] !== undefined)
	{
		let responseJson:ConsultJsonDto = {
			cnpj:cnpj,
			razaoSocial:alocacoes[0].razaoSocial,
			dataConsulta:parseData(),
			valorUnitario:valor,
			numeroCotas:totalDeCotas(alocacoes),
			valorMedio: valorMedio(alocacoes),
			retorno: retornoCotas(alocacoes,valor),
			saldo: valor*totalDeCotas(alocacoes),
		};
		return response.render('consultView',{responseJson})
	}
	else
	{
		return response.status(400).send({error:"CNPJ não encontrado"})
	}
}

const parseData = ():string =>{
	let str:string = "";
	let data:Date = new Date();
	str += data.getDay() < 10 ? '0' + data.getDay().toString():data.getDay().toString();
	str += '-';
	str += data.getMonth() < 10 ? '0' + data.getMonth().toString():data.getMonth().toString();
	str += '-'
	str += data.getFullYear().toString()
	return (str)
}

const totalDeCotas = (alocacoes :Array<TAlocacao>):number =>{
	let numeroCotas:number = 0;

	alocacoes.forEach((Element) =>
	{
		if(Element.operacao === 'compra')
			numeroCotas+=Element.cotas;
		else
			numeroCotas-=Element.cotas;
	});
	return numeroCotas;
}

const valorMedio = (alocacoes:Array<TAlocacao>):number =>{
	let media:number = 0;
	let totalPonderado:number = 0;
	let totalCotas:number = 0;
	totalCotas = totalDeCotas(alocacoes);
	alocacoes.forEach((element)=>{
		if(element.operacao === 'compra')
			totalPonderado += element.cotas *element.valor;
		else
			totalPonderado -= element.cotas *element.valor;
	})
	media = totalPonderado/totalCotas;
	return(media);
}

const retornoCotas = (alocacoes:Array<TAlocacao>,valor:number):number=>{
	let media:number = valorMedio(alocacoes);
	return((valor/media) - 1);
}

const saldo  =  (alocacoes:Array<TAlocacao>,valor:number):number =>{
	return (valor*totalDeCotas(alocacoes));
}



