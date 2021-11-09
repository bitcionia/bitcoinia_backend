import { ChangeDetectorRef, Component, ElementRef, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as SecureLS from 'secure-ls';
import { AppComponent } from 'src/app/app.component';
import { HttpService } from 'src/app/shared/services/http.service';

@Component({
  selector: 'app-lockscreen',
  templateUrl: './lockscreen.component.html',
  styleUrls: ['./lockscreen.component.scss']
})
export class LockscreenComponent implements OnInit {
  public lockForm: FormGroup;
  userPass: any;
  userId: any;
  hide: boolean = true; 
  public showPassword: boolean;
  public showPasswordOnPress: boolean;
  password: string;
  show: boolean;
  fieldTextType: boolean;

  constructor(
    private _elementRef: ElementRef,
    private _zone: NgZone,
    public formBuilder: FormBuilder,
    private _cd: ChangeDetectorRef,
    public routeTo: Router,
    public service: HttpService,
    public appComp: AppComponent
  ) {
    this.createForm();
    console.log(this.routeTo.url);
  }

  ngOnInit() {
    if (localStorage.getItem("userid") != null || localStorage.getItem("userid") != undefined) {
      this.userId = JSON.parse(localStorage.getItem('userid'));
      var userName = this.userId.split('-')[0];
      // console.log(userName);
      this.lockForm.setValue({
        userid: userName,
        password: '',
      })
      this.appComp.inactive = true;
    }

    var ls = new SecureLS();
    this.userPass = ls.get('userPass'); // print data
    console.log(this.userPass.data)
    this.password =this.userPass.data
  }

  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }
  onClick() {
    // //debugger
    if (this.password === this.password ) {
      this.password = 'text';
      this.show = true;
    } else {
      this.password = 'password';
      this.show = false;
    }
  }


  createForm() {

    this.lockForm = this.formBuilder.group({
      'userid': ["", Validators.required],
      'password': ["", Validators.required],
    });
  }


  
  onpassSubmit() {
    // //debugger
    var password = this.userPass.data
    if (password) {
      if (password === this.lockForm.value.password) {
        this.appComp.inactive = false;
        this.routeTo.navigateByUrl("dashboard/dashboard");
      } else {
        this.service.toastr.error("Incorrect Password", "", {
          positionClass: "toast-bottom-right",
          closeButton: true,
          timeOut: 5000,
        });
      }
    }
    else {
      this.service.errorCallBack(false);
    }
  }

  

}
