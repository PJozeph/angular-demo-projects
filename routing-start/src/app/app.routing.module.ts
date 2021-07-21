import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { CanEditServer } from "./servers/edit-server/edit-server-guard";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { ServerComponent } from "./servers/server/server.component";
import { ServersComponent } from "./servers/servers.component";
import { UserComponent } from "./users/user/user.component";
import { UsersComponent } from "./users/users.component";

const appRoute: Routes = [
    { path: '', component: HomeComponent },
    {
        path: 'users', component: UsersComponent,
        children: [{ path: ':id/:name', component: UserComponent }]
    },
    {
        path: 'servers', component: ServersComponent,
        children: [
            { path: ':id', component: ServerComponent },
            { path: ':id/edit', component: EditServerComponent, canActivate : [CanEditServer]},
        ]
    },
    { path: 'not-found', component: PageNotFoundComponent },
    { path: '**', redirectTo: '/not-found' }
]

@NgModule({
    imports: [RouterModule.forRoot(appRoute)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}