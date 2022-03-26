import { BarCodeInterface } from './../interfaces/barCode.interface';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BarCodeService } from '../services/barCode.service';

@Component({
  selector: 'app-lista-leituras',
  templateUrl: './lista-leituras.component.html',
  styleUrls: ['./lista-leituras.component.css']
})
export class ListaLeiturasComponent implements OnInit {

  barCodesScanned: BarCodeInterface[] = [];
  editingMode = false;
  subscriptionToScanner: Subscription;

  constructor(
    private barCodeService: BarCodeService
  ) { }

  ngOnInit(): void {
    this.subscriptionToScanner = this.barCodeService.barCodeScanned.subscribe({
      next: barCode => {
        this.barCodesScanned.push(barCode);
      }
    });
  }

  onClickScannedItem(item: BarCodeInterface) {
    console.log('Cliked item', item);
    this.editingMode = true;
  }

}
