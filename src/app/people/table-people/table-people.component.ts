import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UserData } from 'src/app/model/user-data';
import { ServiceUserService } from 'src/app/service/service-user.service';




@Component({
  selector: 'app-table-people',
  templateUrl: './table-people.component.html',
  styleUrls: ['./table-people.component.css'],
})


export class TablePeopleComponent implements OnInit{

  listUsers: UserData[] = [];
  show: boolean = true;

  constructor(private userService:ServiceUserService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userService.getAllUsers().subscribe(res => {
      this.listUsers = res.data;
      (this.listUsers.length>0)?this.show = false:this.show = true
      console.log(this.listUsers);
      

    }, (error) => {
      console.log(error)
    });
    
  }

  eliminarUsuario() {
    
  }

  


}
