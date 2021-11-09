import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {
  ButtonsConfig, ButtonsStrategy, AdvancedLayout, GalleryService, Image, KS_DEFAULT_BTN_CLOSE, KS_DEFAULT_BTN_DELETE, KS_DEFAULT_BTN_DOWNLOAD, KS_DEFAULT_BTN_EXTURL, KS_DEFAULT_BTN_FULL_SCREEN, ButtonEvent, ButtonType, PlainGalleryConfig, PlainGalleryStrategy,
} from '@ks89/angular-modal-gallery';
import { ToastrService } from 'ngx-toastr';
import { TimeZone } from 'src/app/shared/data/pages/profile';
import { HttpService } from 'src/app/shared/services/http.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  timeZone = TimeZone
  data: any;
  role: any;
  username: any;
    fileToUpload: File | null = null;

profile_logo="assets/img/brand/Bitconia white.png";
imageUrl="assets/img/brand/Symbo-pngl.ico";
  constructor(
    private galleryService: GalleryService,
    private route: ActivatedRoute,
    private router: Router,
    private routeTo: Router,
    public toastr: ToastrService,

    public httpService: HttpService,
  ) { }

  ngOnInit(): void {
    this.getprofile();  
  }
  public GalleryImage: Image[] = [
    new Image(
      1,
      { //modal
        img: '../../assets/img/media/1.jpg',
        title: '',
      }
    ),
    new Image(
      2,
      { //modal
        img: '../../assets/img/media/2.jpg',
        title: '',
      }
    ),
    new Image(
      3,
      { //modal
        img: '../../assets/img/media/3.jpg',
        title: '',
      }
    ),
    new Image(
      4,
      { //modal
        img: '../../assets/img/media/4.jpg',
        title: '',
      }
    ),
    new Image(
      5,
      { //modal
        img: '../../assets/img/media/5.jpg',
        title: '',
      }
    ),
    new Image(
      6,
      { //modal
        img: '../../assets/img/media/6.jpg',
        title: '',
      }
    ),
    new Image(
      7,
      { //modal
        img: '../../assets/img/media/7.jpg',
        title: '',
      }
    ),
    new Image(
      8,
      { //modal
        img: '../../assets/img/media/8.jpg',
        title: '',
      }
    ),
    new Image(
      9,
      { //modal
        img: '../../assets/img/media/9.jpg',
        title: '',
      }
    )

  ]

  buttonsConfigDefault: ButtonsConfig = {
    visible: true,
    strategy: ButtonsStrategy.DEFAULT
  }

  buttonsConfigSimple: ButtonsConfig = {
    visible: true,
    strategy: ButtonsStrategy.SIMPLE
  };

  buttonsConfigAdvanced: ButtonsConfig = {
    visible: true,
    strategy: ButtonsStrategy.ADVANCED
  };

  buttonsConfigFull: ButtonsConfig = {
    visible: true,
    strategy: ButtonsStrategy.FULL
  };

  buttonsConfigCustom: ButtonsConfig = {
    visible: true,
    strategy: ButtonsStrategy.CUSTOM,
    buttons: [
      KS_DEFAULT_BTN_FULL_SCREEN,
      KS_DEFAULT_BTN_DELETE,
      KS_DEFAULT_BTN_EXTURL,
      KS_DEFAULT_BTN_DOWNLOAD,
      KS_DEFAULT_BTN_CLOSE
    ]
  };


  customPlainGalleryRowDescConfig: PlainGalleryConfig = {
    strategy: PlainGalleryStrategy.CUSTOM,
    layout: new AdvancedLayout(-1, true)
  };

  openImageModalRowDescription(image: Image) {
    const index: number = this.getCurrentIndexCustomLayout(image, this.GalleryImage);
    this.customPlainGalleryRowDescConfig = Object.assign({}, this.customPlainGalleryRowDescConfig, { layout: new AdvancedLayout(index, true) });
  }

  private getCurrentIndexCustomLayout(image: Image, images: Image[]): number {
    return image ? images.indexOf(image) : -1;
  };

  onButtonBeforeHook(event: ButtonEvent) {
    if (!event || !event.button) {
      return;
    }

    if (event.button.type === ButtonType.DELETE) {
      this.GalleryImage = this.GalleryImage.filter((val: Image) => event.image && val.id !== event.image.id);
    }
  }

  onButtonAfterHook(event: ButtonEvent) {
    if (!event || !event.button) {
      return;
    }
  }

  onCustomButtonBeforeHook(event: ButtonEvent, galleryId: number | undefined) {
    if (!event || !event.button) {
      return;
    }

    if (event.button.type === ButtonType.CUSTOM) {
      this.addRandomImage();
      setTimeout(() => {
        this.galleryService.openGallery(galleryId, this.GalleryImage.length - 1);
      }, 0);
    }
  }

  onCustomButtonAfterHook(event: ButtonEvent, galleryId: number | undefined) {
    if (!event || !event.button) {
      return;
    }
  }

  addRandomImage() {
    const imageToCopy: Image = this.GalleryImage[Math.floor(Math.random() * this.GalleryImage.length)];
    const newImage: Image = new Image(this.GalleryImage.length - 1 + 1, imageToCopy.modal, imageToCopy.plain);
    this.GalleryImage = [...this.GalleryImage, newImage];
  }

handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
     let reader = new FileReader();
    reader.onload = (event: any) => {
      this.profile_logo = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
}
handleFile(files: FileList) {
    this.fileToUpload = files.item(0);
     let reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
}
  getprofile() {
   
    this.httpService.getProfile().subscribe((res) => {

this.data=res['data']
this.role=res['data']['role']
this.username=res['data']['username']
console.log(this.data);


// this.router.navigateByUrl("pages/profile");

    });
  }
}
