import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { HttpService } from 'src/app/shared/services/http.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { MatDialog } from '@angular/material/dialog';
import { EditdrawComponent } from '../editdraw/editdraw.component';
import { DeletedrawComponent } from '../deletedraw/deletedraw.component';

@Component({
  selector: 'app-viewdraw',
  templateUrl: './viewdraw.component.html',
  styleUrls: ['./viewdraw.component.scss']
})
export class ViewdrawComponent implements OnInit {
Status: any = ['Active', 'Inactive'];
public loginForm: FormGroup;
submitted:boolean=false;
data: any[];
Data: any[];
totalLength: any;
page: number []=[];
status: any[];
id: any[];
userDetails: any;
showDatafound: boolean;
username: any;
email: any;
drawdata: any;
value:number;
StartTime: any;
count: any;
totalprice: number = 0;
totprice: number = 0;
  drawview: any[];
  sellcount: any[];
  upcomview: any;
  iddata: any;
  name: any[];
  cldamount: any;
  firstamount: any;
  secondamount: any;
  thridamount: any;
  fourthamount: any;
  sell: any;
// username: any;
// email: any;

constructor(
  public dialog: MatDialog,
  public toastr: ToastrService,
  private formBuilder: FormBuilder,
  // public data: any,
  private route: ActivatedRoute,
  private router: Router,
  private routeTo: Router,

  public httpService: HttpService,
  private loader: NgxUiLoaderService,
) {
  this.upcomview = JSON.parse(localStorage.getItem("upview"))
  this.iddata=this.upcomview['_id']
  this.name=this.upcomview['name']
  // this.sell=this.upcomview['sell_count']
  // this.cldamount=this.upcomview['cold_wallet_percentage']
  // this.firstamount=this.upcomview['percentage_1']
  // this.secondamount=this.upcomview['percentage_2']
  // this.thridamount=this.upcomview['percentage_3']
  // this.fourthamount=this.upcomview['percentage_3']
console.log(this.iddata)
}

ngOnInit(): void {
    this.getviewlist();
  

 this.createForm();

 console.log( this.id);
}
get loginFormControl() {
  return this.loginForm.controls;
}
createForm() {
  this.loginForm = this.formBuilder.group({

    username: ['', Validators.required],
    // value: ['', Validators.required],
  });
}


textClear(){
  // this.username =''; 
  this.value = null;
}
warningAlert(item) {
  this.id=item['_id']
  this.getdrawdelete();
  Swal.fire({
    icon: 'warning',
    title: 'Are you sure ?',
    text: 'Your will not be able to recover this imaginary file!',
    showCancelButton: true,
    confirmButtonColor: '#6259ca',
    cancelButtonColor: '#6259ca',
    confirmButtonText: 'Yes, delete it!',
    reverseButtons: true

  }).then((id) => {
    if (id.isConfirmed) {
      Swal.fire({
        title: 'Deleted!',
        text: 'Your imaginary file has been deleted.',
        icon: 'success',
        confirmButtonColor: '#6259ca'
      })
    }
  })
  // this.router.navigateByUrl('/user/userlist')
  setTimeout(() => {
    this.getviewlist();
      },5000)

}

editsymbol(drawEdit) {
  const dialogRef = this.dialog.open(EditdrawComponent, {
    width: '800px',
    height: '600px',
    data: { data: drawEdit, }
  });
  dialogRef.afterClosed().subscribe((result) => {
    this.getviewlist();
  });
}
deleteuser(drawdelete) {
  const dialogRef = this.dialog.open(DeletedrawComponent, {
    width: '600px',
    height: '600px',

    data: { data: drawdelete, }
  });
  dialogRef.afterClosed().subscribe((result) => {
    setInterval(() => {
      this.getviewlist();
    }, 3000);
  });
}

// textClear(){
//   this.username =''; 
//   this.email ='';
// }
add() {
  this.router.navigateByUrl('/user/adduser')

}
gotoview() {
  this.router.navigateByUrl('/drawwallet/Drawwallet')
}
gotohome() {
  this.router.navigateByUrl('/dashboard/dashboard')
}
//   getUseractive(){

//     this.httpService.getUser().subscribe((res: any) => {
//       this.loader.stop();

//       console.log(res['data'])
//       this.data= res['data']
// this.totalLength=this.data.length;
// console.log(this.totalLength)
//       if (res['success'] == true) {
//         // this.toastr.success(res['StatusOfRequest']['Message'], '', { closeButton: true, timeOut: 5000 });
//         this.httpService.toastr.success(res['message'], '', {
//           positionClass: 'toast-bottom-right', closeButton: true, timeOut: 5000
//         });
//         // this.routeTo.navigateByUrl('custom/twofactor');
//       }
//     }, (err) => {
//       this.toastr.error("Please try after some time");
//     });
//   }
// getviewlist(){
  
//   this.httpService.getview().subscribe((res: any) => {
  
//     console.log(res['data'])
//     // this.data = res['data']
//     // this.count=res['count']
//     this.status = res['data']['status']
//     // this.sellcount=res['data']['sellcount']
//     // this.totprice=res['data']['draw_id']['price']

//     console.log(this.count)


//     console.log(this.totprice)
//     if (this.data) {
//       if (this.data.length > 0) {
//     if (res['success'] == true) {
//       this.showDatafound = true;

     
//     }
//   }
// }
// else {
//   this.showDatafound = false;
//   console.log("No Data found");

// }
//   });
// }
getviewlist() {
  ////debugger
  let jsonData={
    // id:this.id
    // id:'612480f7288d443094dca546',
    // user_id:'611a1282c3c0543978f01705',
    id:this.iddata,
    // Sequence_number:'010256785632',
  }
      this.httpService.getviewdraw(jsonData).subscribe((res: any) => {
  
        console.log(res['data'])
        this.data = res['data']
        this.count=res['count']
        this.status = res['data']['status']
        this.sellcount=res['selled']
        // this.totprice=res['data']['price']
        this.sell=res['sellcount']
        // this.status = res['data']['status']
  this.cldamount=res['percentages']['cold_wallet_percentage']
  this.firstamount=res['percentages']['percentage_1']
  this.secondamount=res['percentages']['percentage_2']
  this.thridamount=res['percentages']['percentage_3']
  this.fourthamount=res['percentages']['percentage_4']
        // this.totprice=res['data']['draws']['price']
        console.log(this.name)


        console.log(this.totprice)
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
      });
    }
  
  
    searchuser(){

      if(this.username == ""){
       this.search();
      }else{
        this.data = this.data.filter(res =>{
          const name=res.username.toLocaleLowerCase().match(this.username.toLocaleLowerCase());
          // const email=res.email.toLowerCase().includes(this.email.toLowerCase())
          return (name);
        })
      }
    }
    
    search(){
      ////debugger
       //search api
    this.submitted=true;
    let jsonData = {
      // id: this.id,
      key: this.username,
    }
    
    this.httpService.getsearchdraw(jsonData).subscribe((res: any) => {
      console.log(res['data'])
      this.data = res['data']
      // this.drawstatus();
    });
    if(this.username == ""){
        this.getviewlist();
      }
    // this.ngOnInit();
    
  
    }
    drawstatus(){
      // ////debugger
      this.submitted=true;
    let jsonData = {
      // id: this.id,
    status:this.value,
    }
    
    this.httpService.getdrawstatus(jsonData).subscribe((res: any) => {
      console.log(res['data'])
      this.data = res['data']
    });
    this.textClear();
    }
    getdrawdelete(){
      // ////debugger
      let jsonData = {
        id:this.id,
      }
      this.httpService.getdrawdelete(jsonData).subscribe(res => {
        this.loader.stop();
      });
    }
}
