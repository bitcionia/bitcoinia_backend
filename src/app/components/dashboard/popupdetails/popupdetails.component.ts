import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { HttpService } from 'src/app/shared/services/http.service';
import { DatePipe } from '@angular/common';

import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-popupdetails',
  templateUrl: './popupdetails.component.html',
  styleUrls: ['./popupdetails.component.scss']
})
export class PopupdetailsComponent implements OnInit {
  date: any;
  coinname: any;
  status: any;
  price_received: any;
  amount: any;
  symbol: any;

 
  constructor(public dialogRef: MatDialogRef<PopupdetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    
    public toastr: ToastrService,

    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private routeTo: Router,
  
    public httpService: HttpService,
    private loader: NgxUiLoaderService,
  ) { 
    console.log(this.data);

this.date=this.data['date']
this.coinname=this.data['coinname']
this.amount=this.data['amount']
this.price_received=this.data['price_received']
this.symbol=this.data['symbol']
this.status=this.data['status']
this.price_received=this.data['price_received']
 }

  ngOnInit(): void {
  }
 closeModelBox(): void {
    this.dialogRef.close();
 
  }
}
