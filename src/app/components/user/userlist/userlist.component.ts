import { Component, OnInit, Pipe } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { HttpService } from 'src/app/shared/services/http.service';
import Swal from 'sweetalert2';
import { EditlistComponent } from '../editlist/editlist.component';
import { ViewlistComponent } from '../viewlist/viewlist.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { DeleteuserComponent } from '../deleteuser/deleteuser.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})


export class UserlistComponent implements OnInit {
  Status: any = ['Active', 'Inactive'];
  public loginForm: FormGroup;
submitted:boolean=false;
  data: any[];
  Data: any[];
  totalLength:number;
  page: number = 1
  status: any[];
  id: any;
  userDetails: any;
  showDatafound: boolean;
  username: any;
  email: any;
  datastatus: any;
  statustrue: any;
  statusfalse: any;
  p: number[] = [];
  item: any[];
  delete: any=[];
  del: any;
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
    private loader: NgxUiLoaderService,

  ) {
    
  }

  ngOnInit(): void {
    this.getUserlist();

  //  this.createForm();
  
  //search api
  let jsonData={
    key: this.username,
    email: this.email,
    status:false,
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
     
      data: { data: userdetails, }
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.getUserlist();
      // this.searchuser();

    });
  }


 
  editsymbol(userEdit) {
    const dialogRef = this.dialog.open(EditlistComponent, {
      width: '800px',
      height: '600px',
      data: { data: userEdit, }
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.getUserlist();
    });
  }
  // deleteuser(userdelete) {
  //   const dialogRef = this.dialog.open(DeleteuserComponent, {
  //     width: '600px',
  //     height: '600px',

  //     data: { data: userdelete, }
  //   });
  //   dialogRef.afterClosed().subscribe((result) => {
  //     setInterval(() => {
  //       this.getUserlist();
  //     }, 3000);
  //   });
  // }
  
  // textClear(){
  //   this.username =''; 
  //   this.email ='';
  // }
  warningAlert(item) {
    this.id=item['_id']
    this.del=item['_id']
    Swal.fire({
      icon: 'warning',
      title: 'Are you sure ?',
      text: 'Your will not be able to recover this imaginary file!',
      showCancelButton: true,
      confirmButtonColor: '#6259ca',
      cancelButtonColor: '#6259ca',
      confirmButtonText: 'Yes, delete it!',
      reverseButtons: true

    }).then((id) => {
      if (id.isConfirmed) {
        Swal.fire({
          title: 'Deleted!',
          text: 'Your imaginary file has been deleted.',
          icon: 'success',
          confirmButtonColor: '#6259ca'
        })
        this.deleteuser();

      }
    })
    // this.router.navigateByUrl('/user/userlist')
    // setTimeout(() => {
    //   this.getUserlist();
    //     },10000)

  }

  add() {
    this.router.navigateByUrl('/user/adduser')

  }
  inactive() {
    this.router.navigateByUrl('/user/inactive')

  }
  gotohome() {
    this.router.navigateByUrl('/dashboard/dashboard')
  }

  getUserlist() {
    this.httpService.getUserlist().subscribe((res: any) => {

      console.log(res['data'])
      this.data = res['data']
      
      this.status = res['data']['status']
      this.id = res['data']['_id']
      localStorage.setItem("dataid", JSON.stringify(res['data']['_id']));

      console.log(this.id)
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
  searchuser(){

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
  
  deleteuser(){
    // ////debugger
    
   
// }
    let jsonData = {
      id:this.id,
    }
    this.httpService.getdelete(jsonData).subscribe(res => {
      this.loader.stop();
      // // this.appComponent.startWatching();
      // if (res['success'] == true) {
      //   this.httpService.toastr.success('', '', {
      //     positionClass: 'toast-bottom-right', closeButton: true, timeOut: 3000
      //   });
      //   // this.generateUserOTP();
      // } else if (res['success'] == false) {
      //   // this.notOKstat = res['UserConfiguration']['ErrorMessage'];
      //   // this.httpService.toastr.error(res['UserConfiguration']['ErrorMessage']);
      //   this.httpService.toastr.error(res['message'], '', {
      //     positionClass: 'toast-bottom-right', closeButton: true, timeOut: 5000
      //   });
      // }
    });
      this.getUserlist();
      
  }
  // searchuser() {
  //   ////debugger
  //   this.submitted = true;
    
  //   let jsonData = {
  //     key: this.loginForm.value.email,
  //    status:false,
  //   }
  
  //   this.httpService.getsearch(jsonData).subscribe((res: any) => {
  //     this.loader.stop();
    
  //       this.data = res['data']
  //       for (let idx in this.data) {
  //         this.datastatus=this.data[idx]['deleted']
  //         console.log(this.datastatus)
  //         if (this.data[idx]['deleted'] == 'true') {
  //           this.statustrue.push(this.data[idx]);
  //           console.log(this.statusfalse);

  //         }
  //         if (this.data[idx]['deleted'] == 'false') {
  //           this.statusfalse.push(this.data[idx]);
  //           console.log(this.statusfalse);
  //         }
  //       }
  //     if(this.data){
  //     if (res['success'] == true) {
  //       this.showDatafound = true;
  //     }
  //   }
  //   });
  // } 

}
