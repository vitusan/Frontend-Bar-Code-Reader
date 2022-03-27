import { ElementRef, Injectable } from "@angular/core";
import * as bootstrap from 'bootstrap';
import { EditScanModalComponent } from '../edit-scan-modal/edit-scan-modal.component';
import { LeitorDesktopComponent } from "../leitor-desktop/leitor-desktop.component";
import { BarCodeInterface } from './../interfaces/barCode.interface';

@Injectable()
export class ModalService {

  itemToEdit: BarCodeInterface;
  modalEditScan: ElementRef;
  modalShowMoreScans: ElementRef;
  private modal: bootstrap.Modal;
  private editScanModalComponent: EditScanModalComponent
  private leitorDesktopComponent: LeitorDesktopComponent

  constructor() {
    this.resetItemToEdit();
  }

  openModal() {
    this.modal = new bootstrap.Modal(this.modalEditScan.nativeElement, {
      backdrop: "static"
    });
    this.editScanModalComponent.editBarCodeForm.controls['barCodeInput'].setValue(this.itemToEdit.barCode);
    this.editScanModalComponent.editBarCodeForm.controls['fabricanteInput'].setValue(this.itemToEdit.fabricante);
    this.editScanModalComponent.editBarCodeForm.controls['nameInput'].setValue(this.itemToEdit.nome);
    this.editScanModalComponent.editBarCodeForm.controls['categoriaInput'].reset((this.editScanModalComponent.selectedOption.nativeElement as HTMLInputElement).value);
    this.editScanModalComponent.editBarCodeForm.controls['precoInput'].reset(0.00);
    this.modal.show();
  }

  openModalShowMoreScans() {
    this.modal = new bootstrap.Modal(this.modalShowMoreScans.nativeElement, {
      backdrop: "static"
    });
    this.modal.show();
  }

  closeModalShowMoreScans() {
    this.modal.hide();
    (this.leitorDesktopComponent.barCodeInput.nativeElement as HTMLElement).focus();
  }

  closeModal() {
    this.resetItemToEdit();
    this.modal.hide();
    (this.leitorDesktopComponent.barCodeInput.nativeElement as HTMLElement).focus();
  }

  setEditScanModalComponent(editScanModalComponent: EditScanModalComponent) {
    this.editScanModalComponent = editScanModalComponent;
  }

  setLeitorDesktopComponent(leitorDesktopComponent: LeitorDesktopComponent) {
    this.leitorDesktopComponent = leitorDesktopComponent;
  }

  private resetItemToEdit() {
    this.itemToEdit = {
      barCode: ``,
      fabricante: ``,
      price: 0,
      nome: ``,
      categoria: undefined
    }
  }

}
