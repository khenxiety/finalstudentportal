import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.scss']
})
export class UpdatePasswordComponent implements OnInit {


  toencrypt:any ="encryptmeplssss";
  encrypted:string="";
  secretKey:string="secretKey";

  student_code:any;
  password:any;
  constructor(private apiservice:ApiService,public toast:MatSnackBar,public router:Router) { }

  ngOnInit(): void {
  }
  test(){
    this.encrypted=CryptoJS.AES.encrypt(JSON.stringify(this.toencrypt),this.secretKey).toString();
    console.log( this.encrypted)


    let bits = CryptoJS.AES.decrypt(this.encrypted,this.secretKey);
    var dec = JSON.parse(bits.toString(CryptoJS.enc.Utf8))
    console.log(dec);

  }

  updatePassword(){
    this.encrypted=CryptoJS.AES.encrypt(JSON.stringify(this.password),this.secretKey).toString();
    console.log( this.encrypted)


    let d={
      new_password:this.encrypted
    }
    if(this.password==null && this.student_code==null){
      this.toast.open('Please input a valid text.','Dismiss',{duration:2000})

    }else{
      this.apiservice.updatePassword(this.student_code,d).subscribe((res:any)=> {
        console.log("Success===",res);
        
        
      },(error)=> {
        console.log("Error===",error);
      })
      this.toast.open('Update Success','Dismiss',{duration:2000});

      setTimeout(() => {
        this.router.navigate(['login']);

        
      }, 2000);


    }

    
  }




}
