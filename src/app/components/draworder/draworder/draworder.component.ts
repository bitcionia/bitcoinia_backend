import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { HttpService } from 'src/app/shared/services/http.service';
import Swal from 'sweetalert2';
import { EditlistComponent } from '../../user/editlist/editlist.component';
import { ViewlistComponent } from '../../user/viewlist/viewlist.component';
import { DeletepervComponent } from '../deleteperv/deleteperv.component';
import { EditpervComponent } from '../editperv/editperv.component';

@Component({
  selector: 'app-draworder',
  templateUrl: './draworder.component.html',
  styleUrls: ['./draworder.component.scss']
})
export class DraworderComponent implements OnInit {

 
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
  CancelButton: boolean;
  del: any;
  drawlist: any[];
  // username: any;
  // email: any;
  
  constructor(
    public dialog: MatDialog,
    public toastr: ToastrService,
    private formBuilder: FormBuilder,

    private route: ActivatedRoute,
    private router: Router,
    private routeTo: Router,
    public Service: HttpService,

    public httpService: HttpService,
    private loader: NgxUiLoaderService,

  ) {
    
  }

  ngOnInit(): void {
    this.getdrawlist();
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

  warningAlert(item) {
    // //debugger
    this.id=item['_id']
    this.del=item['_id']
    var id =this.id
    Swal.fire({
      icon: 'warning',
      title: 'Are you sure ?',
      text: 'Your will not be able to recover this imaginary file!',
      showCancelButton: true,
      confirmButtonColor: '#6259ca',
      cancelButtonColor: '#6259ca',
      confirmButtonText: 'Yes, delete it!',
      reverseButtons: true

    }).then((item) => {
      if (item.isConfirmed) {
        Swal.fire({
          title: 'Deleted!',
          text: 'Your imaginary file has been deleted.',
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
    const dialogRef = this.dialog.open(EditpervComponent, {
      width: '800px',
      height: '600px',
      data: { data: drawEdit, }
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.getdrawlist();
    });
  }
  // deleteuser(drawdelete) {
  //   const dialogRef = this.dialog.open(DeletepervComponent, {
  //     width: '600px',
  //     height: '600px',

  //     data: { data: drawdelete, }
  //   });
  //   dialogRef.afterClosed().subscribe((result) => {
  //     setInterval(() => {
  //       this.getdrawlist();
  //     }, 3000);
  //   });
  // }
  
  // textClear(){
  //   this.username =''; 
  //   this.email ='';
  // }
  textClear(){
    // this.username =''; 
    this.value = null;
  }
  add() {
    this.router.navigateByUrl('/user/adduser')

  }
  gotoview(drawview) {
    this.router.navigateByUrl('/draworder/viewlist')
        localStorage.setItem("dataview", JSON.stringify(drawview));

  }
  gotohome() {
    this.router.navigateByUrl('/drawwallet/Drawwallet')
  }
  //   getUseractive(){

  //     this.httpService.getUser().subscribe((res: any) => {
  //       this.loader.stop();

  //       console.log(res['data'])
  //       this.data= res['data']
  // this.totalLength=this.data.length;
  // console.log(this.totalLength)
  //       if (res['success'] == true) {
  //         // this.toastr.success(res['StatusOfRequest']['Message'], '', { closeButton: true, timeOut: 5000 });
  //         this.httpService.toastr.success(res['message'], '', {
  //           positionClass: 'toast-bottom-right', closeButton: true, timeOut: 5000
  //         });
  //         // this.routeTo.navigateByUrl('custom/twofactor');
  //       }
  //     }, (err) => {
  //       this.toastr.error("Please try after some time");
  //     });
  //   }
  getdrawlist() {

    this.httpService.getdrawpervlist().subscribe((res: any) => {

      console.log(res['data'])
      localStorage.setItem("pervdraw", JSON.stringify(res['data']));

      this.drawlist = res['data']
      // this.status = res['data']['status']
      this.id = res['data']['_id']
      console.log(this.id)
      this.totalLength = this.drawlist.length;

      if (this.drawlist) {
        if (this.drawlist.length > 0) {
      if (res['success'] == true) {
        this.showDatafound = true;
        // this.searchdraw();

        // this.httpService.toastr.success(res['message'], '', {
        //   positionClass: 'toast-bottom-right', closeButton: true, timeOut: 5000
        // });
      }
    }
  }
  else {
    this.showDatafound = false;
    console.log("No Data found");

  }


    // delete this.loginForm.value.email;
    // delete this.loginForm.value.username;
    // }, (err) => {
    //   this.toastr.error("Please try after some time");
    },
    (err) => {
      this.Service.errorCallBack(false);
    });
  }
  // searchdraw() {
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
  searchuser(){

    if(this.username == ""){
     this.search();
    }else{
      this.data = this.data.filter(res =>{
        const name=res.username.toLocaleLowerCase().match(this.username.toLocaleLowerCase());
        // const email=res.email.toLowerCase().includes(this.email.toLowerCase())
        return (name);
      })
    }
  }
  
  search(){
    ////debugger
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
      this.getdrawlist();
    }
  // this.ngOnInit();
  

  }
  // drawstatus(){
  //   ////debugger
  //   this.submitted=true;
  // let jsonData = {
  //   // id: this.id,
  // status:this.value,
  // }
  
  // this.httpService.getdrawstatus(jsonData).subscribe((res: any) => {
  //   console.log(res['data'])
  //   this.data = res['data']
  // });
  // if(this.value == null){
  //   this.getdrawlist();
  // }
  // this.textClear();
 
  // }
  getdrawdelete(){
    // ////debugger
    let jsonData = {
      id:this.id,
    }
    this.httpService.getdrawdelete(jsonData).subscribe(res => {
      this.loader.stop();
    });
          // this.getdrawlist();

      this.getdrawlist();
       
     }
}
