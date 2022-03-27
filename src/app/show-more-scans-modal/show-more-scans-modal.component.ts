import { Subscription } from 'rxjs';
import { BarCodeInterface } from './../interfaces/barCode.interface';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BarCodeService } from '../services/barCode.service';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-show-more-scans-modal',
  templateUrl: './show-more-scans-modal.component.html',
  styleUrls: ['./show-more-scans-modal.component.css']
})
export class ShowMoreScansModalComponent implements OnInit {

  @ViewChild('modalShowMoreScans', { static: true }) modal: ElementRef;


  barCodesScanned: BarCodeInterface[] = [];
  subscriptionToBarCodeModification: Subscription;

  constructor(
    private modalService: ModalService,
    private barCodeService: BarCodeService
  ) { }

  ngOnInit(): void {
    this.modalService.modalShowMoreScans = this.modal;
    this.subscriptionToBarCodeModification = this.barCodeService.barCodeReady.subscribe({
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

  closeModalShowMoreScans() {
    this.modalService.closeModalShowMoreScans();
  }

}
