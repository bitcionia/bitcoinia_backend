import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { HttpService } from 'src/app/shared/services/http.service';
import Swal from 'sweetalert2';
import { DeleteuserComponent } from '../deleteuser/deleteuser.component';
import { EditlistComponent } from '../editlist/editlist.component';
import { ViewlistComponent } from '../viewlist/viewlist.component';

@Component({
  selector: 'app-inactive',
  templateUrl: './inactive.component.html',
  styleUrls: ['./inactive.component.scss']
})
export class InactiveComponent implements OnInit {
  Status: any = ['Active', 'Inactive'];
  public loginForm: FormGroup;
submitted:boolean=false;
  data: any[];
  Data: any[];
  totalLength: any;
  page: number = 1;
  status:true;
  id: any;
  userDetails: any;
  showDatafound: boolean;
  username: any;
  email: any;
  // username: any;
  // email: any;

  constructor(
    public dialog: MatDialog,
    public toastr: ToastrService,
    private formBuilder: FormBuilder,

    private route: ActivatedRoute,
    private router: Router,
    private routeTo: Router,
    public httpClient: HttpClient,

    public httpService: HttpService,
    private loader: NgxUiLoaderService,

  ) {
    
  }

  ngOnInit(): void {
    this.getinactivelist();
  //  this.createForm();
  
  //search api
  let jsonData={
    key: this.username,
        status:true,
  }
       this.httpService.getsearch(jsonData).subscribe((res: any) => {
        console.log(res['data'])
            this.data = res['data']
       });
  }
  get loginFormControl() {
    return this.loginForm.controls;
  }
  // createForm() {
  //   this.loginForm = this.formBuilder.group({

  //     username: ['', Validators.required],
  //     email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
  //     status: ['', Validators.required],
  //   });
  // }
  
  addsymbol(userdetails) {
    const dialogRef = this.dialog.open(ViewlistComponent, {
      width: '600px',
      height: '600px',
      data: { data: userdetails, }
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.getinactivelist();
      // this.searchuser();

    });
  }


 
  // editsymbol(userEdit) {
  //   const dialogRef = this.dialog.open(EditlistComponent, {
  //     width: '800px',
  //     height: '600px',
  //     data: { data: userEdit, }
  //   });
  //   dialogRef.afterClosed().subscribe((result) => {
  //     this.getinactivelist();
  //   });
  // }
  // deleteuser(userdelete) {
  //   const dialogRef = this.dialog.open(DeleteuserComponent, {
  //     width: '600px',
  //     height: '600px',

  //     data: { data: userdelete, }
  //   });
  //   dialogRef.afterClosed().subscribe((result) => {
  //     setInterval(() => {
  //       this.getinactivelist();
  //     }, 3000);
  //   });
  // }
  
  // textClear(){
  //   this.username =''; 
  //   this.email ='';
  // }
  user(){
    this.router.navigateByUrl('/user/userlist')

  }
  add() {
    this.router.navigateByUrl('/user/adduser')
  }
 
  gotohome() {
    this.router.navigateByUrl('/dashboard/dashboard')
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
  getinactivelist() {
// ////debugger
let jsonData={
   status:true
}
    this.httpService.getStatusUser(jsonData).subscribe((res: any) => {

      console.log(res['data'])
      this.data = res['data']
      this.status = res['data']['status']
      this.id = res['data']['_id']
      console.log(this.status)
      this.totalLength = this.data.length;

      console.log(this.totalLength)
      if (this.data) {
        if (this.data.length > 0) {
      if (res['success'] == true) {
        this.showDatafound = true;
        // this.searchuser();

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
    });
  }

  search(){
    if(this.username == "" && this.email== ""){
      this.ngOnInit();
     }else{
       this.data = this.data.filter(res =>{
         const name=res.username.toLocaleLowerCase().match(this.username.toLocaleLowerCase());
         const email=res.email.toLowerCase().includes(this.email.toLowerCase())
         return (name+email);
       })
     }
  }
  
  // searchview() {
  //   ////debugger
  //   this.submitted = true;
    
  //   let jsonData = {
  //     // id: this.id,
  //     key: this.loginForm.value.email,
  //     status:true,

  //   }
    
  //   this.httpService.getsearch(jsonData).subscribe((res: any) => {
  //     this.loader.stop();
     
  //     console.log(res['data'])
  //     this.data = res['data']
      
        
  //     if (res['success'] == true) {
  //       this.showDatafound = true;
  //       // this.httpService.toastr.success(res['message'], '', {
  //       //   positionClass: 'toast-bottom-right', closeButton: true, timeOut: 5000
  //       // });
  //     }
  
  //   // }, (err) => {
  //   //   this.toastr.error("Please try after some time");
  //   // this.textClear();
  //   });
  // //   if( this.email =''){
  // // this.getinactivelist();

  // //   }

  // }
}
