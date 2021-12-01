import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  headers: HttpHeaders;
  constructor(
    public http: HttpClient
  ) {
    this.headers = new HttpHeaders();
    this.headers.append("Accept", 'application/json');
    this.headers.append("Content-Type", 'application/json');
    this.headers.append("Access-Control-Allow-Origin", '*');


   }

  

  getStudents(){
    // return this.http.get('https://btihs-portal-backends.herokuapp.com/getaccounts.php');
    return this.http.get('http://localhost/Projects/BTIHSPortal/backend/getaccounts.php');
    
  }

  getStudentInfo(id: string){
    return this.http.get('http://localhost/Projects/BTIHSPortal/backend/getStudentInfo.php?id='+id);

  }

  getStudentRegistration(id: string){
    return this.http.get('http://localhost/Projects/BTIHSPortal/backend/getStudentRegistration.php?id='+id);

  }


  // subjects

  getEnrolledSubjects(id:string){
    return this.http.get('http://localhost/Projects/BTIHSPortal/backend/getStudentEnrolledSubjects.php?id='+id);

  }

  getSched(id:string){
    return this.http.get('http://localhost/Projects/BTIHSPortal/backend/getSchedules.php?id='+id);

  }

  getAdvisories(){
    return this.http.get('http://localhost/Projects/BTIHSPortal/backend/getAdvisories.php');

  }

  getSchoolYear(id: string){
    return this.http.get('http://localhost/Projects/BTIHSPortal/backend/getSchoolYear.php?id='+id);


  }






  // forgot Password service
  updatePassword(id: string,data: any){
    return this.http.put('http://localhost/Projects/BTIHSPortal/backend/updateForgotPassword.php?id='+id,data);

  }



}
