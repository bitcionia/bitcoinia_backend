import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-systemsettingpage',
  templateUrl: './systemsettingpage.component.html',
  styleUrls: ['./systemsettingpage.component.scss']
})
export class SystemsettingpageComponent implements OnInit {

  constructor(
    private router: Router

  ) { }

  ngOnInit(): void {
  }
  gotohome() {
    this.router.navigateByUrl('/dashboard/dashboard')
  }
}
