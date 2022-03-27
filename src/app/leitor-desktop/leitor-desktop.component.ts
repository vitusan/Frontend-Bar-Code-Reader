import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { BarCodeService } from '../services/barCode.service';
import { ModalService } from './../services/modal.service';

@Component({
  selector: 'app-leitor-desktop',
  templateUrl: './leitor-desktop.component.html',
  styleUrls: ['./leitor-desktop.component.css']
})
export class LeitorDesktopComponent implements OnInit {

  @ViewChild('barCodeInput', { static: true }) barCodeInput: ElementRef;

  barCodeForm: FormGroup;
  editBarCodeForm: FormGroup;

  constructor(
    private barCodeService: BarCodeService,
    private toastr: ToastrService,
    private modalService: ModalService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.modalService.setLeitorDesktopComponent(this);
    this.barCodeService.setLeitorDesktopComponent(this);
    this.barCodeForm = new FormGroup({
      'barCodeInput': new FormControl()
    });
  }

  onCodeInserted(codeInput: Event) {
    this.spinner.show('pacman');
    if (!this.barCodeService.hasBarCodeAlready((codeInput.target as HTMLInputElement).value)) {
      this.barCodeService.retrieveInformation((codeInput.target as HTMLInputElement).value).subscribe({
        next: barCode => {
          this.barCodeService.addScan(barCode.data);
          this.modalService.itemToEdit = barCode.data;
          this.spinner.hide('pacman');
          this.modalService.openModal();
          this.barCodeForm.get('barCodeInput')?.reset();
        },
        error: error => {
          this.toastr.error(`${error.message}`, undefined, {
            progressBar: true
          }).onHidden.subscribe({
            next: () => {
              this.spinner.hide('pacman');
              this.barCodeForm.get('barCodeInput')?.reset();
            }
          })
        }
      });
    } else {
      this.toastr.error('Código de barras já escaneado.', undefined, {
        progressBar: true
      }).onHidden.subscribe({
        next: () => {
          this.spinner.hide('pacman').then(() => {
            this.barCodeForm.get('barCodeInput')?.reset();
          });
        }
      })
    }
  }

  onDownload() {
    this.toastr.info('Feature em desenvolvimento!');
  }

}
