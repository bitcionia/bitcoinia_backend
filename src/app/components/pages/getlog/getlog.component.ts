import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';

import { NgxUiLoaderService } from 'ngx-ui-loader';
import { HttpService } from 'src/app/shared/services/http.service';
import { split } from 'ts-node';
@Component({
  selector: 'app-getlog',
  templateUrl: './getlog.component.html',
  styleUrls: ['./getlog.component.scss']
})
export class GetlogComponent implements OnInit {
  showDatafound:boolean
  data:any=[];
  dataa={ log: []};
log:any;
  getKeysArray: string[];
  getValueArray: string[];
  getlogdata: any=[];
  constructor(
public toastr: ToastrService,

    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private routeTo: Router,
  
    public httpService: HttpService,
    private loader: NgxUiLoaderService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getlog();
  }
  gotohome() {
    this.router.navigateByUrl('/dashboard/dashboard')
  }
  getlog(){
        this.httpService.getlog().subscribe((res: any) => {
          console.log(res['data'])
          this.data=res['data']
          if (this.data) {
            if (this.data.length > 0) {
          if (res['success'] == true) {
            this.showDatafound = true;
    
           
          }
        }
      }
      else {
        this.showDatafound = false;
        console.log("No Data found");
    
      }
    // this.getKeysArray = Object.keys( this.data);
    //   this. getValueArray = Object.values( this.data);
     var getKeysArray = Object.keys( this.data);
var getValueArray = Object.values( this.data);
for(let idex of getKeysArray){
  this.log += idex+ this.data[idex]+'/n';
}
this.getlogdata= this.log.split('/n');
// this.log= getKeysArray as unknown as string +  getValueArray as string ;
// this.log= this.getKeysArray +  this.getValueArray ;

            console.log(this.log);
            console.log(this.getValueArray);
            console.log(this.getKeysArray);

           });
  }
}
