import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { HttpService } from 'src/app/shared/services/http.service';

@Component({
  selector: 'app-adddraw',
  templateUrl: './adddraw.component.html',
  styleUrls: ['./adddraw.component.scss']
})
export class AdddrawComponent implements OnInit {
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
  firstprice:any;
  coldprice:any;
  secondprice:any;
  fourthprice:any;
  thridprice:any;
index:any;
  drawid:number;
  touched: boolean;
  draw: any;
drawname:string;
startDate = new FormControl(new Date());
endDate = new FormControl(new Date());
  today: string;
  fg: FormGroup;
  percentage_1: any;
  percentage_2: any;
  percentage_3: any;
  percentage_4: any;
  cold_wallet_percentage: any;
  constructor(
    public toastr: ToastrService,

    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private routeTo: Router,
  
    public httpService: HttpService,
    private loader: NgxUiLoaderService,
    private router: Router

    
  ) { 
  
    // for(let i = 1; i <= 10; i++){
     
    //   this.drawid=[i];
    //   console.log(this.drawid);
    // }
    // this.drawid = JSON.parse(localStorage.getItem("drawid"))
    // this.draw ='Draw#' +this.drawid

    // this.drawid=this.drawid+1;
    this.fg = new FormGroup(
      {
        from: new FormControl(''),
        to: new FormControl(''),
      },
      [Validators.required, this.dateRangeValidator]
    );
  }
  ngOnInit(): void {
    var today = new Date();
    var datePipe = new DatePipe('en-US');
    this.today = datePipe.transform(today, 'yyyy-MM-dd');
    console.log("Today Date", this.today);
    
this.getnxtdraw();
    // this.drawid="Draw#1"

    // try{
    //   this.drawid = JSON.parse(localStorage.getItem("drawid"))
    //       this.draw ='Draw#' +this.drawid

    //   if(this.drawid==null){
    //     this.drawid=0;
    //     localStorage.setItem("drawid", JSON.stringify(this.drawid));
    //     this.draw ='Draw#' +this.drawid

    //   }
    // }
    // catch{
    //   this.drawid=0;
    //   this.draw ='Draw#' +this.drawid


    // }
    this.createForm();
    // var datePipe = new DatePipe("en-US");

    // this.StartTime = datePipe.transform(this.startTime,'yyyy-mm-dd:HH:mm:ss');
    // this.EndTime = datePipe.transform(this.endTime,'yyyy-mm-dd:HH:mm:ss');

    console.log(this.StartTime)
    // console.log( 'Tick time - ' +this.drawid)
    this.draw ='Draw#' +this.drawid

  }
 
 
  createForm() {
    this.loginForm = this.formBuilder.group({

      'draw':['', Validators.required],
      // 'username':['', Validators.required],
      'StartTime': ['', [Validators.required,this.dateRangeValidator]],
      'EndTime':['', [Validators.required,this.dateRangeValidator]],
      // 'winningprice': ['', Validators.required],
      'price':['', Validators.required],
      'coldprice':['', [Validators.required, Validators.maxLength(8)]],
      'firstprice':['', Validators.required],
      'secondprice':['',Validators.required],
      'thridprice':['', Validators.required],
      'fourthprice':['', Validators.required],

    },
    );
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
  get loginFormControl(){
    return this.loginForm.controls;
  }
  gotodraw(){
    this.router.navigateByUrl('drawwallet/Drawwallet')
  
  }
  
  onSubmit() {

    debugger
    this.submitted = true;
  
    let jsonData = {
      // drawid:this.loginForm.value.draw,
      name:this.loginForm.value.draw,
      // winning_price:this.loginForm.value.winningprice,
      price:this.loginForm.value.price,
      start_time:this.loginForm.value.StartTime,
      end_time:this.loginForm.value.EndTime,
      percentage_1:this.loginForm.value.firstprice,
      percentage_2:this.loginForm.value.secondprice,
      percentage_3:this.loginForm.value.thridprice,
      percentage_4:this.loginForm.value.fourthprice,
      cold_wallet_percentage:this.loginForm.value.coldprice,
    }
    this.StartTime =this.loginForm.value.StartTime
    this.EndTime =this.loginForm.value.EndTime
    this.price=this.loginForm.value.price
    
    this.percentage_1=this.loginForm.value.firstprice
    this. percentage_2=this.loginForm.value.secondprice
    this.percentage_3=this.loginForm.value.thridprice
    this.percentage_4=this.loginForm.value.fourthprice
    this.cold_wallet_percentage=this.loginForm.value.coldprice
    if (this.StartTime <= this.EndTime && this.price!=null && this.percentage_1!=null  && this.percentage_2!=null && this.percentage_3!=null && this.percentage_4!=null && this.cold_wallet_percentage!=null ) {
  
    this.loader.start();
    this.httpService.getcreatedraw(jsonData).subscribe(res => {

      this.loader.stop();
      // this.appComponent.startWatching();
      if (res['success'] == true) {
        this.router.navigateByUrl('drawwallet/Drawwallet')

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
  getnxtdraw() {
    //  //debugger
    this.httpService.getnextdraw().subscribe((res: any) => {
      console.log(res['data'])
      var res= res['data']
      
      this.drawid=parseInt(res.split("#")[1]);
    this.drawid=this.drawid+1;

        this.draw ='Draw#' +this.drawid

    // this.drawname="Draw#"
    // this.drawname=this.drawname+this.drawid
              console.log(this.draw)
      
  

    });
  }
  addfunction(){

    if(this.loginForm.value.EndTime.length>0){
    // this.drawid=this.drawid+1
        // localStorage.setItem("drawid", JSON.stringify(this.drawid));
                this.getnxtdraw();

    }
      }
}
