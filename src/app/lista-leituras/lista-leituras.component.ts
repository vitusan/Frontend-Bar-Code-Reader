import { BarCodeInterface } from './../interfaces/barCode.interface';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BarCodeService } from '../services/barCode.service';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-lista-leituras',
  templateUrl: './lista-leituras.component.html',
  styleUrls: ['./lista-leituras.component.css']
})
export class ListaLeiturasComponent implements OnInit {

  barCodesScanned: BarCodeInterface[] = [];
  subscriptionToScanner: Subscription;

  constructor(
    private barCodeService: BarCodeService,
    private modalService: ModalService
  ) { }

  ngOnInit(): void {
    this.subscriptionToScanner = this.barCodeService.barCodeReady.subscribe({
      next: scans => {
        this.barCodesScanned = scans;
      }
    });
  }

  onClickItemToEdit(item: BarCodeInterface) {
    this.modalService.itemToEdit = item;
    this.modalService.openModal();
  }

  onClickItemToRemove(item: BarCodeInterface) {
    this.barCodeService.removeScan(item);
  }

  onShowMoreScans() {
    this.modalService.openModalShowMoreScans();
  }

}
