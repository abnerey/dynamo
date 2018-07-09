import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {
    NbThemeModule, NbLayoutModule, NbSidebarModule, NbSidebarService, NbThemeService,
    NbCardModule, NbTabsetModule, NbCheckboxModule
} from '@nebular/theme';
import { LoginComponent } from './login/login.component';
import { EditorComponent } from './editor/editor.component';
import { RoutingModule } from '../routing/routing.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import {ReactiveFormsModule} from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { MonacoEditorModule } from 'ngx-monaco-editor';



@NgModule({
  declarations: [
      AppComponent,
      LoginComponent,
      EditorComponent
  ],
  imports: [
      BrowserModule,
      RoutingModule,
      ReactiveFormsModule,
      FormsModule,
      /* Nebular Configuration */
      NbThemeModule.forRoot({name: 'default'}),
      NbLayoutModule,
      NbSidebarModule,
      NbCardModule,
      NbTabsetModule,
      NbCheckboxModule,
      /* Firebase Configuration */
      AngularFireModule.initializeApp(environment.firebaseConfig),
      AngularFireDatabaseModule,
      AngularFireAuthModule,
      /*Monaco Configuration*/
      MonacoEditorModule.forRoot()
  ],
  providers: [NbSidebarService, NbThemeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
