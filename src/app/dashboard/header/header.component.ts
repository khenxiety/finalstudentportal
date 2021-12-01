import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { NavparamsService } from 'src/app/services/navparams.service';
import * as CryptoJS from 'crypto-js';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  toggleOff=false;
  toggleOn=true;

  name:any;
  code:any;

  time:any;

  id_encrypted:any;
  secretKey="secretKey";


  constructor(private navparams: NavparamsService, public router: Router, private api:ApiService) { 
    // this.name=localStorage.getItem('name');

    
    try {
      this.id_encrypted=localStorage.getItem('code');


      let bits = CryptoJS.AES.decrypt(this.id_encrypted,this.secretKey);
      this.code = JSON.parse(bits.toString(CryptoJS.enc.Utf8))
      console.log(this.code);
      
    } catch (error) {
      console.log("hahaha")
      
    }

    // this.code=localStorage.getItem('code');


    // this.name=this.navparams.getName();
    // console.log(this.name)
    

    this.getName();
  }

  ngOnInit(): void {
    

    



    
  }


  toggleSidemenuOff(){
    const toggleSide = window.document.getElementById('sidemenu')!

    toggleSide.style.display='none';
    this.toggleOff=true;
    this.toggleOn=false;
  }
  toggleSidemenuOn(){
    const toggleSide = window.document.getElementById('sidemenu')!

    toggleSide.style.display='block';
    this.toggleOff=false;
    this.toggleOn=true;
  }
  getName(){
    this.api.getStudentInfo(this.code).subscribe((res:any)=> {
      console.log("Success===",res);
      
      this.name=res;
      
      
      
      
      
     

    },(error)=> {
      console.log("Error===",error);
    })
  }




  logout(){
    localStorage.removeItem("name");
    localStorage.removeItem("id");
    localStorage.removeItem("code");

    localStorage.clear();


    this.router.navigate(['login']);

  }

}
