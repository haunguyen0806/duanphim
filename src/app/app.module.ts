import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HomeModule } from './home/home.module';
import { AdminModule } from './admin/admin.module'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { ModalTrailerComponent } from './components/modal-trailer/modal-trailer.component';

// import { AngularFontAwesomeModule } from 'angular-font-awesome';
@NgModule({
  declarations: [
    AppComponent,
    // ModalTrailerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    AdminModule,
    // AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
