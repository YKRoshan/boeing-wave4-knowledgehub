import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UploadComponent } from './upload/upload.component';
import { SearchcardComponent } from './searchcard/searchcard.component';
import { AdminUiComponent } from './admin-ui/admin-ui.component';

const routes: Routes = [
  {
    path:"home",
    component:HomeComponent
},
  {
    path:"login",
    component:LoginComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
},
{
  path: 'addfiles',

  component: UploadComponent
},
{
  path:'cards',

  component: SearchcardComponent
},
{
  path:'adminUI',
  component: AdminUiComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
