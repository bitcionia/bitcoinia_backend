import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/shared/services/http.service';

@Component({
  selector: 'app-adminuser',
  templateUrl: './adminuser.component.html',
  styleUrls: ['./adminuser.component.scss']
})
export class AdminuserComponent implements OnInit {
 
  data: any;
  p: number[] = [];
  showDatafound: boolean;
  username: string;
  location: string;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private routeTo: Router,

    public httpService: HttpService,
  ) { }

  ngOnInit(): void {
    this.getUser();
// this.username="Admin"
    let jsonData={
      key: this.username,
     location: this.location,
      // status:false,
      }
         this.httpService.getsearch(jsonData).subscribe((res: any) => {
          console.log(res['data'])
              this.data = res['data']
         });
    }

  gotohome() {
    this.router.navigateByUrl('/dashboard/dashboard')
  }

  getUser(){
    this.httpService.getUser().subscribe((res: any) => {

      console.log(res['data'])
      // this.data = res['data']
      if (this.data) {
        if (this.data.length > 0) {
      if (res['success'] == true) {
        this.showDatafound = true;
        // this.searchuser();

        // this.httpService.toastr.success(res['message'], '', {
        //   positionClass: 'toast-bottom-right', closeButton: true, timeOut: 5000
        // });
      }
    }
  }
  else {
    this.showDatafound = false;
    console.log("No Data found");
  }
    });
  }
  searchuser(){

    if(this.username == "" && this.location== ""){
     this.ngOnInit();
    }else{
      this.data = this.data.filter(res =>{
        const name=res.username.toLocaleLowerCase().match(this.username.toLocaleLowerCase());
        const location=res.location.toLowerCase().includes(this.location.toLowerCase())
        return (name+location);
      })
    }
  }

}
