import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { HttpService } from 'src/app/shared/services/http.service';
import Swal from 'sweetalert2';
import { DeletepervComponent } from '../deleteperv/deleteperv.component';
import { EditpervComponent } from '../editperv/editperv.component';

@Component({
  selector: 'app-viewperv',
  templateUrl: './viewperv.component.html',
  styleUrls: ['./viewperv.component.scss']
})
export class ViewpervComponent implements OnInit {
  Status: any = ['Active', 'Inactive'];
  public loginForm: FormGroup;
  submitted:boolean=false;
  data: any[];
  Data: any[];
  totalLength: any;
  page: number []=[];
  status: any[];
  id: any;
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
    drawview: any;
  delete: any;
  sellcount: any;
  name: any;
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
    this.drawview = JSON.parse(localStorage.getItem("dataview"))
    this.id=this.drawview['_id']
    // this.count=this.drawview['count']
    this.name=this.drawview['name']
    // this.cldamount=this.drawview['cold_wallet_percentage']
    // this.firstamount=this.drawview['percentage_1']
    // this.secondamount=this.drawview['percentage_2']
    // this.thridamount=this.drawview['percentage_3']
    // this.fourthamount=this.drawview['percentage_3']

    console.log(this.id)
  
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
  
  warningAlert(item) {
    ////debugger
    this.delete=item['user_id']['_id']
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
  textClear(){
    // this.username =''; 
    this.value = null;
  }
  
  
  editsymbol(drawEdit) {
    const dialogRef = this.dialog.open(EditpervComponent, {
      width: '800px',
      height: '600px',
      data: { data: drawEdit, }
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.getviewlist();
    });
  }
  deleteuser(drawdelete) {
    const dialogRef = this.dialog.open(DeletepervComponent, {
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
    this.router.navigateByUrl('draworder/draworderpage')
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
  //   ////debugger
  //   this.httpService.getview().subscribe((res: any) => {
    
  //     console.log(res['data'])
  //     this.data = res['data']
  //     this.count=res['count']
  //     this.status = res['data']['status']
  
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
    // ////debugger
    let jsonData={
     
      id:this.id,
    }
        this.httpService.getviewdraw(jsonData).subscribe((res: any) => {
    
          console.log(res['data'])
          this.data = res['data']
          this.count=res['count']
          this.status = res['data']['status']
          this.sellcount=res['selled']
          // this.totprice=res['data']['price']
          this.sell=res['sellcount']
          this.cldamount=res['percentages']['cold_wallet_percentage']
          this.firstamount=res['percentages']['percentage_1']
          this.secondamount=res['percentages']['percentage_2']
          this.thridamount=res['percentages']['percentage_3']
          this.fourthamount=res['percentages']['percentage_4']
          console.log(this.count)
  
  
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
//debugger
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
        // ////debugger
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
     
    
      }
      // drawstatus(){
      //   // ////debugger
      //   this.submitted=true;
      // let jsonData = {
      //   // id: this.id,
      // status:this.value,
      // }
      
      // this.httpService.getdrawstatus(jsonData).subscribe((res: any) => {
      //   console.log(res['data'])
      //   this.data = res['data']
      // });
      // this.textClear();
      // }
      getdrawdelete(){
        ////debugger
        let jsonData = {
          id:this.delete,
        }
        this.httpService.getdrawdelete(jsonData).subscribe(res => {
          this.loader.stop();
        });
      }
}
