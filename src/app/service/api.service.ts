import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:8080/api/university'; // Замените на URL вашего Express API

  constructor(private http: HttpClient) { }

  getStudents() {
    return this.http.get(`${this.apiUrl}/getStudents`);
  }

  addStudent(studentData: any) {
    return this.http.post(`${this.apiUrl}/addStudent`, studentData);
  }

  getStudent(studentId: string) {
    return this.http.get(`${this.apiUrl}/getStudent/${studentId}`);
  }

  updateStudent(studentId: string, studentData: any) {
    return this.http.put(`${this.apiUrl}/updateStudent/${studentId}`, studentData);
  }
  
  deleteStudent(studentId: string) {
    return this.http.delete(`${this.apiUrl}/deleteStudent/${studentId}`);
  }
  
 
}
