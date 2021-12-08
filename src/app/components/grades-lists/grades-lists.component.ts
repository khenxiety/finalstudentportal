import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import * as CryptoJS from 'crypto-js';
import { MatDialog } from '@angular/material/dialog';
import { FilterModalComponent } from '../filter-modal/filter-modal.component';

@Component({
  selector: 'app-grades-lists',
  templateUrl: './grades-lists.component.html',
  styleUrls: ['./grades-lists.component.scss']
})
export class GradesListsComponent implements OnInit {

  
  subjects:any;

  code:any;
  secretKey="secretKey";
  id_encrypt:any;

  filterdata:any

  sy:any
  syButton:any
  currentsubjects: any;

  constructor(private api:ApiService, public dialog: MatDialog) {
    try {
      this.id_encrypt=localStorage.getItem('stud_id');
//       console.log(this.id_encrypt)


      let bits = CryptoJS.AES.decrypt(this.id_encrypt,this.secretKey);
      this.code = JSON.parse(bits.toString(CryptoJS.enc.Utf8))
//       console.log(this.code);
      
    } catch (error) {
      console.log('subject-listerror')
      
    }
    this.sy=localStorage.getItem('currentsy');
    


    

    

    

    this.getEnrolledGrades();
  }

  ngOnInit(): void {
  }


  getEnrolledGrades(){

    this.syButton=this.sy;

    this.api.getEnrolledSubjects(this.code).subscribe((res:any)=> {
//       console.log("Success===",res);
      
      this.subjects=res;

      this.currentsubjects=this.subjects.filter((e: { SY: any; })=>e.SY==this.sy)
      
//       console.log(this.subjects)
      

      
     

    },(error)=> {
      console.log("Error===",error);
    })
  }


  openModal(){
    let modal=this.dialog.open(FilterModalComponent);
    modal.afterClosed().subscribe(res=>{
      this.filterdata=res;
      this.api.getEnrolledSubjects(this.code).subscribe((result:any)=> {
        // console.log("Success===",result);
        
        this.subjects=result;
        if (this.filterdata=='1st'||this.filterdata=='2nd') {
          this.currentsubjects=this.subjects.filter((e: { sem: any; })=>e.sem==this.filterdata)


        }else{
          this.currentsubjects=this.subjects.filter((e: { SY: any; })=>e.SY==this.filterdata)
          this.syButton=this.filterdata;



        }
        if(this.filterdata=="all"){
          this.currentsubjects=this.subjects;

          

          
        }
        if(this.filterdata==undefined){
          this.getEnrolledGrades();
        }
        
        
  
        
       
  
      },(error)=> {
        console.log("Error===",error);
      })


    })

  }

}
