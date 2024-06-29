import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './user/dummyuser';
import { TasksComponent } from "./tasks/tasks.component";
import { NgFor, NgIf } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent,NgFor,NgIf]
})
export class AppComponent {
  title = 'TaskManagment';
  Users = DUMMY_USERS
  selectedUserId?:string;


 get selecteduser(){
  return this.Users.find((users) => users.id === this.selectedUserId)
 }
  onselecteUser(id: string){
    this.selectedUserId = id
  }
}
