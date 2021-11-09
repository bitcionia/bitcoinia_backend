import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpService } from 'src/app/shared/services/http.service';

@Injectable({
  providedIn: 'root'
})
export class CommondataService {
  public getdrawupcom = new BehaviorSubject<any>("");

  activityLogShare = this.getdrawupcom.asObservable();

  constructor(
  ) { }

 
  activity(data) {
    this.getdrawupcom.next(data);
  }
}
