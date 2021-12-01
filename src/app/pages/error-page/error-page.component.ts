import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss']
})
export class ErrorPageComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
    setTimeout(() => {
    this.router.navigate(["login"]);
      
    }, 1000);
  }
  return(){
  }

}
