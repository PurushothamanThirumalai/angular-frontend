import { HttpResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private dataService: DataService) {

  }

  ngOnInit(): void {
    this.loadUsers()
  }
  users = []

  title = 'angular-frontend';
  message: string = ''

  form: FormGroup = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });
  loadUsers() {
    this.dataService.getUsers()
      .subscribe(
        (response) => {
          //this.users.push(response.data)
        },
        (err) => { this.message = "An error occurred" })
  }

  submit() {
    if (this.form.valid) {
      this.dataService.addUser(this.form.value.firstName, this.form.value.lastName)
        .subscribe(
          (response) => { this.message = "User added successfully" },
          (err) => { this.message = "An error occurred" })
    }
  }


}
