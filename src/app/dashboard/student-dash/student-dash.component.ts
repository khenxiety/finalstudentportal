import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { NavparamsService } from 'src/app/services/navparams.service';


import * as CryptoJS from 'crypto-js';
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-student-dash',
  templateUrl: './student-dash.component.html',
  styleUrls: ['./student-dash.component.scss']
})
export class StudentDashComponent implements OnInit {

  

  name:any;
  id:any;
  code:any;
  info:any;
  reg_info:any;
  school_year_filter:any;
  semester_filter:any;

  currentsy:any;

  secretKey="secretKey"

  id_encrypted:any;
  


  
  
  

  constructor(private navparams: NavparamsService, private api:ApiService ,public router:Router,private toast:MatSnackBar) {
    // this.name=this.navparams.getName();
    // this.id=this.navparams.getStudentid();
    try {
      this.id_encrypted=localStorage.getItem('code');


      let bits = CryptoJS.AES.decrypt(this.id_encrypted,this.secretKey);
      this.code = JSON.parse(bits.toString(CryptoJS.enc.Utf8))
      // console.log(this.code);
      
    } catch (error) {
      console.log("hahha")
      this.router.navigate(['error']);
      
    }
   
    
    
    this.getSchoolYear();
    
    this.getStudentInformation();
    

    



  }

  ngOnInit(): void {
    // welcome toast
    

    this.toast.open("Welcome to the Student Portal","Dismiss",{duration:2000});
    




    



    

    
    
  }
  getSchoolYear(){
    const ids ="active"
    this.api.getSchoolYear(ids).subscribe((res:any)=> {
      console.log("Success===",res);
      
      this.school_year_filter=res;
      this.school_year_filter.forEach((e: any) => {
        
       this.currentsy=e.schoolyear;

       localStorage.setItem('currentsy',this.currentsy)
        
      })
      

      
    

      
      
      
      
      
    
     

    },(error)=> {
      console.log("Error===",error);
    })
  }


  

  getStudentInformation(){
    this.api.getStudentInfo(this.code).subscribe((res:any)=> {
      console.log("Success===",res);
      
      this.info=res;
      console.log(this.info)
      
      
      this.info.forEach((e: any) => {
        
        let id_encrypted=CryptoJS.AES.encrypt(JSON.stringify(e.id),this.secretKey).toString();
        
        localStorage.setItem('stud_id',id_encrypted)
        // console.log(id_encrypted)
      })
     

    },(error)=> {
      console.log("Error===",error);
    })

    
    
    

  }

  filter(){
    console.log(this.school_year_filter);
    console.log(this.semester_filter);

  }
  


}
