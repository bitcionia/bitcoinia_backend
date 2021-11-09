import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { HttpService } from 'src/app/shared/services/http.service';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.scss']
})
export class ForgetComponent implements OnInit {
  public loginForm: FormGroup;
  // public submitted: boolean = false;
  submitted = false;

  constructor(
    public toastr: ToastrService,

    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private routeTo: Router,

    public httpService: HttpService,
    private loader: NgxUiLoaderService,
  ) { }

  ngOnInit(): void {
    this.createForm();

  }
  get loginFormControl() {
    return this.loginForm.controls;
  }
  createForm() {
    this.loginForm = this.formBuilder.group({
      'email': ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      // 'email': ["", Validators.required,Validators.pattern(this.emailPattern)],
    });
  }
  onSubmit() {
    // ////debugger
    this.submitted = true;

    let jsonData = {
      email: this.loginForm.value.email,
    }
    this.loader.start();
    this.httpService.forgetPassword(jsonData).subscribe(res => {
      if (res['success'] == true) {        
        this.httpService.toastr.success(res['message'], '', {
          positionClass: 'toast-bottom-right', closeButton: true, timeOut: 5000
        });
        // this.router.navigate(['custom/reset-password']);
      } else if (res['success'] == false) {
        // this.notOKstat = res['UserConfiguration']['ErrorMessage'];
        // this.httpService.toastr.error(res['UserConfiguration']['ErrorMessage']);
        this.httpService.toastr.error('The email must be a valid email address', '', {
          positionClass: 'toast-bottom-right', closeButton: true, timeOut: 5000
        });
      }
    // }, 
    // (err) => {
    //   // this.loader.stop();
    //   // this.toastr.error("Please try after some time");
    //   this.toastr.error("The email field is mandatory.", "", {
    //     positionClass: 'toast-bottom-right', closeButton: true, timeOut: 5000
    //   });
    //   this.httpService.errorCallBack(false);
    });
  }
 
}
