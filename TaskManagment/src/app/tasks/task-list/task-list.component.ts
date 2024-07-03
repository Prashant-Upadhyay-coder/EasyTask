import { Component,  Input, Output, inject } from '@angular/core';
import { Tasks } from './task-list.model';
import { CardComponent } from '../../Shared/card/card.component';
import { DatePipe, UpperCasePipe } from '@angular/common';
import { TasksService } from '../tasks.service';
@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CardComponent ,DatePipe],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  @Input({required:true}) tasks !:Tasks

  private tasksService =inject(TasksService )
  
  onCompletedTask(){
    this.tasksService.removeTask(this.tasks.id)
  }

}
