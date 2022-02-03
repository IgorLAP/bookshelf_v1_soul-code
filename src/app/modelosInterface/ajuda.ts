export interface Ajuda{
  titulo:string;
  subtitulo: string;
  descricao: [{ref:string,texto:string,link:string,texto2:string}];
  state?: string;
}
