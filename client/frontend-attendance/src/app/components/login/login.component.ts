import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
import { Auth } from 'src/app/model/auth.model';
import { Name } from 'src/app/model/name.model';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/state/app.state';
import { authentication } from 'src/app/store/action/auth.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  constructor(private authServices : AuthService, 
              private route : Router,
              private store: Store<AppState>
  ) {}

  userLogin = new FormGroup(
    {
      email : new FormControl("",[Validators.required]),
      password : new FormControl("",[Validators.required])
    }
  )

  returnData! : Name;

  outputName! : string;

  loginCheck() {
    let userData : Auth = {email : this.userLogin.value.email! , password : this.userLogin.value.password!};

    console.log(userData);

    console.log("call");

    this.store.dispatch(authentication(
      {
        paylode : userData
      }
    ))

  }

  show : boolean = true;
  passtype : string = "password";

  passworShowOrNot() {
    if(this.show){
      this.passtype="text";
      this.show=false;
    }else{
      this.passtype="password";
      this.show=true;
    }
  }

}
