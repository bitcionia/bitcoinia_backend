import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from 'src/app/shared/services/http.service';

@Component({
  selector: 'app-addpayment',
  templateUrl: './addpayment.component.html',
  styleUrls: ['./addpayment.component.scss']
})
export class AddpaymentComponent implements OnInit {
  Symbol: any = ['BTC', 'DTC']
  bitcoin: any = ['bitcoin', 'digitalcoin']
  userid: any;
  status: any;
  coinname: any;
  loginForm: FormGroup;
  id: any;
  submitted: boolean;
  endTime: any;
  starttime: any;
  winningprice: any;
  startTime: any;
  StartTime: string;
  EndTime: string;
  tocoinaddress:number;
  fromcoinaddress:number;
  amount:number;
  pricereceived:number;
  symbol:string;
  transactionfee:number;
  constructor(
    public toastr: ToastrService,

    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private routeTo: Router,
  
    public httpService: HttpService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.createForm();
    
  }
  createForm() {
    this.loginForm = this.formBuilder.group({
      
      'userid':['', Validators.required],
      'tocoinaddress': ['', Validators.required],
      'fromcoinaddress':['', Validators.required],
      'coinname':['', Validators.required],
      'amount':['', Validators.required],
      'pricereceived':['', Validators.required],
      'symbol':['', Validators.required],
      // 'transactionfee':['', Validators.required],

    });
  }
 
  get loginFormControl(){
    return this.loginForm.controls;
  } 
  gotopayment(){
    this.router.navigateByUrl('/payment/userpayment')
  
  }
  gotoinactive(){
    this.router.navigateByUrl('/payment/inactivepayment')
  
  }
  onSubmit() {

    // ////debugger
    this.submitted = true;
   
 
    let jsonData = {
      user_id:this.loginForm.value.userid,
      to_coinaddress:this.loginForm.value.tocoinaddress,
      from_coinaddress:this.loginForm.value.fromcoinaddress,
      coinname:this.loginForm.value.coinname,
      amount:this.loginForm.value.amount,
      // transaction_fee:this.loginForm.value.transactionfee,
      symbol:this.loginForm.value.symbol,
      price_received:this.loginForm.value.pricereceived,


    }
    if (this.loginForm.value.userid .length > 0) {
  
    this.httpService.getcreatepayment(jsonData).subscribe(res => {
  
      // this.appComponent.startWatching();
      if (res['success'] == true) {
        // this.httpService.toastr.success(res['message'], '', {
        //   positionClass: 'toast-bottom-right', closeButton: true, timeOut: 3000
        // });
        // setInterval(() => {
  
        // }, 1500);
        // this.router.navigateByUrl('/user/userlist')
  // this.gotodraw();
        // this.generateUserOTP();
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
      this.toastr.error("email_already_found");
      // this.httpService.errorCallBack(false);
    });
  }
  }

}
