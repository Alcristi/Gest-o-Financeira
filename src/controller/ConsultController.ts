import { Allocation } from "../model/schemas/Allocation";
import { Request, Response } from "express";
import { TypeAllocation } from "../model/types/Alocacao.types";
import { ConsultJsonDto } from "../model/dto/ConsultJson.dto";

export const consultAllocation = async (
  request: Request,
  response: Response
) => {
  const { cnpj, valor }: { cnpj: string; valor: number } = request.body;
  try {
    let alocacoes = await Allocation.find({ cnpj });
    if (alocacoes[0] !== undefined) {
      let responseJson: ConsultJsonDto = {
        cnpj: cnpj,
        razaoSocial: alocacoes[0].razaoSocial,
        dataConsulta: parseData(),
        valorUnitario: valor,
        numeroCotas: totalDeCotas(alocacoes),
        valorMedio: valorMedio(alocacoes),
        retorno: retornoCotas(alocacoes, valor),
        saldo: valor * totalDeCotas(alocacoes),
      };
      return response.status(200).send(responseJson);
    } else throw new Error("CNPJ não encontrado");
  } catch (err: any) {
    return response.status(400).send({ error: err.message });
  }
};

const parseData = (): string => {
  let str: string = "";
  let data: Date = new Date();
  str +=
    data.getDay() < 10
      ? "0" + data.getDay().toString()
      : data.getDay().toString();
  str += "-";
  str +=
    data.getMonth() < 10
      ? "0" + data.getMonth().toString()
      : data.getMonth().toString();
  str += "-";
  str += data.getFullYear().toString();
  return str;
};

const totalDeCotas = (alocacoes: Array<TypeAllocation>): number => {
  let numeroCotas: number = 0;

  alocacoes.forEach((Element) => {
    if (Element.operacao === "compra") numeroCotas += Element.cotas;
    else numeroCotas -= Element.cotas;
  });
  return numeroCotas;
};

const valorMedio = (alocacoes: Array<TypeAllocation>): number => {
  let media: number = 0;
  let totalPonderado: number = 0;
  let totalCotas: number = 0;
  totalCotas = totalDeCotas(alocacoes);
  alocacoes.forEach((element) => {
    if (element.operacao === "compra")
      totalPonderado += element.cotas * element.valor;
    else totalPonderado -= element.cotas * element.valor;
  });
  media = totalPonderado / totalCotas;
  return media;
};

const retornoCotas = (
  alocacoes: Array<TypeAllocation>,
  valor: number
): number => {
  let media: number = valorMedio(alocacoes);
  return valor / media - 1;
};
