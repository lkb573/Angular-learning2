import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NavbarComponent} from "./navbar/navbar.component";
import {MainContentComponent} from "./main-content/main-content.component";
import {FooterSectionComponent} from "./footer-section/footer-section.component";
import {ArticleSectionComponent} from "./article-section/article-section.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainContentComponent,
    FooterSectionComponent,
    ArticleSectionComponent
  ],
  imports: [
    BrowserModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
