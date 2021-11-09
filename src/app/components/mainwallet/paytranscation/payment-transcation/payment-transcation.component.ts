import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EditlistComponent } from 'src/app/components/user/editlist/editlist.component';
import { ViewlistComponent } from 'src/app/components/user/viewlist/viewlist.component';
import { HttpService } from 'src/app/shared/services/http.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-payment-transcation',
  templateUrl: './payment-transcation.component.html',
  styleUrls: ['./payment-transcation.component.scss']
})
export class PaymentTranscationComponent implements OnInit {
  Symbol: any = ['BTC', 'DTC']
 bitcoin: any = ['bitcoin', 'digitalcoin']

  Status: any = ['Active', 'Inactive'];
  public loginForm: FormGroup;
submitted:boolean=false;
  data: any[];
  Data: any[];
  totalLength: any;
  page: number = 1
  status: number;
  id: any;
  userDetails: any;
  showDatafound: boolean;
  username: any;
  email: any;
  datastatus: any;
  DrawId:any;
  drawname: any;
  // username: any;
  // email: any;

  constructor(
    public dialog: MatDialog,
    public toastr: ToastrService,
    private formBuilder: FormBuilder,

    private route: ActivatedRoute,
    private router: Router,
    private routeTo: Router,

    public httpService: HttpService,

  ) {
    
  }

  ngOnInit(): void {
    this.getpaymentlist();
 this.createForm();
  }
  get loginFormControl() {
    return this.loginForm.controls;
  }
  createForm() {
    this.loginForm = this.formBuilder.group({

      'drawname': ['', Validators.required],
      'symbol': ['', Validators.required],
      'coinname': ['', Validators.required],
    });
  }
  
  
  // view(paymentdetails) {
  //   const dialogRef = this.dialog.open(ViewpaymentComponent, {
  //     width: '600px',
  //     height: '600px',
  //     data: { data: paymentdetails, }
  //   });
  //   dialogRef.afterClosed().subscribe((result) => {
  //     this.getpaymentlist();
  //     // this.searchuser();

  //   });
  // }


 
  // editsymbol(drawEdit) {
  //   const dialogRef = this.dialog.open(EditdrawComponent, {
  //     width: '800px',
  //     height: '600px',
  //     data: { data: drawEdit, }
  //   });
  //   dialogRef.afterClosed().subscribe((result) => {
  //     this.getpaymentlist();
  //   });
  // }
  // deleteuser(drawdelete) {
  //   const dialogRef = this.dialog.open(DeletepaymentComponent, {
  //     width: '600px',
  //     height: '600px',

  //     data: { data: drawdelete, }
  //   });
  //   dialogRef.afterClosed().subscribe((result) => {
  //     setInterval(() => {
  //       this.getpaymentlist();
  //     }, 3000);
  //   });
  // }
  
  // textClear(){
  //   this.username =''; 
  //   this.email ='';
  // }
// view() {
//     this.router.navigateByUrl('/payment/userpayment')

//   }
gotoadd(){
  this.router.navigateByUrl('/payment/addpayment')
}
gotoinactive(){
  this.router.navigateByUrl('/wallet/inactivepayment')

}
  gotohome() {
    this.router.navigateByUrl('/dashboard/dashboard')
  }
  
  getpaymentlist() {
// ////debugger
    this.httpService.getpaymentlist().subscribe((res: any) => {

      console.log(res['data'])
        if(res['data']['paymentstatus'] == 1){
      this.data = res['data']
      localStorage.setItem("trans", JSON.stringify(res['data']));

      this.id = res['data']['_id']
      console.log(this.id)
      this.totalLength = this.data.length;
      console.log(this.totalLength)
      if (this.data) {
        if (this.data.length > 0) {
      if (res['success'] == true) {
        this.showDatafound = true;
      }
    }
  }
}
  else {
    this.showDatafound = false;
    console.log("No Data found");

  }

    });
  }
  // searchpayment() {
  //   if(this.username == ""){
  //     this.showDatafound = false;

  //     this.search();
  //    }else{
  //      this.data = this.data.filter(res =>{
  //        return res.username.toLocaleLowerCase().match(this.username.toLocaleLowerCase());
  //      })
  //    }
  //    console.log(this.data)
  // }
 search(){
  //debugger
  this.submitted=true;
  let jsonData = {
    // id: this.id,
    key:this.loginForm.value.drawname,
    symbol:this.loginForm.value.symbol,
    coinname:this.loginForm.value.coinname,
    // status:false,
  }
  
  this.httpService.getsearchpayment(jsonData).subscribe((res: any) => {
    console.log(res['data'])
    this.data = res['data']
  });
 }
}


