import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-print-sched',
  templateUrl: './print-sched.component.html',
  styleUrls: ['./print-sched.component.scss']
})
export class PrintSchedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.print();

  }
  // myFunction(){
  //   window.print();

    
  // }

}
