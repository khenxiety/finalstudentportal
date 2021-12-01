import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavparamsService {

  name:any;
  student_id:any;
  constructor() { }



  setName(data:any){
    this.name = data;
  }

  getName(){
    return this.name;
  }

  setStudentid(data:any){
    this.student_id = data;
  }

  getStudentid(){
    return this.student_id;
  }
}
