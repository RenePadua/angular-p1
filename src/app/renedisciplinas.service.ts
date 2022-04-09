import { Injectable } from '@angular/core';

interface Renelista {
  codigo: string;
  nome: string;
  dia: string;
  horario: string;
}

@Injectable()
export class RenedisciplinasService {
  renelista: Array<Renelista> = [];
  constructor() {
    //this.adicionarDisciplina('1','2','3','4')

    this.adicionarDisciplina(
      'ISW014',
      'Projeto de Encontrabilidade',
      'Segunda-feira',
      '19:00'
    );
    this.adicionarDisciplina(
      'ACI002',
      'Criação de Empresas para Internet',
      'Terça-feira',
      '19:00'
    );
    this.adicionarDisciplina('ING012	', 'Inglês VI', 'Terça-feira', '20:50');
    this.adicionarDisciplina(
      'ISD002',
      'Arquitetura Orientada a Serviços',
      'Quarta-feira',
      '19:00'
    );
    this.adicionarDisciplina(
      'ITE005',
      'Tópicos Especiais em Sistemas para Internet II',
      'Quinta-feira',
      '19:00'
    );
    this.adicionarDisciplina(
      'ACI002',
      'Criação de Empresas para Internet',
      'Sexta-feira',
      '19:00'
    );
    this.adicionarDisciplina(
      'ITE004',
      'Tópicos Especiais em Sistemas para Internet II',
      'Sexta-feira',
      '19:00'
    );
    this.adicionarDisciplina(
      'ISW013',
      '	Desenvolvimento para Dispositivos Móveis II ',
      'Sábado',
      '12:50'
    );
  }

  adicionarDisciplina(
    codigo: string,
    nome: string,
    dia: string,
    horario: string
  ) {
    if (codigo != '' && nome != '' && dia != '' && horario != '') {
      this.renelista.push({
        codigo,
        nome,
        dia,
        horario,
      });
    }
  }

  getDisciplinas() {
    return this.renelista;
  }

  removerDisciplina(index: number) {
    this.renelista.splice(index, 1);
  }
}
