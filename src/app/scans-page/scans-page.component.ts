import { Component, OnInit } from '@angular/core';
import { BarCodeInterface } from '../interfaces/barCode.interface';
import { BarCodeService } from '../services/barCode.service';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-scans-page',
  templateUrl: './scans-page.component.html',
  styleUrls: ['./scans-page.component.css']
})
export class ScansPageComponent implements OnInit {

  barCodesScanned: BarCodeInterface[] = [];

  constructor(
    private modalService: ModalService,
    private barCodeService: BarCodeService
  ) { }

  ngOnInit(): void {
    this.barCodesScanned = this.barCodeService.getBarCodesScanned();
  }

  onClickItemToEdit(item: BarCodeInterface) {
    this.modalService.itemToEdit = item;
    this.modalService.openModal();
  }

  onClickItemToRemove(item: BarCodeInterface) {
    this.barCodeService.removeScan(item);
  }

}
