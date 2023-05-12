import { Component, OnInit } from '@angular/core';
import { ServiceUserService } from 'src/app/service/service-user.service';




@Component({
  selector: 'app-table-people',
  templateUrl: './table-people.component.html',
  styleUrls: ['./table-people.component.css'],
})


export class TablePeopleComponent implements OnInit{

  listUsers: any[] = [];
  show: boolean = true;

  constructor(private userService:ServiceUserService) {}

  ngOnInit() {
    this.userService.getAllUsers().subscribe(res => {
      this.listUsers = res.data;
      (this.listUsers.length>0)?this.show = false:this.show = true
      
      console.log(this.listUsers);
    });
    
  }

  


}
