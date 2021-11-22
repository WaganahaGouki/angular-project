import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

export class Student {
  constructor(
    public id: number,
    public name: string,
    public email: string
  ) {
  }
}

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  students: Student[] = [];

  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
    this.getStudents()
  }

  getStudents(){
    this.httpClient.get<Student[]>('http://localhost:8080/api/v1/student/').subscribe(
      response => {
        this.students = response
      }
    )
  }
}
