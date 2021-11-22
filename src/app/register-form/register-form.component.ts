import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
  }

  postStudent(f: NgForm){
    const url = 'http://localhost:8080/api/v1/student/postStudent'
    this.httpClient.post(url, f.value).subscribe(
      (result) => {
        this.ngOnInit()
      }
    )
  }
}
