import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from 'src/app/shared/services/http.service';

@Component({
  selector: 'app-securitypage',
  templateUrl: './securitypage.component.html',
  styleUrls: ['./securitypage.component.scss']
})
export class SecuritypageComponent implements OnInit {
  changepass: any;
  userDetails: any =[];
  userID: any;
  public loginForm: FormGroup;
   submitted= false;
   sms:FormGroup;
   emailauth:FormGroup;
   googleauth:FormGroup;
   sms_ak:any;
   sms_sk:any;
   email_ak:any;
   email_sk:any;
   googleauth_ak:any;
   googleauth_sk:any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private routeTo: Router,
    public formBuilder: FormBuilder,
    public toastr: ToastrService,
    public httpService: HttpService,
  ) {
    
    this.googleauth = this.formBuilder.group({
      'googleauth_ak':['', Validators.required],
       // 'username':['', Validators.required],
       'googleauth_sk': ['', Validators.required],    })
   }

  ngOnInit(): void {
    // if (localStorage.getItem("userdetails") != null || localStorage.getItem("userdetails") != undefined) {
    //   var userDetails = JSON.parse(localStorage.getItem("userdetails"));
    //   this.userDetails = userDetails;
    //   this.userID = this.userDetails['data']['email'];
    // }

    this.createForm()
  }

  gotohome() {
    this.router.navigateByUrl('/dashboard/dashboard')
  }
  gotoemail(){
    this.router.navigateByUrl('/pages/Emailpage')

  }
  gotosms(){
    this.router.navigateByUrl('/pages/smspage')

  }
  gotoremove(){
    this.router.navigateByUrl('/pages/removegoogleauth')

  }
  createForm() {
    this.changepass = this.formBuilder.group({
      'oldPass': ['', [Validators.required, Validators.minLength(6)]],
      'newPass': ['', [Validators.required, Validators.minLength(6)]],
      'confirmPass': ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  Email(){
    this.emailauth = this.formBuilder.group({
      'email_ak':['', Validators.required],
       // 'username':['', Validators.required],
       'email_sk': ['', Validators.required],    })
  }
  SMS() {
    this.sms = this.formBuilder.group({
     'sms_ak':['', Validators.required],
      // 'username':['', Validators.required],
      'sms_sk': ['', Validators.required],    })
    }
  get loginFormControl(){
    return this.changepass.controls;
  }
 
  changepassword() {
    this.submitted = true;

    // ////debugger
    if (this.changepass.value.newPass== this.changepass.value.confirmPass) {
      let JsonData = {
        "old_password": this.changepass.value.oldPass,
        "password": this.changepass.value.newPass,
        // "confirmPass": this.changepass.value.confirmPass,
        // "userId": this.userID,
      }
      this.httpService.changePassword(JsonData).subscribe(res => {
        // ////debugger
        if (res['success'] == true) {
          // this.toastr.success("Password changed Successfully");
          this.httpService.toastr.success(res['message'], '', {
            positionClass: 'toast-bottom-right', closeButton: true, timeOut: 5000
          });
          this.routeTo.navigateByUrl('login');
        }
      // }, (err) => {
      //   // this.httpService.toastr.error(err);
      //   this.httpService.toastr.error("All field is mandatory",
      //     '', {
      //     positionClass: 'toast-bottom-right', closeButton: true, timeOut: 5000
      //   });
      })
    } else {
      // this.httpService.toastr.error("Password didn't match");
      this.httpService.toastr.error("Password didn't match",
        '', {
        positionClass: 'toast-bottom-right', closeButton: true, timeOut: 5000
      });
    }
  }
  gotoauth(){
    this.router.navigateByUrl('/pages/GoogleAuth')

  }

  
  getsmskey(){
    //debugger
    let jsonData = {
      sms_sk:this.sms.value.sms_sk,
      sms_ak:this.sms.value.sms_ak,
    }
  
      this.httpService.getsmskey(jsonData).subscribe((res: any) => {
   console.log(res['data']);
   this.toastr.success(res ['message'], "", {
            positionClass: "toast-bottom-right",
            closeButton: true,
            timeOut: 5000,
          });
   });
  //  this.getlist();
  }
  getemailkey(){
    //debugger
    let jsonData = {
      email_sk:this.emailauth.value.email_sk,
      email_ak:this.emailauth.value.email_ak,
    }
  
      this.httpService.getemailkey(jsonData).subscribe((res: any) => {
   console.log(res['data']);
   this.toastr.success(res ['message'], "", {
            positionClass: "toast-bottom-right",
            closeButton: true,
            timeOut: 5000,
          });
   });
  //  this.getlist();
  }
  getgoogleauth(){
    //debugger
    let jsonData = {
      googleauth_sk:this.googleauth.value.googleauth_sk,
      googleauth_ak:this.googleauth.value.googleauth_ak,
    }
  
      this.httpService.getgoogleauth(jsonData).subscribe((res: any) => {
   console.log(res['data']);
   this.toastr.success(res ['message'], "", {
            positionClass: "toast-bottom-right",
            closeButton: true,
            timeOut: 5000,
          });
   });
  }
}
