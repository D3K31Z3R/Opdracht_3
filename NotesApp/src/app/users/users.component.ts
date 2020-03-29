import { Component, OnInit } from '@angular/core';
import {APIService} from "../api.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(apiService: APIService) {
    apiService.getUsers().subscribe((users) => {
      console.log(users)
    })
  }

  ngOnInit(): void {
  }

}
