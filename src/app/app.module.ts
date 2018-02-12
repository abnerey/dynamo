import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {NbThemeModule, NbLayoutModule, NbSidebarModule, NbSidebarService, NbThemeService} from '@nebular/theme';
import { LoginComponent } from './login/login.component';
import {RoutingModule} from "../routing/routing.module";


@NgModule({
  declarations: [
      AppComponent,
      LoginComponent
  ],
  imports: [
      BrowserModule,
      RoutingModule,
      NbThemeModule.forRoot({name: 'cosmic'}),
      NbLayoutModule,
      NbSidebarModule
  ],
  providers: [NbSidebarService, NbThemeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
