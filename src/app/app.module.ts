import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LucideAngularModule, Cable } from 'lucide-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ButtonHeaderComponent } from './button-header/button-header.component';
import { BodyComponent } from './body/body.component';
import { ButtonBodyComponent } from './button-body/button-body.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonHeaderComponent,
    BodyComponent,
    ButtonBodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LucideAngularModule.pick({ Cable })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
