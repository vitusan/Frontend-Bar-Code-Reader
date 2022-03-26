import { BarCodeInterface } from './../interfaces/barCode.interface';
import { ElementRef, Injectable } from "@angular/core";
import * as bootstrap from 'bootstrap';

@Injectable()
export class ModalService {

  itemToEdit: BarCodeInterface;
  modalEditScan: ElementRef;

  constructor() {
    this.itemToEdit = {
      barCode: ``,
      fabricante: ``,
      price: 0,
      nome: ``,
      categoria: undefined
    }
  }

  openModal() {
    const modal = new bootstrap.Modal(this.modalEditScan.nativeElement, {
      backdrop: "static"
    })
    modal.show();
  }

}
