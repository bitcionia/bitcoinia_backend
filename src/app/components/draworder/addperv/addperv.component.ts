import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { HttpService } from 'src/app/shared/services/http.service';

@Component({
  selector: 'app-addperv',
  templateUrl: './addperv.component.html',
  styleUrls: ['./addperv.component.scss']
})
export class AddpervComponent implements OnInit {
  User: any;
  status: any;
  createdat: any;
  loginForm: FormGroup;
  id: any;
  submitted: boolean;
  endTime: any;
  starttime: any;
  winningprice: any;
  startTime: any;
  pipe = new DatePipe("en-");
  StartTime: string;
  EndTime: string;
  price:any;
  constructor(
    public toastr: ToastrService,

    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private routeTo: Router,
  
    public httpService: HttpService,
    private loader: NgxUiLoaderService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.createForm();
    var datePipe = new DatePipe("en-US");

    this.StartTime = datePipe.transform(this.startTime,'yyyy-mm-dd:HH:mm:ss');
    this.EndTime = datePipe.transform(this.endTime,'yyyy-mm-dd:HH:mm:ss');

    console.log(this.StartTime)
  }
  createForm() {
    this.loginForm = this.formBuilder.group({
      
      'username':['', Validators.required],
      'StartTime': ['', Validators.required],
      'EndTime':['', Validators.required],
      'winningprice':['', Validators.required],
      'price':['', Validators.required],

    });
  }
 
  get loginFormControl(){
    return this.loginForm.controls;
  }
  // gotopervdraw(){
  //   this.router.navigateByUrl('draworder/draworderpage')
  
  // }
  // onSubmit() {

  //   // ////debugger
  //   this.submitted = true;
   
  // // for(let idex of this.mobile){
  // //   this.mobile =  idex['number'];
  // //   this.country =  idex['countryCode'];
  // //   this.countrycode =  idex['dialCode'];
  // // }

  //   // 
  //   let jsonData = {
  //     name:this.loginForm.value.username,
  //     winning_price:this.loginForm.value.winningprice,
  //     price:this.loginForm.value.price,
  //     start_time:this.loginForm.value.StartTime,
  //     end_time:this.loginForm.value.EndTime,
      
  //   }
  //   if (this.loginForm.value.username .length > 0) {
  
  //   this.loader.start();
  //   this.httpService.getcreatedraw(jsonData).subscribe(res => {
  
  //     this.loader.stop();
  //     // this.appComponent.startWatching();
  //     if (res['success'] == true) {
  //       // this.httpService.toastr.success(res['message'], '', {
  //       //   positionClass: 'toast-bottom-right', closeButton: true, timeOut: 3000
  //       // });
  //       // setInterval(() => {
  
  //       // }, 1500);
  //       // this.router.navigateByUrl('/user/userlist')
  // // this.gotopervdraw();
  //       // this.generateUserOTP();
  //     } else if (res['success'] == false) {
  //       // this.notOKstat = res['UserConfiguration']['ErrorMessage'];
  //       // this.httpService.toastr.error(res['UserConfiguration']['ErrorMessage']);
  //       this.httpService.toastr.error(res['message'], '', {
  //         positionClass: 'toast-bottom-right', closeButton: true, timeOut: 5000
  //       });
  //     }
  //   },
  //   (err) => {
  //     // this.loader.stop();
  //     this.toastr.error("email_already_found");
  //     // this.httpService.errorCallBack(false);
  //   });
  // }
  // }

}
