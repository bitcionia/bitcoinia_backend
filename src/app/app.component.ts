import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserIdleService } from 'angular-user-idle';
import { Title, Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Bitconia';
  darkMode=false;
  storedTheme: string = localStorage.getItem('theme-color');
  inactive: boolean;
  description:any;
  keywords:any;
  // public isSpinner = true;

  // ngOnInit(): void {
  //   setTimeout(() => {
  //     this.isSpinner = false;
  //   },1000)
  // }
  constructor(
    private userIdle: UserIdleService,
    private route: ActivatedRoute,
    private router: Router,
    private routeTo: Router,
    private titleService: Title,
  private meta: Meta
  ){
      this.description = JSON.parse(localStorage.getItem("description"))
  this.keywords = JSON.parse(localStorage.getItem("keywords"))

  }
ngOnInit(){
    	this.titleService.setTitle(this.title);
  	this.meta.addTag({name: 'keywords', content: 'bitconia'});
  	this.meta.addTag({name: 'description', content: 'Angular bitconia'});

   	// this.meta.addTag(this.description);
   	// this.meta.addTag({name: 'keywords'});
  	// this.meta.updateTag({name: 'keywords'});

}

//Timer
stop() {
  this.userIdle.stopTimer();
}

stopWatching() {
  this.userIdle.stopWatching();
}

startWatching() {
  console.log("Timer stop");
  this.userIdle.startWatching();
}

restart() {
  this.userIdle.resetTimer();
}
goToLockScreen() {
  if (localStorage.getItem("loginState") != null || localStorage.getItem("loginState") != undefined) {
    var loginState = JSON.parse(localStorage.getItem("loginState"));
    this.inactive = true;
    this.stop();
    this.stopWatching();
    if (this.inactive && loginState)
      this.routeTo.navigateByUrl("custom-pages/404-Error");

   
  }
}
}
