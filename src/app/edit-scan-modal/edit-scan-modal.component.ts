import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalService } from './../services/modal.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CategoriasEnum } from '../enum/categorias.enum';

@Component({
  selector: 'app-edit-scan-modal',
  templateUrl: './edit-scan-modal.component.html',
  styleUrls: ['./edit-scan-modal.component.css']
})
export class EditScanModalComponent implements OnInit {

  @ViewChild('modalFufillItemInfo', { static: true }) modal: ElementRef;

  editBarCodeForm: FormGroup;
  categorias: string[];

  constructor(
    public modalService: ModalService
  ) {
    this.categorias = Object.entries(CategoriasEnum).map(([key, value]) => value);
    this.modalService.modalEditScan = this.modal;
  }

  ngOnInit(): void {
    this.editBarCodeForm = new FormGroup({
      'barCodeInput': new FormControl(null, Validators.required),
      'nameInput': new FormControl(null, Validators.required),
      'fabricanteInput': new FormControl(null, Validators.required),
      'categoriaInput': new FormControl(null, Validators.required),
      'precoInput': new FormControl(null, Validators.required),
    })
  }

  onSubmitEditBarCodeForm() {
    this.modalService.itemToEdit.nome = this.editBarCodeForm.get('nameInput')?.value;
    this.modalService.itemToEdit.fabricante = this.editBarCodeForm.get('fabricanteInput')?.value;
    this.modalService.itemToEdit.categoria = this.editBarCodeForm.get('categoriaInput')?.value;
    this.modalService.itemToEdit.price = this.editBarCodeForm.get('precoInput')?.value;
  }

}
