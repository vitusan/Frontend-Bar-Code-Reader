import { HttpClient } from "@angular/common/http";
import { Observable, Subject } from "rxjs";
import { environment } from "src/environments/environment";
import { BackendResponseInterface } from "../interfaces/backendResponse.interface";
import { BarCodeInterface } from './../interfaces/barCode.interface';

export class BarCodeService {

  private url = `${environment.backend_url}cosmos`;

  barCodeScanned = new Subject<BarCodeInterface>();

  private barCodesScanned: BarCodeInterface[] = [];

  constructor(
    private httpClient: HttpClient
  ) { }

  retrieveInformation(barCode: string): Observable<BackendResponseInterface> {
    return this.httpClient.get<BackendResponseInterface>(`this.url/${barCode}`);
  }

  addScan(barCode: BarCodeInterface) {
    this.barCodesScanned.push(barCode);
    this.barCodeScanned.next(barCode);
  }

}
