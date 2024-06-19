import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NameComponent } from './components/name/name.component';
import { VerifyotpComponent } from './components/verifyotp/verifyotp.component';

const routes: Routes = [
  {path : '' , component : LoginComponent},
  {path : 'verifyotp' , component : VerifyotpComponent},
  {path : 'name' ,  component : NameComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
