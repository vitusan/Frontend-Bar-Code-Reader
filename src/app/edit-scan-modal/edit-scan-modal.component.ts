import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as bootstrap from 'bootstrap';
import { CategoriasEnum } from '../enum/categorias.enum';
import { BarCodeService } from '../services/barCode.service';
import { ModalService } from './../services/modal.service';

@Component({
  selector: 'app-edit-scan-modal',
  templateUrl: './edit-scan-modal.component.html',
  styleUrls: ['./edit-scan-modal.component.css']
})
export class EditScanModalComponent implements OnInit {

  @ViewChild('modalFufillItemInfo', { static: true }) modal: ElementRef;
  @ViewChild('selectedOption', { static: true }) selectedOption: ElementRef;

  editBarCodeForm: FormGroup;
  categorias: string[];
  popovers: bootstrap.Popover[];
  hoveredSubmit: boolean;

  constructor(
    public modalService: ModalService,
    private barCodeService: BarCodeService,
  ) { }

  ngOnInit(): void {
    this.hoveredSubmit = false;
    new bootstrap.Popover(document.body, {
      selector: '.has-popover',
      trigger: 'hover focus',
      placement: 'top',
      content: "Preencha os campos corretamente!"
    });
    this.modalService.setEditScanModalComponent(this);
    this.categorias = Object.entries(CategoriasEnum).map(([key, value]) => value);
    this.modalService.modalEditScan = this.modal;
    this.editBarCodeForm = new FormGroup({
      'barCodeInput': new FormControl(null, Validators.required),
      'nameInput': new FormControl(null, Validators.required),
      'fabricanteInput': new FormControl(null, [Validators.required, Validators.pattern(new RegExp(/^\w{1}.*$/))]),
      'categoriaInput': new FormControl((this.selectedOption.nativeElement as HTMLInputElement).value, Validators.pattern(new RegExp(/^(?!.*Selecione uma categoria\.\.\.).*$/))),
      'precoInput': new FormControl(0.00, [Validators.required, Validators.min(0.01)]),
    })
  }

  onSubmitEditBarCodeForm() {
    this.modalService.itemToEdit.nome = this.editBarCodeForm.get('nameInput')?.value;
    this.modalService.itemToEdit.fabricante = this.editBarCodeForm.get('fabricanteInput')?.value;
    this.modalService.itemToEdit.categoria = this.editBarCodeForm.get('categoriaInput')?.value;
    this.modalService.itemToEdit.price = this.editBarCodeForm.get('precoInput')?.value;
    this.barCodeService.editScan(this.modalService.itemToEdit);
    this.modalService.closeModal();
    this.hoveredSubmit = false;
  }

  get controls() {
    return this.editBarCodeForm.controls;
  }

  showErrors() {
    this.hoveredSubmit = true;
  }

}
