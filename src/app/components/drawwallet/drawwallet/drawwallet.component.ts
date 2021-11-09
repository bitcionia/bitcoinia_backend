import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ApexOptions } from 'apexcharts';
import { ChartComponent, } from "ng-apexcharts";
import { ClipboardService } from 'ngx-clipboard';
import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { HttpService } from 'src/app/shared/services/http.service';
import Swal from 'sweetalert2';
import { EditlistComponent } from '../../user/editlist/editlist.component';
import { ViewlistComponent } from '../../user/viewlist/viewlist.component';
import { DeletedrawComponent } from '../deletedraw/deletedraw.component';
import { EditdrawComponent } from '../editdraw/editdraw.component';
import { ViewdrawComponent } from '../viewdraw/viewdraw.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { DatePipe } from '@angular/common';
import { CommondataService } from 'src/app/shared/services/commondata.service';

@Component({
  selector: 'app-drawwallet',
  templateUrl: './drawwallet.component.html',
  styleUrls: ['./drawwallet.component.scss']
})
export class DrawwalletComponent implements OnInit {

 
  public loginForm: FormGroup;
submitted:boolean=false;
  data: any[];
  Data: any[];
  totalLength: any;
  page: number = 1
  status:any[];
  id: any;
  userDetails: any;
  showDatafound: boolean;
  username: any;
  email: any;
  datastatus: any;
  value:number;
  del: any;
  name: any;
  drawid:any;
  dataa: any;
  draw:any;
  date : any;
  minDate:any;
  maxDate:any;
  // username: any;
  // email: any;
  startDate = new FormControl(new Date());
  endDate = new FormControl(new Date());
  constructor(
    public dialog: MatDialog,
    public toastr: ToastrService,
    private formBuilder: FormBuilder,

    private route: ActivatedRoute,
    private router: Router,
    private routeTo: Router,
    public sharedata:CommondataService,
    public httpService: HttpService,
    private loader: NgxUiLoaderService,

  ) {
    this.sharedata.activityLogShare.subscribe((msg: any) => {
     

      console.log( 'yuttttty',msg)
      
    
  });
  }

  ngOnInit(): void {
   
    this.getlist();
    
 this.createForm();

  }
  get loginFormControl() {
    return this.loginForm.controls;
  }
 
  createForm() {
    this.loginForm = this.formBuilder.group({

      username: ['', Validators.required],
      StartTime: ['', [Validators.required,this.dateRangeValidator]],
      EndTime:['', [Validators.required,this.dateRangeValidator]],    });
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
  addfunction(){
    this.router.navigateByUrl('/drawwallet/adddraw')
this.getnxtdraw()
  }
  
  warningAlert(item) {
    // //debugger
    this.id=item['_id']
    this.del=item['_id']
    var id =this.id
    Swal.fire({
      icon: 'warning',
      title: 'Are you sure ?',
      // text: 'Your will not be able to recover this imaginary file!',
      showCancelButton: true,
      confirmButtonColor: '#6259ca',
      cancelButtonColor: '#6259ca',
      confirmButtonText: 'Yes, Change it!',
      reverseButtons: true

    }).then((item) => {
      if (item.isConfirmed) {
        Swal.fire({
          title: 'Status Change!',
          text: 'Status Changed.',
          icon: 'success',
          confirmButtonColor: '#6259ca'
        })
        this.getdrawdelete();
      } 

    })
    // this.router.navigateByUrl('/user/userlist')
    // setTimeout(() => {
    //     },5000)

  }

 
  editsymbol(drawEdit) {
    const dialogRef = this.dialog.open(EditdrawComponent, {
      width: '800px',
      height: '600px',
      data: { data: drawEdit, }
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.getlist();
    });
  }
  // deleteuser(drawdelete) {
  //   const dialogRef = this.dialog.open(DeletedrawComponent, {
  //     width: '600px',
  //     height: '600px',

  //     data: { data: drawdelete, }
  //   });
  //   dialogRef.afterClosed().subscribe((result) => {
  //     setInterval(() => {
  //       this.getlist();
  //     }, 3000);
  //   });
  // }
  
  textClear(){
    // this.username =''; 
    this.value = null;
  }
  
  add() {
    this.router.navigateByUrl('/user/adduser')

  }
  gotoview(upcomview) {
    // //debugger
    this.router.navigateByUrl('/drawwallet/viewdraw')
    
    localStorage.setItem("upview", JSON.stringify(upcomview));

  }
  gotohome() {
    this.router.navigateByUrl('/dashboard/dashboard')
  }
 
  getlist() {
     //debugger
    this.httpService.getdrawupcomlist().subscribe((res: any) => {

      console.log(res['data'])

      this.data = res['data']
      localStorage.setItem("upcomdraw", JSON.stringify(res['data']));

      // this.name = res['data']['draw_id']['name']
      this.id = res['data']['_id']
      console.log(this.id)
      this.totalLength = this.data.length;

      if (this.data) {
        if (this.data.length > 0) {
      if (res['success'] == true) {
        this.showDatafound = true;
      }
    }
  }
  else {
    this.showDatafound = false;
    console.log("No Data found");

  }
  // if(res['success'] == false){
  //   this.routeTo.navigateByUrl("custom-pages/404-Error");
  // }
    });
  
    
  }
 
  // searchuser(){

  //   if(this.username == ""){
  //    this.search();
  //   }else{
  //     this.data = this.data.filter(res =>{
  //       const name=res.username.toLocaleLowerCase().match(this.username.toLocaleLowerCase());
  //       const email=res.email.toLowerCase().includes(this.email.toLowerCase());
  //       return (name);
  //     })
  //   }
  // }
  
  search(){
    // ////debugger
     //search api
  this.submitted=true;
  let jsonData = {
    // id: this.id,
    key: this.username,
  }
  
  this.httpService.getsearchdraw(jsonData).subscribe((res: any) => {
    console.log(res['data'])
    this.data = res['data']
    // this.drawstatus();
  });
  if(this.username == ""){
      this.getlist();
    }
  // this.ngOnInit();
}

  // }
  // drawstatus(){
  //   // ////debugger
  //   this.submitted=true;
  // let jsonData = {
  //   // id: this.id,
  // status:this.value,
  // }
  
  // this.httpService.getdrawstatus(jsonData).subscribe((res: any) => {
  //   console.log(res['data'])
  //   this.data = res['data']
  // });
  // this.textClear();
  // if(this.value == undefined){
  //   this.getlist();
  // }
  // }
  getdrawdelete(){
    // this.id=item['_id']

    //debugger
    let jsonData = {
      id:this.id,
    }
    this.httpService.getdrawdelete(jsonData).subscribe(res => {
      console.log(res['data'])
      this.dataa=res['data']
      this.loader.stop();
    });
    
      this.getlist();
      
  }
   getnxtdraw() {
     //debugger
    this.httpService.getnextdraw().subscribe((res: any) => {
      console.log(res['data'])
      this.drawid=res['data']
              this.draw =this.drawid+=1;
              console.log(this.draw)

    });
  }
   }

