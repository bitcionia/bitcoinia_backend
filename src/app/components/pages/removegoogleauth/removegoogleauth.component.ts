import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-removegoogleauth',
  templateUrl: './removegoogleauth.component.html',
  styleUrls: ['./removegoogleauth.component.scss']
})
export class RemovegoogleauthComponent implements OnInit {

  firstFormGroup: FormGroup;
  otpForm:FormGroup;
  submitted1 = false;
  public settings = {
    length: 5,
    numbersOnly: true,
    timer: 60,
    timerType: 1
  }
  constructor(
    private fb: FormBuilder,
    public toastr: ToastrService,
    private router: Router,

  ) { }
  ngOnInit(): void {

    //rchwizard Content
    this.firstFormGroup = this.fb.group({
      // email:['', [Validators.required, Validators.minLength(6)]],
      AuthenticatorCode: ['', [Validators.required, Validators.minLength(6)]],
    });
   this.otpfrom();

  }
  otpfrom(){
    this.otpForm = this.fb.group({
      AuthenticatorCode: ['', [Validators.required, Validators.minLength(6)]],

      otp: [null, Validators.compose([
        Validators.required,
        Validators.pattern('^([0-9]+)$')
      ])]
    })
  }
  gotosec(){
    this.router.navigateByUrl('/pages/security')

  }
  get otpFormControl() {
    return this.otpForm.controls;
  }
    public onInputChange(e) {
      console.log(e);
      if(e.length == this.settings.length) {
        // e will emit values entered as otp and,
        console.log('otp is', e);
      }else if(e == -1) {
        // if e == -1, timer has stopped
        console.log(e, 'resend button enables');
      }else if(e == -2) {
        // e == -2, button click handle
        console.log('resend otp');
      }
    }
}
