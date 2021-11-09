import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { HttpService } from 'src/app/shared/services/http.service';
@Injectable({
  providedIn: 'root'
})
export class GraphService {
  list: any;

  constructor(
    public httpService: HttpService,

  ) { }

  graphlist(){
    // //debugger
    
        return this.httpService.chartslist()
          .map(result => result);
      }
      // localStorage.setItem("list", JSON.stringify(res['data']));

//       for (let idx of this.list) {
// this.sell= idx['amount']['sell_count']    
// this.price= idx['amount']['price']     
// this.count= idx['amount']['count']     
// this.date= idx['count']     

// console.log(this.count)


      

  }