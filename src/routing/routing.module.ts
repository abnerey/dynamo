import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {LocationStrategy, HashLocationStrategy} from "@angular/common";
import {LoginComponent} from "../app/login/login.component";
import {EditorComponent} from '../app/editor/editor.component';

export const routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: '', component: LoginComponent},
    {path: 'editor', component: EditorComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}]
})
export class RoutingModule {

}