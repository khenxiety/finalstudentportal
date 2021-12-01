import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  code:any;
  subjects:any;
  sched:any;

  // sched=[
  //   // sub1
  //   {
  //     name:'Pre-cal',
  //     prof:'Ms. Sample Prof',
  //     monday:'8:00-10:am',
  //     tuesday:null,
  //     wed:null,
  //     thurs:null,
  //     friday:'9:00-10:am',
  //     saturday:null
  //   },
  //   // sub2
  //   {
  //     name:'Gen Bio',
  //     prof:'Ms. Sample Prof2',

  //     monday:'10:00-11:am',
  //     tuesday:null,
  //     wed:'8:00-11:am',
  //     thurs:null,
  //     friday:null,
  //     saturday:null
  //   },
  //   // sub3
  //   {
  //     name:'Physics',
  //     prof:'Ms. Sample Prof3',

  //     monday:null,
  //     tuesday:null,
  //     wed:'10:00am-11:00am',
  //     thurs:'10:00-12:00pm',
  //     friday:null,
  //     saturday:null
  //   },
  //   // sub4
  //   {
  //     name:'Codeine',
  //     prof:'Ms. Sample Prof4',

  //     monday:'1:00-12:am',
  //     tuesday:null,
  //     wed:null,
  //     thurs:null,
  //     friday:'10:00-11:am',
  //     saturday:'10:00-11:am'
  //   }
  // ]

  constructor(private api:ApiService) {

    this.code = localStorage.getItem('secId')
    this.getEnrolledSubj();
   }

  ngOnInit(): void {
  }
  myFunction(){
    window.print();
  }

  getEnrolledSubj(){

    this.api.getSched(this.code).subscribe((res:any)=> {
      console.log("Success===",res);
      
      this.sched=res;
      // console.log(this.subjects)
      
     

    },(error)=> {
      console.log("Error===",error);
    })
  }
}
