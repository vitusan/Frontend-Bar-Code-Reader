import { ModalService } from './services/modal.service';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { LeitorDesktopComponent } from './leitor-desktop/leitor-desktop.component';
import { LeitorMobileComponent } from './leitor-mobile/leitor-mobile.component';
import { ListaLeiturasComponent } from './lista-leituras/lista-leituras.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BarCodeService } from './services/barCode.service';
import { HttpClientModule } from '@angular/common/http';
import { EditScanModalComponent } from './edit-scan-modal/edit-scan-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListaLeiturasComponent,
    LeitorMobileComponent,
    LeitorDesktopComponent,
    EditScanModalComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule
  ],
  providers: [
    NavbarComponent,
    BarCodeService,
    ModalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
