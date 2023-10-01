import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavBarComponentComponent } from './nav-bar-component/nav-bar-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { HighlightSpecialDirective } from './highlight-special.directive';
import { FormatPricePipe } from './format-price.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponentComponent,
    HomeComponentComponent,
    HighlightSpecialDirective,
    FormatPricePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
