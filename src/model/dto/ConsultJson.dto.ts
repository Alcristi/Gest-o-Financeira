import { Types } from "mongoose";

export class ConsultJsonDto {
  id?: Types.ObjectId | undefined;
  cnpj: string | undefined;
  razaoSocial: string | undefined;
  dataConsulta: string | undefined;
  valorUnitario: number | undefined;
  numeroCotas: number | undefined;
  valorMedio: number | undefined;
  retorno: number | undefined;
  saldo: number | undefined;
  constructor(consultJsonDto?: Partial<ConsultJsonDto>) {
    this.id = consultJsonDto?.id;
    this.cnpj = consultJsonDto?.cnpj;
    this.razaoSocial = consultJsonDto?.razaoSocial;
    this.dataConsulta = consultJsonDto?.dataConsulta;
    this.valorUnitario = consultJsonDto?.valorUnitario;
    this.numeroCotas = consultJsonDto?.numeroCotas;
    this.valorMedio = consultJsonDto?.valorMedio;
    this.retorno = consultJsonDto?.retorno;
    this.saldo = consultJsonDto?.saldo;
  }
}
