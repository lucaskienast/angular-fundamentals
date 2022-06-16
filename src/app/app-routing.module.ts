import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {BlogComponent} from "./components/blog/blog.component";
import {AboutComponent} from "./components/about/about.component";
import {UsersComponent} from "./components/users/users.component";
import {UserComponent} from "./components/users/user/user.component";
import {PlaceholderComponent} from "./components/placeholder/placeholder.component";
import {AuthGuard} from "./guards/auth/auth.guard";
import {ConfirmationGuard} from "./guards/confirmation/confirmation.guard";
import {ParentComponent} from "./components/parent/parent.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'blog', component: BlogComponent, canActivate: [AuthGuard] },
  { path: 'about', component: AboutComponent, canDeactivate: [ConfirmationGuard] },
  { path: 'parent', component: ParentComponent },
  { path: 'users',
    component: UsersComponent,
    canActivateChild: [AuthGuard],
    pathMatch: 'prefix',
    children:
      [
        { path: ':id', component: UserComponent },
        { path: '', component: PlaceholderComponent }
      ]
  },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard, ConfirmationGuard]
})
export class AppRoutingModule { }
