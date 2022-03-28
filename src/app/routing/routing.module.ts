import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LeitorPageComponent } from "../leitor-page/leitor-page.component";
import { ScansPageComponent } from "../scans-page/scans-page.component";

const appRoutes: Routes = [
  { path: '', redirectTo: '/leitor', pathMatch: 'full' },
  { path: 'leitor', component: LeitorPageComponent },
  { path: 'scans', component: ScansPageComponent },
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule{ }
