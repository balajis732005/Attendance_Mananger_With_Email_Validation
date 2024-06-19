import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Emailsend } from 'src/app/model/emailsend.model';
import { Otpverify } from 'src/app/model/otpverify.model';
import { OtpverificationService } from 'src/app/service/otpverification.service';
import { SendemailService } from 'src/app/service/sendemail.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-verifyotp',
  templateUrl: './verifyotp.component.html',
  styleUrls: ['./verifyotp.component.css']
})
export class VerifyotpComponent implements OnInit {

  constructor(private otpverificationservices : OtpverificationService,
              private sendemailservices : SendemailService,
              private router : ActivatedRoute,
              private nextroute : Router,
              private toastr : ToastrService
  ) {}

  routeEmail! : string;

  ngOnInit(): void {
      this.router.queryParams.subscribe((params: any) => {
        this.routeEmail = params.data;
      })
  }

  otpEmailData = new FormGroup(
    {
      userotp : new FormControl("",[Validators.required])
    }
  )

  emailSent! : boolean;

  emailVerify() {
    let getEmail : Emailsend = {email : this.routeEmail};
    this.sendemailservices.sendVerificationEmail(getEmail)
    .subscribe((emailsendvalid) => {
      this.setEmailSent(emailsendvalid);
    })
  }

  setEmailSent(value : boolean) {
    this.emailSent=value;
  }

  onOtpSubmit() {

    console.log(this.otpEmailData.value.userotp);

    let verfiydata : Otpverify = {otp : this.otpEmailData.value.userotp!, email : this.routeEmail};

    this.otpverificationservices.verifyOtp(verfiydata)
    .subscribe((validotp) => {
      console.log(validotp);
      if(validotp){
        this.toastr.success("Email Has been Verified Sucessfully","Success");
        this.nextroute.navigate(['/name']);
      }else{
        this.toastr.error("Otp is not Valid","Invalid Verification"); 
      }
    })
  }

  emailSendToast() {
    this.toastr.success("Please Check your Inbox","Email Sent");
    this.emailSent=false;
  }

}
