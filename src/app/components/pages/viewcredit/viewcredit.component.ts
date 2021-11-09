import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-viewcredit',
  templateUrl: './viewcredit.component.html',
  styleUrls: ['./viewcredit.component.scss']
})
export class ViewcreditComponent implements OnInit {
  no: any;
  image: any;
  type: any;
  content: any;
  status: any;

  

  constructor(public dialogRef: MatDialogRef<ViewcreditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,) { 
      console.log(this.data) 
    
      this.no=this.data['data']['no']
      this.status=this.data['data']['status']
      this.content=this.data['data']['content']
      this.type=this.data['data']['type']
      this.image=this.data['data']['image']

  }

  ngOnInit(): void {
  }
  closeModelBox(): void {
    this.dialogRef.close();
 
  }
}
