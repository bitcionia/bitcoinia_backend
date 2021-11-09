import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { HttpService } from 'src/app/shared/services/http.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-editcredit',
  templateUrl: './editcredit.component.html',
  styleUrls: ['./editcredit.component.scss']
})
export class EditcreditComponent implements OnInit {

  submitted: boolean;
  id: any;
  no: any;
  content: any;
  type: any;
  image: any;
  fileToUpload: File | null = null;
  imageUrl="assets/img/brand/Bitconia white.png";
  imageSrc: string;
  file: any;

  constructor(public dialogRef: MatDialogRef<EditcreditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    
    public toastr: ToastrService,

    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private routeTo: Router,
  
    public httpService: HttpService,
    private loader: NgxUiLoaderService,
    ) {
      console.log(this.data);
      this.id=this.data['data']['_id']

      this.no=this.data['data']['no']
      this.content=this.data['data']['content']
      this.type=this.data['data']['type']
      this.file=this.data['data']['image']
    }
    public loginForm: FormGroup;

  ngOnInit(): void {
    this.createForm();
  }
  createForm() {
    this.loginForm = this.formBuilder.group({
      'file':['', Validators.required],
      'content':['', Validators.required],
      'type':['', Validators.required],
       'no':['', Validators.required],
       'fileSource':['', Validators.required],


    });
  }
  closeModelBox(): void {
    this.dialogRef.close();
  }
  get loginFormControl(){
    return this.loginForm.controls;
  }
  successAlert() {
    //debugger
    this.onSubmit();
    Swal.fire({
      icon: 'success',
      title: 'Well Done!',
      text: 'User Get Updated',
      confirmButtonColor: '#6259ca'
    })
    this.router.navigateByUrl('/pages/creditpage')
  }
  onFileChange(event) {
    const reader = new FileReader();
    
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
    
      reader.onload = () => {
   
        this.imageSrc = reader.result as string;
     
        this.loginForm.patchValue({
          fileSource: reader.result
        });
      };
   
    }
  }
  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
     let reader = new FileReader();
    reader.onload = (event: any) => {
      this.image = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
}
  onSubmit() {
    this.submitted = true;
  
    // ////debugger
    let jsonData = {
      id:this.id,
      file:this.loginForm.value.file,
      content:this.loginForm.value.content,
      no:this.loginForm.value.no,
      type:this.loginForm.value.type,
    }
    this.loader.start();
    this.httpService.updatextra(jsonData).subscribe(res => {
      this.loader.stop();
      // this.appComponent.startWatching();
      if (res['success'] == true) {
        // this.httpService.toastr.success(res['message'], '', {
        //   positionClass: 'toast-bottom-right', closeButton: true, timeOut: 3000
        // });
        setInterval(() => {
// this.successAlert();
        }, 1500);
        this.dialogRef.close();

        // this.generateUserOTP();
      } else if (res['success'] == false) {
        // this.notOKstat = res['UserConfiguration']['ErrorMessage'];
        // this.httpService.toastr.error(res['UserConfiguration']['ErrorMessage']);
        this.httpService.toastr.error(res['message'], '', {
          positionClass: 'toast-bottom-right', closeButton: true, timeOut: 5000
        });
      }
    });
    // (err) => {
    //   // this.loader.stop();
    //   this.toastr.error("email_already_found");
    //   // this.httpService.errorCallBack(false);
    // });

  }

}
