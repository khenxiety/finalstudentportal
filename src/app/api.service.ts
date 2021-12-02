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
    return this.http.get('https://btihs-portal-backends.herokuapp.com/getaccounts.php');
    
  }
  getStudent(){
    return this.http.get('https://btihs-portal-backend.herokuapp.com/getStudents.php');

  }

  getStudentInfo(id: string){
    return this.http.get('https://btihs-portal-backends.herokuapp.com/getStudentInfo.php?id='+id);

  }

  getStudentRegistration(id: string){
    return this.http.get('https://btihs-portal-backends.herokuapp.com/getStudentRegistration.php?id='+id);

  }


  // subjects

  getEnrolledSubjects(id:string){
    return this.http.get('https://btihs-portal-backends.herokuapp.com/getStudentEnrolledSubjects.php?id='+id);

  }

  getSched(id:string){
    return this.http.get('https://btihs-portal-backends.herokuapp.com/getSchedules.php?id='+id);

  }

  getAdvisories(){
    return this.http.get('https://btihs-portal-backends.herokuapp.com/getAdvisories.php');

  }

  getSchoolYear(id: string){
    return this.http.get('https://btihs-portal-backends.herokuapp.com/getSchoolYear.php?id='+id);


  }






  // forgot Password service
  updatePassword(id: string,data: any){
    return this.http.put('https://btihs-portal-backends.herokuapp.com/updateForgotPassword.php?id='+id,data);

  }



}
