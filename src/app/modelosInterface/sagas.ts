export interface Sagas {
  titulo: string;
  autor: string;
  livros: [{ref: string}];
  img: string;
  resumo: string;
  links: [{ref: string, texto: string}];
  saga: [{texto: string}]
  cols: number;
  rows: number;
}
