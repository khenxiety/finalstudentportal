import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-student-sched',
  templateUrl: './student-sched.component.html',
  styleUrls: ['./student-sched.component.scss']
})
export class StudentSchedComponent implements OnInit {


  code:any;
  showFiller = false;

  subjects:any;
  constructor(public router: Router ,private api:ApiService) { 

    this.code=localStorage.getItem('code');
    


    

  }

  ngOnInit(): void {
    
  }

  myFunction(){
    // this.router.navigate(['print']);

  }

  
}
