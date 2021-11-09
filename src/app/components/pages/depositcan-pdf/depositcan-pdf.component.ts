import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import {  ViewChild, ElementRef } from '@angular/core';
@Component({
  selector: 'app-depositcan-pdf',
  templateUrl: './depositcan-pdf.component.html',
  styleUrls: ['./depositcan-pdf.component.scss']
})
export class DepositcanPdfComponent implements OnInit {

  depositcandata: any=[];
  @ViewChild('htmlData') htmlData:ElementRef;

  constructor() {
    this.depositcandata = JSON.parse(localStorage.getItem("depositcan"))
console.log(this.depositcandata)
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
        
        PDF.save('Depositcancel_list.pdf');
    });     

}


}
