import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from 'src/app/shared/services/http.service';

@Component({
  selector: 'app-addwallet',
  templateUrl: './addwallet.component.html',
  styleUrls: ['./addwallet.component.scss']
})
export class AddwalletComponent implements OnInit {
  data: any;
  showDatafound: boolean;
  public loginForm: FormGroup;
  submitted: boolean = false;
  amount:any=[];
  type:any=[];
  Form: FormGroup;
  constructor(
    public toastr: ToastrService,

    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private routeTo: Router,
  
    public httpService: HttpService,
  ) { 

  }

  ngOnInit():void {
    this.createForm();

  }
  
 
  createForm() {
    this.loginForm = this.formBuilder.group({

      'amount':['', Validators.required],
      // 'username':['', Validators.required],
      // 'winningprice': ['', Validators.required],
      'type':['', Validators.required],


    },
    );
  }
 
  get loginFormControl(){
    return this.loginForm.controls;
  }
  gotowallet(){
    this.router.navigateByUrl('wallet/crypto-dashboard')
  
  }

  onSubmit() {

    //debugger
    this.submitted = true;
  
    let jsonData = {
      amount:this.loginForm.value.amount,
      type:this.loginForm.value.type,
     
    }
    
if(this.loginForm.value.amount.length>0){
  
    this.httpService.add_wallet(jsonData).subscribe(res => {

      // this.appComponent.startWatching();
      if (res['success'] == true) {
        this.router.navigateByUrl('wallet/crypto-dashboard')

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
      this.toastr.error("Please fill the Details");
      // this.httpService.errorCallBack(false);
    });
  }
}
  }

