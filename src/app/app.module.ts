import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {
    NbThemeModule, NbLayoutModule, NbSidebarModule, NbSidebarService, NbThemeService,
    NbCardModule, NbTabsetModule, NbCheckboxModule
} from '@nebular/theme';
import { LoginComponent } from './login/login.component';
import { RoutingModule } from "../routing/routing.module";
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from "../environments/environment";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
      AppComponent,
      LoginComponent
  ],
  imports: [
      BrowserModule,
      RoutingModule,
      ReactiveFormsModule,
      /* Nebular Configuration */
      NbThemeModule.forRoot({name: 'cosmic'}),
      NbLayoutModule,
      NbSidebarModule,
      NbCardModule,
      NbTabsetModule,
      NbCheckboxModule,
      /* Firebase Configuration */
      AngularFireModule.initializeApp(environment.firebaseConfig),
      AngularFireDatabaseModule,
      AngularFireAuthModule
  ],
  providers: [NbSidebarService, NbThemeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
