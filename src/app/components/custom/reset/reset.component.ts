import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { HttpService } from 'src/app/shared/services/http.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {
  public loginForm: FormGroup;
  submitted = false;
  emailid :any;
    errorCount: number;
    userId: any;
  constructor(
    public toastr: ToastrService,

    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private routeTo: Router,

    public httpService: HttpService,
    private loader: NgxUiLoaderService,
  ) {

   }

  ngOnInit(): void {
    this.createForm();
  }
  get loginFormControl(){
    return this.loginForm.controls;
  }
  createForm() {
    this.loginForm = this.formBuilder.group({
      'email': ["", Validators.required],
      'confirmPass': ["", Validators.required],

      'password': ["", Validators.required],
    });
  }
  onSubmit() {
    // ////debugger
    this.submitted = true;

    let jsonData = {
      // email: this.loginForm.value.email,
      password: this.loginForm.value.password
    }
    this.loader.start();
    this.httpService.resetPassword(jsonData).subscribe((res: any) => {
      if (res['success'] == true) {        
        this.httpService.toastr.success(res['message'], '', {
          positionClass: 'toast-bottom-right', closeButton: true, timeOut: 5000
        });
        this.router.navigate(['login']);
      } else if (res['success'] == false) {
        // this.notOKstat = res['UserConfiguration']['ErrorMessage'];
        // this.httpService.toastr.error(res['UserConfiguration']['ErrorMessage']);
        this.httpService.toastr.error(res['message'], '', {
          positionClass: 'toast-bottom-right', closeButton: true, timeOut: 5000
        });
      }
    }, 
    (err) => {
      // this.loader.stop();
      this.toastr.error("Please enter a diffrent password");
      // this.httpService.errorCallBack(false);
    });
  }
}
