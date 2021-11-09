import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deletelog',
  templateUrl: './deletelog.component.html',
  styleUrls: ['./deletelog.component.scss']
})
export class DeletelogComponent implements OnInit {
  showDatafound:true
  constructor(
    private router: Router,

  ) { }

  ngOnInit(): void {
  }
  gotohome() {
    this.router.navigateByUrl('/dashboard/dashboard')
  }
}
