import { Component, Input } from '@angular/core';
import { TaskListComponent } from "./task-list/task-list.component";
import { NgFor, NgIf } from '@angular/common';
import { AddTaskComponent } from "./add-task/add-task.component";
import { addNewTask } from './task-list/task-list.model';
import { TasksService } from './tasks.service';

@Component({
    selector: 'app-tasks',
    standalone: true,
    templateUrl: './tasks.component.html',
    styleUrl: './tasks.component.css',
    imports: [TaskListComponent, NgFor, AddTaskComponent,NgIf]
})
export class TasksComponent {
 @Input({required:true})UserID!:string
@Input({required:true})username?:string
add_div=false

constructor( private taskService:TasksService){}

  get selecteduser(){
   return this.taskService.getuserTasks(this.UserID)
  }
  onCompletedTask(id :string){
  }
  openadd(){
    this.add_div = true
  }
  oncloseaddTask(){
    this.add_div = false
  }
}
