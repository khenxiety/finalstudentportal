import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
    const portal_tab=document.getElementById('portal_tab')!;
    portal_tab.classList.add('active');
  }

  activeOne(){
    const portal_tab=document.getElementById('portal_tab')!;
    portal_tab.classList.add('active');
    


    this.router.navigate(['student-dash']);
    

  }
  activeTwo(){
    const portal_tab=document.getElementById('portal_tab')!;
    portal_tab.classList.remove('active');

    const sched_tab=document.getElementById('sched_tab')!;
    portal_tab.classList.add('active');
    

    

    

  }
  activeThree(){
    // const first = window.document.getElementById("one")!;
    // const sec = window.document.getElementById("two")!;

    // const third = window.document.getElementById("three")!;

    // first.style.background="transparent";
    // first.style.border="none";
    // sec.style.background="transparent";
    // sec.style.border="none";
    
    
    // third.style.backgroundColor="#e0e0e059";
    // third.style.borderRight="5px solid maroon";

    this.router.navigate(['student-sched']);

    

  }


  logout(){
    localStorage.removeItem("name");
    localStorage.removeItem("id");
    localStorage.removeItem("code");


    this.router.navigate(['login']);

  }

}
