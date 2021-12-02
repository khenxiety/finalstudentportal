import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import{ init } from 'emailjs-com';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from 'src/app/api.service';
init("user_2OS84QxjMn43nqkQifnJH");

@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.component.html',
  styleUrls: ['./forgot-pass.component.scss']
})
export class ForgotPassComponent implements OnInit {

  email:any;
  messages:any;
  emailverify:any;
  
  constructor(private toast:MatSnackBar, private api: ApiService) { 
    this.getEmail()
  }

  ngOnInit(): void {
  }

  getEmail(){
    this.api.getStudent().subscribe(
      data=>{
        console.log(data);
        // this.toast.open("success","Dismiss",{duration:2000});
        this.emailverify=data;



      },
      error=>{
        this.toast.open("error","Dismiss",{duration:2000});
      }
    )
  }


  sendMail(params: any){
    this.emailverify.forEach((element: { email: any; }) => {
      if(element.email==this.email){
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

        localStorage.setItem("passwordupdate","true");
      }
      else{
        this.messages="Email not found";
        this.toast.open("error","Dismiss",{duration:2000});
      }
    })



    
  

  }

}
