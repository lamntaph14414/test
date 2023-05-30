import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';
import {FormsModule} from '@angular/forms';
import { ProductListComponent } from './page/product-list/product-list.component';
import { AdminLayoutComponent } from './page/admin-layout/admin-layout.component';
import { ProductAddComponent } from './page/product-add/product-add.component';
import { ProducteditComponent } from './page/productedit/productedit.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    AdminLayoutComponent,
    ProductAddComponent,
    ProducteditComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
