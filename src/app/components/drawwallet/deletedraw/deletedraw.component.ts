import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { HttpService } from 'src/app/shared/services/http.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-deletedraw',
  templateUrl: './deletedraw.component.html',
  styleUrls: ['./deletedraw.component.scss']
})
export class DeletedrawComponent implements OnInit {
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
  Endtime: any;
  winning: any;
  startTime: any;
  constructor(public dialogRef: MatDialogRef<DeletedrawComponent>,
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
    this.Endtime=this.data['data']['end_time']
    this.User=this.data['data']['name']
    this.winning=this.data['data']['winning_price']
    this.status=this.data['data']['status']
    this.startTime=this.data['data']['start_time']
    this.createdat=this.data['data']['createdAt']
    this.updatedat=this.data['data']['updatedAt']
    this.updated=this.updatedat.split(".")[0]
    this.id=this.data['data']['_id']
this.created=this.createdat.split(".")[0],
    console.log(this.User)
   }

   ngOnInit(): void {
  }
  closeModelBox(): void {
    this.dialogRef.close();
  }
  warningAlert() {
    this.getdrawdelete();
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
    this.router.navigateByUrl('/drawwallet/Drawwallet')

  }
  getdrawdelete(){
      // ////debugger
      let jsonData = {
        id:this.id,
      }
      this.httpService.getdrawdelete(jsonData).subscribe(res => {
        this.loader.stop();
        this.dialogRef.close();
      });
    }


}
