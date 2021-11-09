import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { HttpService } from 'src/app/shared/services/http.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-addbackend',
  templateUrl: './addbackend.component.html',
  styleUrls: ['./addbackend.component.scss']
})
export class AddbackendComponent implements OnInit {
  public loginForm: FormGroup;
  imageSrc: string;
  file: any;
  submitted: boolean;
  id: any;
  no: any;
  content: any;
  type: any;
  image: any;
  fileToUpload: File | null = null;
  image1: string;
  constructor(
    public toastr: ToastrService,

    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private routeTo: Router,
  
    public httpService: HttpService,
    private loader: NgxUiLoaderService,
  ) { }

  ngOnInit(): void {
    this.createForm();
  }
  createForm() {
    this.loginForm = this.formBuilder.group({
      // 'file':['', Validators.required],
      'content':['', Validators.required],
      'type':['', Validators.required],
       'no':['', Validators.required],
       'fileSource':['', Validators.required],


    });
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
    this.router.navigateByUrl('/pages/backendpage')

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
user(){
  this.router.navigateByUrl('/pages/backendpage')

}
  onSubmit() {
    let fileNames = (<HTMLInputElement>document.getElementById("file")).files;
    // var formData = new FormData();
    for (let i = 0; i < fileNames.length; i++) {
      // formData.append("file", fileNames[i]['name']);
            this.image1=fileNames[i]['name']

      console.log(fileNames[i]['name'])
    }
    this.submitted = true;
  
    //debugger
    let jsonData = {
      file:this.image1,
      content:this.loginForm.value.content,
      no:this.loginForm.value.no,
      type:this.loginForm.value.type,
    }
    this.loader.start();
    this.httpService.creatextra(jsonData).subscribe(res => {
      this.loader.stop();
      // this.appComponent.startWatching();
      if (res['success'] == true) {
        // this.httpService.toastr.success(res['message'], '', {
        //   positionClass: 'toast-bottom-right', closeButton: true, timeOut: 3000
        // });
        setInterval(() => {
// this.successAlert();
        }, 1500);

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
this.user();
  }

}
