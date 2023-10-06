import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './components/create-user-page/create-user/create-user.component';
import { HomePageComponent } from './components/home-page/home-page.component';

const routes: Routes = [
  { path: "", component: HomePageComponent },
  { path: "create", component: CreateUserComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
