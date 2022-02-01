export interface Ajuda{
  iconeAjuda: string;
  titulo:string;
  subtitulo: string;
  descricao: [{ref:string, texto:string}];
  state?: string;
  cols: number;
  rows: number;
}
