import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SkuComponent } from './sku/sku.component';
import { SkuBuilderComponent } from './sku-builder/sku-builder.component';
import { SkuBuilderValidatorsComponent } from './sku-builder-with-validators/sku-builder-validators.component';

@NgModule({
  declarations: [
    AppComponent,
    SkuComponent,
    SkuBuilderComponent,
    SkuBuilderValidatorsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
