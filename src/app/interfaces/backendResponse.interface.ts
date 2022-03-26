import { BarCodeInterface } from "./barCode.interface";

export interface BackendResponseInterface {

  readonly success: boolean;
  readonly data: BarCodeInterface;

}
