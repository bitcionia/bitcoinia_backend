import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from 'src/app/shared/services/http.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-deletepayment',
  templateUrl: './deletepayment.component.html',
  styleUrls: ['./deletepayment.component.scss']
})
export class DeletepaymentComponent implements OnInit {
  User: any;
  coinname: any;
  symbol: any;
  status: any;
  tocoinaddress: any;
  fromcoinaddress: any;
  id: any;

  constructor(public dialogRef: MatDialogRef<DeletepaymentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog,
    public toastr: ToastrService,
    private formBuilder: FormBuilder,

    private route: ActivatedRoute,
    private router: Router,
    private routeTo: Router,

    public httpService: HttpService,) { 
      console.log(this.data)
      this.id=this.data['data']['_id']
      this.User=this.data['data']['username']
      this.coinname=this.data['data']['coinname']
      this.symbol=this.data['data']['symbol']
      this.status=this.data['data']['status']
      this.tocoinaddress=this.data['data']['to_coinaddress']
      this.fromcoinaddress=this.data['data']['from_coinaddress']
      console.log(this.User)
   
      }
  ngOnInit(): void {
    
  }
  closeModelBox(): void {
    this.dialogRef.close();
 
  }
  warningAlert() {
    this.deletepayment();
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
    this.router.navigateByUrl('/payment/userpayment')

  }
  deletepayment(){
      // ////debugger
      let jsonData = {
        id:this.id,
      }
      this.httpService.getpaymentdelete(jsonData).subscribe(res => {
        this.dialogRef.close();

      });
    }
}
