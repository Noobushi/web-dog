import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './components/create-user-page/create-user/create-user.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AdminComponent } from './components/admin/admin.component';
import { userResolver } from './resolvers/user.resolver';

const routes: Routes = [
  { path: "", component: HomePageComponent },
  { path: "create", component: CreateUserComponent },
  { path: "admin", component: AdminComponent, resolve: { data: userResolver } }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
