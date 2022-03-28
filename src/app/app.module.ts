import { ModalService } from './services/modal.service';
import { CUSTOM_ELEMENTS_SCHEMA, DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
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
import { NgxSpinnerModule } from 'ngx-spinner';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { ShowMoreScansModalComponent } from './show-more-scans-modal/show-more-scans-modal.component';
import { ScansPageComponent } from './scans-page/scans-page.component';
import { LeitorPageComponent } from './leitor-page/leitor-page.component';
import { AppRoutingModule } from './routing/routing.module';

registerLocaleData(ptBr);

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListaLeiturasComponent,
    LeitorMobileComponent,
    LeitorDesktopComponent,
    EditScanModalComponent,
    ShowMoreScansModalComponent,
    ScansPageComponent,
    LeitorPageComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    NgxSpinnerModule,
    CurrencyMaskModule,
    AppRoutingModule
  ],
  providers: [
    NavbarComponent,
    BarCodeService,
    ModalService,
    { provide: LOCALE_ID, useValue: 'pt' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' }
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})

export class AppModule { }
