
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { HttpService } from 'src/app/shared/services/http.service';
import { DatePipe } from '@angular/common';

import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-editdraw',
  templateUrl: './editdraw.component.html',
  styleUrls: ['./editdraw.component.scss']
})
export class EditdrawComponent implements OnInit {
  // EndTime=Date.now();
  // StartTime=Date.now();

  Email: any;
  firstname: any;
  lastname: any;
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
  // pipe = new DatePipe("en-us");
  StartTime: number;
  EndTime: number;
  price: any;
  coldprice: any;
  firstprice: any;
  secondprice: any;
  thridprice: any;
  fourthprice: any;
  // StartTime: string;
  // EndTime: string;

  constructor(public dialogRef: MatDialogRef<EditdrawComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    
    public toastr: ToastrService,

    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private routeTo: Router,
  
    public httpService: HttpService,
    private loader: NgxUiLoaderService,
  ) { 
    console.log(this.data);

    this.Email=this.data['data']['email']
    this.EndTime=this.data['data']['end_time']
    this.StartTime=this.data['data']['start_time']
      this.User=this.data['data']['name']
      this.status=this.data['data']['status']
      this.winningprice=this.data['data']['winning_price']
      this.price=this.data['data']['price']
      this.coldprice=this.data['data']['cold_wallet_percentage']
      this.firstprice=this.data['data']['percentage_1']
      this.secondprice=this.data['data']['percentage_2']
      this.thridprice=this.data['data']['percentage_3']
      this.fourthprice=this.data['data']['percentage_4']
      this.id=this.data['data']['_id']
      // this.StartTime=Date.now();
      // this.EndTime=Date.now();
      console.log(this.data['data']['start_time'])
      console.log(this.data['data']['end_time'])

      console.log(this.StartTime);
      console.log(this.EndTime);

  }

  ngOnInit(): void {
    this.createForm();
    // var datePipe = new DatePipe("en-US");

    // this.startTime = datePipe.transform(this.StartTime,'yyyy-mm-dd:HH:mm:ss');
    // this.endTime = datePipe.transform(this.EndTime,'yyyy-mm-dd:HH:mm:ss');

    // console.log(this.StartTime)
  }
  createForm() {
    this.loginForm = this.formBuilder.group({
      
      'User':['', Validators.required],
      'StartTime': ['', [Validators.required,this.dateRangeValidator]],
      'EndTime':['', [Validators.required,this.dateRangeValidator]],
      'winningprice':['', Validators.required],
      'price':['', Validators.required],
      'coldprice':['', [Validators.required]],
      'firstprice':['', [Validators.required]],
      'secondprice':['', [Validators.required]],
      'thridprice':['', [Validators.required]],
      'fourthprice':['', [Validators.required]],
    });
  }
  closeModelBox(): void {
    this.dialogRef.close();
  }
  get loginFormControl(){
    return this.loginForm.controls;
  }
  successAlert() {
    // this.onSubmit();
    Swal.fire({
      icon: 'success',
      title: 'Well Done!',
      text: 'Draw Get Updated',
      confirmButtonColor: '#6259ca'
    })
    this.router.navigateByUrl('/drawwallet/Drawwallet')

  }
  private dateRangeValidator: ValidatorFn = (): {
    [key: string]: any;
  } | null => {
    let invalid = false;
    const from = this.loginForm && this.loginForm.get("StartTime").value;
    const to = this.loginForm && this.loginForm.get("EndTime").value;
    if (from && to) {
      invalid = new Date(from).valueOf() > new Date(to).valueOf();
    }
    return invalid ? { invalidRange: { from, to } } : null;
  };
  onSubmit() {
// ////debugger
    this.submitted = true;

    // ////debugger
    let jsonData = {
      id:this.id,
      name:this.loginForm.value.User,
      end_time:this.loginForm.value.EndTime,
      start_time:this.loginForm.value.StartTime,
      winning_price: this.loginForm.value.winningprice,
      price: this.loginForm.value.price,
      cold_wallet_percentage: this.loginForm.value.coldprice,
      percentage_1:this.loginForm.value.firstprice,
      percentage_2:this.loginForm.value.secondprice,
      percentage_3:this.loginForm.value.thridprice,
      percentage_4:this.loginForm.value.fourthprice,
    }
    this.StartTime =this.loginForm.value.StartTime
    this.EndTime =this.loginForm.value.EndTime

    if (this.StartTime <= this.EndTime) {
    this.httpService.getUpdatedraw(jsonData).subscribe(res => {
      if (res['success'] == true) {
     
        setInterval(() => {
        }, 1500);
        this.dialogRef.close();

        // this.generateUserOTP();
      } else if (res['success'] == true) {
        // this.notOKstat = res['UserConfiguration']['ErrorMessage'];
        // this.httpService.toastr.error(res['UserConfiguration']['ErrorMessage']);
        this.httpService.toastr.error(res['message'], '', {
          positionClass: 'toast-bottom-right', closeButton: true, timeOut: 5000
        });
      }
    });
 
    // this.httpService.toastr.error('user_not_found', '', {
    //   positionClass: 'toast-bottom-right', closeButton: true, timeOut: 5000
    // })  
    this.successAlert();
  }
}
}
