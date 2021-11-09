import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-emailpage',
  templateUrl: './emailpage.component.html',
  styleUrls: ['./emailpage.component.scss']
})
export class EmailpageComponent implements OnInit {
  firstFormGroup: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    public toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.firstFormGroup = this.fb.group({
      email:['', [Validators.required, Validators.minLength(6)]],
      AuthenticatorCode: ['', [Validators.required, Validators.minLength(6)]],
      oldemail:['', [Validators.required, Validators.minLength(6)]],
      oldAuthenticatorCode:['', [Validators.required, Validators.minLength(6)]],
    });
  }
 
  gotohome() {
    this.router.navigateByUrl('/dashboard/dashboard')
  }
  gotosec(){
    this.router.navigateByUrl('/pages/security')

  }
}
