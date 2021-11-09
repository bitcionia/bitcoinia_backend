import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import {  ViewChild, ElementRef } from '@angular/core';
@Component({
  selector: 'app-withdrawcan-pdf',
  templateUrl: './withdrawcan-pdf.component.html',
  styleUrls: ['./withdrawcan-pdf.component.scss']
})
export class WithdrawcanPdfComponent implements OnInit {
  withdrawcandata: any=[];
  @ViewChild('htmlData') htmlData:ElementRef;

  constructor() {
    this.withdrawcandata = JSON.parse(localStorage.getItem("withdrawcan"))
console.log(this.withdrawcandata)
   }

  ngOnInit(): void {

  }
  public openPDF():void {
    let DATA = document.getElementById('htmlData');
        
    html2canvas(DATA).then(canvas => {
        
        let fileWidth = 208;
        let fileHeight = canvas.height * fileWidth / canvas.width;
        
        const FILEURI = canvas.toDataURL('image/png')
        let PDF = new jsPDF('p', 'mm', 'a4');
        let position = 0;
        PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight)
        
        PDF.save('withdrawcan_list.pdf');
    });     

}

}
