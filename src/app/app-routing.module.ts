import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { UsersComponent } from "./users/users.component";
import { UserComponent } from "./users/user/user.component";
import { ServersComponent } from "./servers/servers.component";
import { ServerComponent } from "./servers/server/server.component";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { canActivateChildGuard } from "./auth-guard.service";
import { serverResolver } from "./server-resolver.service";
import { canDeactivateGuard } from "./servers/edit-server/can-deactivate-guard.service";


const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: 'users', component: UsersComponent, children: [
            { path: ':id/:name', component: UserComponent },
        ]
    },

    {
        path: 'servers',
        // canActivate: [ canActivateGuard ],
        canActivateChild: [canActivateChildGuard],
        component: ServersComponent,
        children: [{
            path: ':id',
            component: ServerComponent,
            resolve: { server: serverResolver }
        },
        {
            path: ':id/edit',
            component: EditServerComponent,
            canDeactivate: [canDeactivateGuard]
        }]
    },
    { path: '**', component: PageNotFoundComponent }

];
@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}