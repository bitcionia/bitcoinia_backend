import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/shared/services/http.service';

@Component({
  selector: 'app-changepasspage',
  templateUrl: './changepasspage.component.html',
  styleUrls: ['./changepasspage.component.scss']
})
export class ChangepasspageComponent implements OnInit {
  changepass: any;
  userDetails: any =[];
  userID: any;
  public loginForm: FormGroup;
   submitted= false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private routeTo: Router,
    public formBuilder: FormBuilder,


    public httpService: HttpService,
  ) { }

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
  createForm() {
    this.changepass = this.formBuilder.group({
      'oldPass': ['', [Validators.required, Validators.minLength(6)]],
      'newPass': ['', [Validators.required, Validators.minLength(6)]],
      'confirmPass': ['', [Validators.required, Validators.minLength(6)]],
    });
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
}
