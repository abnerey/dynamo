import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NbThemeModule, NbLayoutModule, NbSidebarModule, NbSidebarService, NbThemeService } from '@nebular/theme';
import { LoginComponent } from './login/login.component';
import { RoutingModule } from "../routing/routing.module";
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from "../environments/environment";


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
      NbSidebarModule,
      AngularFireModule.initializeApp(environment.firebaseConfig),
      AngularFireDatabaseModule,
      AngularFireAuthModule
  ],
  providers: [NbSidebarService, NbThemeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
