import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ProductComponent} from './product/product.component';
import {AlertModule} from "ngx-bootstrap/alert";
import {FormsModule} from "@angular/forms";

@NgModule({

  declarations: [
    AppComponent,
    ProductComponent
  ],
    imports: [
        BrowserModule,
        AlertModule.forRoot(),
        FormsModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
