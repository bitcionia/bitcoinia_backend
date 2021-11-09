import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { HttpService } from 'src/app/shared/services/http.service';
import Swal from 'sweetalert2';
import { EditcreditComponent } from '../editcredit/editcredit.component';
import { ViewcreditComponent } from '../viewcredit/viewcredit.component';

@Component({
  selector: 'app-creditpage',
  templateUrl: './creditpage.component.html',
  styleUrls: ['./creditpage.component.scss']
})
export class CreditpageComponent implements OnInit {

  public loginForm: FormGroup;
  submitted:boolean=false;
    data: any;
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
    dataa:any;
  dat: any;
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
              this.dataa = res['data']
         });
    }
    
    
    get loginFormControl() {
      return this.loginForm.controls;
    }
  
    
    addsymbol(userdetails) {
      const dialogRef = this.dialog.open(ViewcreditComponent, {
        // width: '80%',
        
        data: { data: userdetails, },
        panelClass: 'dialog-container-custom'

      });
      dialogRef.afterClosed().subscribe((result) => {
        this.getUserlist();
        // this.searchuser();
  
      });
    }
  
  
   
    editsymbol(userEdit) {
      const dialogRef = this.dialog.open(EditcreditComponent, {
        width: '800px',
        height: '600px',
        data: { data: userEdit, }
      });
      dialogRef.afterClosed().subscribe((result) => {
        this.getUserlist();
      });
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
            title: 'Are you Delete!',
            text: 'Delete.',
            icon: 'success',
            confirmButtonColor: '#6259ca'
          })
          this.deleteuser();
        } 
  
      })
      // this.router.navigateByUrl('/user/userlist')
      // setTimeout(() => {
      //     },5000)
  
    }
  
    add() {
      this.router.navigateByUrl('/pages/addcredit')
  
    }
    inactive() {
      this.router.navigateByUrl('/user/inactive')
  
    }
    gotohome() {
      this.router.navigateByUrl('/dashboard/dashboard')
    }
  
    getUserlist() {
      //debugger
      let jsonData={
        type:"credit"
      }
      this.httpService.listtype(jsonData).subscribe((res: any) => {
        console.log(res['data'])
        this.data = res['data']
         

       

          if (this.data.length > 0) {
        if (res['success'] == true) {
          this.showDatafound = true;
          // this.searchuser();
  
          // this.httpService.toastr.success(res['message'], '', {
          //   positionClass: 'toast-bottom-right', closeButton: true, timeOut: 5000
          // });
        }
      }
    
  
    else {
      this.showDatafound = false;
      console.log("No Data found");
  
    }
  
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
      //debugger
      
     
  // }
      let jsonData = {
        id:this.id,
      }
      this.httpService.deletextra(jsonData).subscribe(res => {
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
    
  
}
