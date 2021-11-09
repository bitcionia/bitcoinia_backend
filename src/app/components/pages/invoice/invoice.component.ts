import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import {  ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {
  upcomdata: any=[];
  @ViewChild('htmlData') htmlData:ElementRef;

  constructor() {
    this.upcomdata = JSON.parse(localStorage.getItem("upcomdraw"))
console.log(this.upcomdata)
   }

  ngOnInit(): void {

  }
  public openPDF():void {
    let DATA = document.getElementById('htmlData');
        
    html2canvas(DATA).then(canvas => {
        
        let fileWidth = 208;
        let fileHeight = canvas.height * fileWidth / canvas.width;
        
        const FILEURI = canvas.toDataURL('image/txt')
        let PDF = new jsPDF('p', 'mm', 'a4');
        let position = 0;
        PDF.addImage(FILEURI, 'txt', 0, position, fileWidth, fileHeight)
        
        PDF.save('Upcoming_draw_list.pdf');
    });     
    }
 

}
