import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RenedisciplinasService } from './renedisciplinas.service';
import { ReneComponent } from './rene/rene.component';
import { RenedetalhesComponent } from './renedetalhes/renedetalhes.component';
import { RenelistaComponent } from './renelista/renelista.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: ReneComponent },
      { path: 'lista', component: RenelistaComponent },
      { path: 'list/:index', component: RenedetalhesComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    ReneComponent,
    RenedetalhesComponent,
    RenelistaComponent,
  ],
  providers: [RenedisciplinasService],
  bootstrap: [AppComponent],
})
export class AppModule {}
