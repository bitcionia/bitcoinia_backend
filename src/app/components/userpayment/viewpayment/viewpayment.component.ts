import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ViewlistComponent } from 'src/app/components/user/viewlist/viewlist.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-viewpayment',
  templateUrl: './viewpayment.component.html',
  styleUrls: ['./viewpayment.component.scss']
})
export class ViewpaymentComponent implements OnInit {
  User: any;
  coinname: any;
  symbol: any;
  status: any;
  tocoinaddress: any;
  fromcoinaddress: any;
  pricereceived: any;
  amount: any;

  constructor(public dialogRef: MatDialogRef<ViewlistComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,) { 
      console.log(this.data)
      this.User=this.data['data']['username']
      this.coinname=this.data['data']['coinname']
      this.symbol=this.data['data']['symbol']
      this.status=this.data['data']['status']
      this.amount=this.data['data']['amount']
      this.pricereceived=this.data['data']['price_received']
      console.log(this.User)
   
      }
  ngOnInit(): void {
    
  }
  closeModelBox(): void {
    this.dialogRef.close();
 
  }
  successAlert() {
    Swal.fire({
      icon: 'success',
      title: 'Well Done!',
      text: 'You clicked the button!',
      confirmButtonColor: '#6259ca'
    })
    this.dialogRef.close();

  }

}
