import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { Observable, Subject } from "rxjs";
import { environment } from "src/environments/environment";
import { BackendResponseInterface } from "../interfaces/backendResponse.interface";
import { LeitorDesktopComponent } from "../leitor-desktop/leitor-desktop.component";
import { BarCodeInterface } from './../interfaces/barCode.interface';

@Injectable()
export class BarCodeService {

  private url = `${environment.backend_url}cosmos`;

  barCodeReady = new Subject<BarCodeInterface[]>();

  private barCodesScanned: BarCodeInterface[] = [];
  private leitorDesktopComponent: LeitorDesktopComponent;

  constructor(
    private httpClient: HttpClient,
    private toastrService: ToastrService
  ) { }

  retrieveInformation(barCode: string): Observable<BackendResponseInterface> {
    return this.httpClient.get<BackendResponseInterface>(`${this.url}/${barCode}`);
  }

  addScan(barCode: BarCodeInterface) {
    this.barCodesScanned.push(barCode);
  }

  editScan(barCodeToEdit: BarCodeInterface) {
    const oldBarCode = this.barCodesScanned.find(barCode => barCode.barCode === barCodeToEdit.barCode);
    if (oldBarCode) {
      oldBarCode.categoria = barCodeToEdit.categoria;
      oldBarCode.nome = barCodeToEdit.nome;
      oldBarCode.price = barCodeToEdit.price;
      oldBarCode.fabricante = barCodeToEdit.fabricante;
      this.barCodeReady.next(this.barCodesScanned);
    } else {
      this.toastrService.error('Erro no sistema.');
    }
  }

  removeScan(barCode: BarCodeInterface) {
    this.barCodesScanned = this.barCodesScanned.filter((scan) => scan.barCode !== barCode.barCode);
    this.barCodeReady.next(this.barCodesScanned);
    (this.leitorDesktopComponent.barCodeInput.nativeElement as HTMLElement).focus();
  }

  hasBarCodeAlready(barCode: string): boolean {
    return (this.barCodesScanned.find(scans => scans.barCode === barCode)) ? true : false;
  }

  setLeitorDesktopComponent(leitorDesktopComponent: LeitorDesktopComponent) {
    this.leitorDesktopComponent = leitorDesktopComponent;
  }

}
