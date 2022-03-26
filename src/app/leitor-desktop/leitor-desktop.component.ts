import { ModalService } from './../services/modal.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { BarCodeService } from '../services/barCode.service';
import { CategoriasEnum } from './../enum/categorias.enum';

@Component({
  selector: 'app-leitor-desktop',
  templateUrl: './leitor-desktop.component.html',
  styleUrls: ['./leitor-desktop.component.css']
})
export class LeitorDesktopComponent implements OnInit {

  barCodeForm: FormGroup;
  editBarCodeForm: FormGroup;

  constructor(
    private barCodeService: BarCodeService,
    private toastr: ToastrService,
    private modalService: ModalService
  ) { }

  ngOnInit(): void {
    this.barCodeForm = new FormGroup({
      'barCodeInput': new FormControl()
    });
  }

  onCodeInserted(codeInput: Event ) {
    this.barCodeService.retrieveInformation((codeInput.target as HTMLInputElement).value).subscribe({
      next: barCode => {
        this.barCodeService.addScan(barCode.data);
        this.modalService.openModal();
      },
      error: error => {
        this.toastr.error(`${error.message}`)
      }
    });
    this.barCodeForm.get('barCodeInput')?.reset();
  }

}
