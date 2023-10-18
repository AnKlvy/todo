import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent {
  students: any[] = [];
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getStudents().subscribe((data: any) => {
      this.students = data;
    });

  
  }
}
