import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {LocationStrategy, HashLocationStrategy} from "@angular/common";
import {LoginComponent} from "../app/login/login.component";

export const routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: '', component: LoginComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}]
})
export class RoutingModule {

}