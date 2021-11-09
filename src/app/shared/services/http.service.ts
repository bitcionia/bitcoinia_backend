import { Injectable } from '@angular/core';
import {  EventEmitter, Output } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, Subject } from "rxjs";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { map } from "rxjs/operators";
import * as pako from "pako";
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  //LIVE
  baseURL: string = "https://www.bitconia.com/api/v1/";
  headers: any = new HttpHeaders({ "Content-Type": "application/json" });
  // formheaders: any = new HttpHeaders({ "Content-Type": "multipart/form-data" });
 
 
//Api
userloginurl: string = "admin/auth/login";
  logout: string ="admin/auth/logout";
  userOTPUrl: string="admin/g2f/auth/get";
  setOTPUrl: string="admin/g2f/auth/enable";
  changepassword : string="admin/auth/changepassword";
  activityuser : string="admin/auth/activity";
  getprofile: string="admin/auth/getprofile";
  resetpassword : string="admin/auth/resetpassword";
  forgetpassword: string="admin/auth/forgotpassword";
  //user
  getuser: string="admin/user/list";
  createuser: string="admin/user/create";
  updateuser: string="admin/user/update";
deleteuser: string="admin/user/delete";
searchuser:string="admin/user/listbyid";
statususer:string="admin/user/status";
//Draw
getdrawupcom:string="admin/draw/upcominglist";
// getdrawupcom:string="admin/draw/list";
getdrawperv:string="admin/draw/perviouslist";
nextdraw:string="admin/draw/nextdraw";
createdraw:string="admin/draw/create";
updatedraw:string="admin/draw/update";
deletedraw:string="admin/draw/delete";
searchdraw:string="admin/draw/listbyid";
drawstatus:string="admin/draw/status";
viewdrawlist: string="admin/draw/userdrawlist";
viewlist: string="admin/draw/list";
//payment
statuspayment:string="admin/payment/status";
getpayment:string="admin/payment/list";
searchpayment:string="admin/payment/listbyid";
createpayment:string="admin/payment/create";
deletepayment:string="admin/payment/delete";
//deposit
getdeposit:string="admin/deposit/list";
getdepositcreate:string="admin/deposit/create";
getdepositdelete:string="admin/deposit/delete";
getdepositsearch:string="admin/deposit/listbyid";
getdepositstatus:string="admin/deposit/status";
//withdraw
getwithdraw:string="admin/withdraw/list";
getwithdrawstatus:string="admin/withdraw/status";
//settings
create :string="/admin/settings/update";
list :string="admin/settings/getall";
logo1:string="admin/settings/uploadlogo1";
logo2:string="admin/settings/uploadlogo2";
singlelogo:string="admin/settings/siginlogo";
meta:string="admin/settings/meta";
googleauth:string="admin/settings/googleauthkey";
emailkey:string="admin/settings/emailkey";
smskey:string="admin/settings/smskey";
//log
log:string="admin/settings/getlog";
deletelog:string="admin/settings/deletealllog";
//extra page
extralist:string="admin/democard/list";
list_type:string="admin/democard/listbytype";
updatewithdraw:string="admin/democard/update";
delete:string="admin/democard/delete";
createwithdraw:string="admin/democard/create";
//
//dashboard
totallist: string="admin/dash/totallist";
translist:string="admin/dash/transcationlist";
charts:string="admin/dash/graph";
//wallet
walletlist:string="admin/dash/walletlist";
addwallet:string="admin/dash/walletcreate";
walletgraph:string="admin/dash/walletlistgraph";
walletbalance:string="admin/dash/walletbalance";
//variables
errorCount: number;

  constructor(
    public http: HttpClient,
    public toastr: ToastrService,
    public router: Router,

  ) { 
  
  }
 
  errorCallBack(apiResp) {
    if (!apiResp) {
      this.errorCount++;
      /** spinner ends after 10 seconds */
      if (this.errorCount < 1) {
        // this.loader.stop();
        // this.toastr.error("Something went wrong..Please try after somtime!")
        this.toastr.error("Please try after somtime!", "", {
          positionClass: "toast-bottom-right",
          closeButton: true,
          timeOut: 5000,
        });
      }
    }
  }
  getUserId() {
    if (localStorage.getItem("userid")) {
      var userId = JSON.parse(localStorage.getItem("userid"));
      return userId;
    }
  }
  getSessionToken() {
    var tokenId = JSON.parse(localStorage.getItem("data"));
    return tokenId;
  }
  // getAuthHeaders() {
  //   return this.headers.append(
  //     "Authorization", + this.getSessionToken()
  //   );
  // }
  getAuthHeaders() {
    return this.headers.append(
      "Authorization", this.getSessionToken()
    );
  }
  getAuthHeader() {
    return this.headers.append(
      "Authorization", this.getSessionToken()
    );
  }
  userLogin(jsonObj: any): Observable<any> {
    // ////debugger
    return this.http.post(this.baseURL + this.userloginurl, jsonObj, {
      headers: this.headers,
    });
  }
  //extra page
  getextralist(){
    return this.http.get(this.baseURL + this.extralist, {
      headers: this.getAuthHeaders(),
    });
  }
  listtype(jsonObj: any): Observable<any> {
    // ////debugger
    return this.http.post(this.baseURL + this.list_type, jsonObj, {
      headers: this.getAuthHeaders(),
    });
  }
  updatextra(jsonObj: any): Observable<any> {
    // ////debugger
    return this.http.post(this.baseURL + this.updatewithdraw, jsonObj, {
      headers: this.getAuthHeaders(),
    });
  }
  deletextra(jsonObj: any): Observable<any> {
    // ////debugger
    return this.http.post(this.baseURL + this.delete, jsonObj, {
      headers: this.getAuthHeaders(),
    });
  }
  creatextra(jsonObj: any): Observable<any> {
    // ////debugger
    return this.http.post(this.baseURL + this.createwithdraw, jsonObj, {
      headers: this.getAuthHeaders(),
    });
  }
  //dashboard
  total_list(){
    return this.http.get(this.baseURL + this.totallist, {
      headers: this.getAuthHeaders(),
    });
  }
  trans_list(){
    return this.http.get(this.baseURL + this.translist, {
      headers: this.getAuthHeaders(),
    });
  }
  chartslist(){
    return this.http.get(this.baseURL + this.charts, {
      headers: this.getAuthHeaders(),
    });
  }
  //wallet
  wallet_list(jsonObj: any): Observable<any> {
    // ////debugger
    return this.http.post(this.baseURL + this.walletlist, jsonObj, {
      headers: this.getAuthHeaders(),
    });
  }
  add_wallet(jsonObj: any): Observable<any> {
    // ////debugger
    return this.http.post(this.baseURL + this.addwallet, jsonObj, {
      headers: this.getAuthHeaders(),
    });
  }
  wallet_graph(jsonObj: any): Observable<any> {
    // ////debugger
    return this.http.post(this.baseURL + this.walletgraph, jsonObj, {
      headers: this.getAuthHeaders(),
    });
  }
  walletbal(){
    return this.http.get(this.baseURL + this.walletbalance, {
      headers: this.getAuthHeaders(),
    });
  }
  //setting
  setlist(){
    return this.http.get(this.baseURL + this.list, {
      headers: this.getAuthHeaders(),
    });
  }
  settingupdate(jsonObj: any): Observable<any> {
    // ////debugger
    return this.http.post(this.baseURL + this.create, jsonObj, {
      headers: this.getAuthHeaders(),
    });
  }
  settinglogo1(jsonObj: any): Observable<any> {
    //debugger
    return this.http.post(this.baseURL + this.logo1, jsonObj, {
      headers: this.getAuthHeaders(),
    });
  }
    settinglogo2(jsonObj: any): Observable<any> {
    //debugger
    return this.http.post(this.baseURL + this.logo2, jsonObj, {
      headers: this.getAuthHeaders(),
    });
  }  
  settinglogo3(jsonObj: any): Observable<any> {
    //debugger
    return this.http.post(this.baseURL + this.singlelogo, jsonObj, {
      headers: this.getAuthHeaders(),
    });
  }
  getmeta(jsonObj: any): Observable<any> {
    //debugger
    return this.http.post(this.baseURL + this.meta, jsonObj, {
      headers: this.getAuthHeaders(),
    });
  }
  getgoogleauth(jsonObj: any): Observable<any> {
    //debugger
    return this.http.post(this.baseURL + this.googleauth, jsonObj, {
      headers: this.getAuthHeaders(),
    });
  }
  getemailkey(jsonObj: any): Observable<any> {
    //debugger
    return this.http.post(this.baseURL + this.emailkey, jsonObj, {
      headers: this.getAuthHeaders(),
    });
  }
  getsmskey(jsonObj: any): Observable<any> {
    //debugger
    return this.http.post(this.baseURL + this.smskey, jsonObj, {
      headers: this.getAuthHeaders(),
    });
  }
  //log
    getlog(): Observable<any> {
    
    return this.http.get(this.baseURL + this.log,{
      headers: this.getAuthHeaders(),
    });
  }
  getdeletelog(): Observable<any> {
    
    return this.http.get(this.baseURL + this.deletelog,{
      headers: this.getAuthHeaders(),
    });
  }
  generateMobileOTP(): Observable<any> {
    return this.http.get(this.baseURL + this.userOTPUrl, {
      headers: this.getAuthHeaders(),
    });
  }
  setUserOTP(jsonObj: any): Observable<any> {
    return this.http.post(this.baseURL + this.setOTPUrl, jsonObj, {
      headers: this.getAuthHeaders(),
    });
  }
  logoutSession(jsonObj: any): Observable<any> {
    // ////debugger
    return this.http.post(this.baseURL + this.logout, jsonObj, {
      headers: this.getAuthHeaders(),
    });
  }
  resetPassword(jsonObj: any): Observable<any> {
    return this.http.post(this.baseURL + this.resetpassword, jsonObj, {
      headers: this.getAuthHeaders(),
    });
  }
  forgetPassword(jsonObj: any): Observable<any> {
    return this.http.post(this.baseURL + this.forgetpassword, jsonObj, {
      // headers: this.getAuthHeaders(),
    });
  }
  changePassword(jsonObj: any): Observable<any> {
    return this.http.post(this.baseURL + this.changepassword, jsonObj, 
      {
        headers: this.getAuthHeaders(),
      });
  }
  //user api
  getUser(): Observable<any> {
    return this.http.get(this.baseURL + this.activityuser, {
      headers: this.getAuthHeaders(),
    });
  }
  getProfile(): Observable<any> {
    return this.http.get(this.baseURL + this.getprofile, {
      headers: this.getAuthHeaders(),
    });
  }
  getUserlist(): Observable<any> {
    return this.http.get(this.baseURL + this.getuser, {
      headers: this.getAuthHeaders(),
    });
  }
  getStatusUser(jsonObj: any): Observable<any> {
    return this.http.post(this.baseURL + this.statususer,jsonObj,{
      headers: this.getAuthHeaders(),
    });
  }
  getcreate(jsonObj: any): Observable<any> {
    return this.http.post(this.baseURL + this.createuser, jsonObj, {
      headers: this.getAuthHeaders(),
    });
  }
  getupdate(jsonObj: any): Observable<any> {
    return this.http.post(this.baseURL + this.updateuser, jsonObj, {
      headers: this.getAuthHeaders(),
    });
  }
  getdelete(jsonObj: any): Observable<any> {
    return this.http.post(this.baseURL + this.deleteuser, jsonObj, {
      headers: this.getAuthHeaders(),
    });
  }
  getsearch(jsonObj: any): Observable<any> {
    return this.http.post(this.baseURL + this.searchuser, jsonObj, {
      headers: this.getAuthHeaders(),
    });
  }
  //draw api
  getdrawstatus(jsonObj: any): Observable<any> {
    return this.http.post(this.baseURL + this.drawstatus,jsonObj,{
      headers: this.getAuthHeaders(),
    });
  }
  getview(): Observable<any> {
    return this.http.get(this.baseURL + this.viewlist, {
      headers: this.getAuthHeaders(),
    });
  }
  getviewdraw(jsonObj: any): Observable<any> {
    return this.http.post(this.baseURL + this.viewdrawlist,jsonObj,{
      headers: this.getAuthHeaders(),
    });
  }
  getdrawupcomlist(){
    return this.http.get(this.baseURL + this.getdrawupcom, {
      headers: this.getAuthHeaders(),
    });
  }
   getnextdraw(){
    return this.http.get(this.baseURL + this.nextdraw, {
      headers: this.getAuthHeaders(),
    });
  }
  getdrawpervlist(){
    return this.http.get(this.baseURL + this.getdrawperv, {
      headers: this.getAuthHeaders(),
    });
  }
  getdrawdelete(jsonObj: any): Observable<any> {
    return this.http.post(this.baseURL + this.deletedraw,jsonObj,{
      headers: this.getAuthHeaders(),
    });
  }
  getsearchdraw(jsonObj: any): Observable<any> {
    return this.http.post(this.baseURL + this.searchdraw,jsonObj,{
      headers: this.getAuthHeaders(),
    });
  }
  getcreatedraw(jsonObj: any): Observable<any> {
    return this.http.post(this.baseURL + this.createdraw,jsonObj,{
      headers: this.getAuthHeaders(),
    });
  }
  getUpdatedraw(jsonObj: any): Observable<any> {
    return this.http.post(this.baseURL + this.updatedraw,jsonObj,{
      headers: this.getAuthHeaders(),
    });
  }
  //payment api
  getpaymentlist(){
    return this.http.get(this.baseURL + this.getpayment, {
      headers: this.getAuthHeaders(),
    });
  }
  getcreatepayment(jsonObj: any): Observable<any> {
    return this.http.post(this.baseURL + this.createpayment,jsonObj,{
      headers: this.getAuthHeaders(),
    });
  }
  getpaymentdelete(jsonObj: any): Observable<any> {
    return this.http.post(this.baseURL + this.deletepayment,jsonObj,{
      headers: this.getAuthHeaders(),
    });
  }
  getsearchpayment(jsonObj: any): Observable<any> {
    return this.http.post(this.baseURL + this.searchpayment,jsonObj,{
      headers: this.getAuthHeaders(),
    });
  }
  getpaymentstatus(jsonObj: any): Observable<any> {
    return this.http.post(this.baseURL + this.statuspayment,jsonObj,{
      headers: this.getAuthHeaders(),
    });
  }
  //deposit api
  getdepositlist(){
    return this.http.get(this.baseURL + this.getdeposit, {
      headers: this.getAuthHeaders(),
    });
  }

  getdepsearch(jsonObj: any): Observable<any> {
    return this.http.post(this.baseURL + this.getdepositsearch,jsonObj,{
      headers: this.getAuthHeaders(),
    });
  }
  getdepstatus(jsonObj: any): Observable<any> {
    return this.http.post(this.baseURL + this.getdepositstatus,jsonObj,{
      headers: this.getAuthHeaders(),
    });
  }
  //withdraw api
  getwithdrawlist(){
    return this.http.get(this.baseURL + this.getwithdraw, {
      headers: this.getAuthHeaders(),
    });
  }
  getWithdrawstatus(jsonObj: any): Observable<any> {
    return this.http.post(this.baseURL + this.getwithdrawstatus,jsonObj,{
      headers: this.getAuthHeaders(),
    });
  }
}
