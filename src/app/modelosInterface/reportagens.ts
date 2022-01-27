export interface Reportagens {
  titulo: string;
  subtitulo: string;
  img: string;
  reportagem: string;
  links: [{ ref: string, texto: string }];
  cols: number;
  rows: number;
}
