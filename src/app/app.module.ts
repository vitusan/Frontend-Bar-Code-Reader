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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListaLeiturasComponent,
    LeitorMobileComponent,
    LeitorDesktopComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    NavbarComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
