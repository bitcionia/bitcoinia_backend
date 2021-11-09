import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { HttpService } from 'src/app/shared/services/http.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-deleteuser',
  templateUrl: './deleteuser.component.html',
  styleUrls: ['./deleteuser.component.scss']
})
export class DeleteuserComponent implements OnInit {
  id: any;
  User: any;
  Email: any;
  mobile: any;
  status: any;
  address: any;
  created: any;
  createdat: any;
  updatedat: any;
  updated: any;
  constructor(public dialogRef: MatDialogRef<DeleteuserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
       
    public toastr: ToastrService,

    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private routeTo: Router,
  
    public httpService: HttpService,
    private loader: NgxUiLoaderService,

  ) {
    console.log(this.data)
    this.Email=this.data['data']['email']
    this.User=this.data['data']['username']
    this.mobile=this.data['data']['mobile']
    this.status=this.data['data']['status']
    this.address=this.data['data']['address']
    this.createdat=this.data['data']['createdAt']
    this.updatedat=this.data['data']['updatedAt']
    this.updated=this.updatedat.split(".")[0]
    this.id=this.data['data']['_id']
this.created=this.createdat.split(".")[0],
    console.log(this.id)
   }

   ngOnInit(): void {
  }
  closeModelBox(): void {
    this.dialogRef.close();
  }
  warningAlert() {
    this.deleteuser();
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
      }
    })
    this.router.navigateByUrl('/user/userlist')

  }
  deleteuser(){
      // ////debugger
      let jsonData = {
        id:this.id,
      }
      this.httpService.getdelete(jsonData).subscribe(res => {
        this.loader.stop();
        this.dialogRef.close();

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
    }
}
