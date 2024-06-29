import { Component, Input } from '@angular/core';
import { TaskListComponent } from "./task-list/task-list.component";
import { NgFor, NgIf } from '@angular/common';
import { AddTaskComponent } from "./add-task/add-task.component";
import { addNewTask } from './task-list/task-list.model';

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
Tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u2',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ]

  get selecteduser(){
    return this.Tasks.filter((task) => task.userId ===  this.UserID)
  }
  onCompletedTask(id :any){
    this.Tasks = this.Tasks.filter((task) => task.id !==  id)
  }
  openadd(){
    this.add_div = true
  }
  closeadd(){
    this.add_div = false
  }
  OnaddTask(taskdata :addNewTask){
 this.Tasks.push({
  id:new Date().getTime().toString(),
  userId: this.UserID,
  title:taskdata.Title,
  summary:taskdata.Summary,
  dueDate: taskdata.Date
 })
 this.add_div = false
  }
}
