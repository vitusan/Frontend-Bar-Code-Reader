import { CategoriasEnum } from './../enum/categorias.enum';
export interface BarCodeInterface {

  fabricante?: string;
  nome?: string;
  barCode: string;
  categoria?: CategoriasEnum;
  price?: number

}
