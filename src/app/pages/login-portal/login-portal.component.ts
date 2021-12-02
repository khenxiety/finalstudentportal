import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { NavparamsService } from 'src/app/services/navparams.service';

import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-login-portal',
  templateUrl: './login-portal.component.html',
  styleUrls: ['./login-portal.component.scss']
})
export class LoginPortalComponent implements OnInit {

  student_code:any;
  password:any;

  acc:any;


  secretKey:any ="secretKey"

  constructor(private toast:MatSnackBar, public router:Router, private api: ApiService,private navparams: NavparamsService) { 
    this.getAccounts();
  }

  ngOnInit(): void {
    this.toast.open("Welcome","Dismiss",{duration:2000});

    
    

  }



  toggle(){
    const password = document.querySelector('#id_password')!;
 
    
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
  }

  getAccounts(){
    try {
      this.api.getStudents().subscribe((res:any)=> {
        // console.log("Success===",res);
        
        this.acc=res
        this.acc = this.acc.filter((classes: { level: any; }) => classes.level === 'student');
//         console.log(this.acc);
        
        
       
  
      },(error)=> {
        console.log("Error===",error);
      })
      
    }
    catch(err) {
      console.log(err)
    this.toast.open("Oops... Something went wrong","Dismiss",{duration:2000});

      
    }
    

    

    
  }


  login_check(){
    // let encrypt=CryptoJS.AES.encrypt(JSON.stringify(this.password),this.secretKey).toString();
    // console.log(encrypt)

    try{
      this.acc.forEach((e: any) => {
        // let bits = CryptoJS.AES.decrypt(e.password,"secretKey");
        // var dec = JSON.parse(bits.toString(CryptoJS.enc.Utf8))
        // console.log(dec);


        if(this.student_code==e.username && this.password==e.password){
          // this.navparams.setName(e.name);
          this.navparams.setStudentid(e.id);

          let id_encrypted=CryptoJS.AES.encrypt(JSON.stringify(e.username),this.secretKey).toString();
          
          localStorage.setItem('code',id_encrypted);
          
//           console.log(id_encrypted)

          let bits = CryptoJS.AES.decrypt(id_encrypted,this.secretKey);
          var dec = JSON.parse(bits.toString(CryptoJS.enc.Utf8))
//           console.log(dec);
          
          



          

          
          
          
  
          console.log("Success")
  
          this.router.navigate(["student-dash"]);  
  
        }else if(this.student_code == null){
          this.toast.open("Please put username","Dismiss",{duration:2000});
  
        }else if(this.password == null){
          this.toast.open("Please put password","Dismiss",{duration:2000});
  
        } else if(e.user_name!=this.student_code && e.password!=this.password){
          this.toast.open("Login failed","Dismiss",{duration:2000});

        }
        
        
  
        
      });

    }catch(err){
      console.log(err)
      this.toast.open("Oops... Something went wrong","Dismiss",{duration:2000});



    }
    

  }

  
    
      
    


  
  
  

}
