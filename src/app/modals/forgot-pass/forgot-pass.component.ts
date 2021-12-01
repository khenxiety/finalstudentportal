import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import{ init } from 'emailjs-com';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { MatSnackBar } from '@angular/material/snack-bar';
init("user_2OS84QxjMn43nqkQifnJH");

@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.component.html',
  styleUrls: ['./forgot-pass.component.scss']
})
export class ForgotPassComponent implements OnInit {

  email:any;
  messages:any;
  
  constructor(private toast:MatSnackBar) { }

  ngOnInit(): void {
  }


  sendMail(params: any){

    this.messages="Im requesting to reset my password. Email me at"+this.email;
    let sample={
      from_name:this.email,
      
      message:this.messages,
      e_mail:this.email
    }
    emailjs.send('service_2hem73b', 'template_09tgbrq',sample).then((res) =>{
      console.log("success", res.status)
      this.toast.open("success","Dismiss",{duration:2000});


    })
  

  }

}
