import { Component, OnInit, } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-constantpage',
  templateUrl: './constantpage.component.html',
  styleUrls: ['./constantpage.component.scss']
})
export class ConstantpageComponent implements OnInit {
 
  constructor(
    private router: Router

  ) { }

  ngOnInit(): void {
  }

  gotohome() {
    this.router.navigateByUrl('/dashboard/dashboard')
  }
  gotoqualification(){
    this.router.navigateByUrl('/pages/qualification')
  
  }
  gotodoc(){
    this.router.navigateByUrl('/pages/documenttype')
  
  }
}
