import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Tasks } from './task-list.model';
import { CardComponent } from '../../Shared/card/card.component';
@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  @Input({required:true}) tasks !:Tasks
  @Output() completed = new EventEmitter<String>()

  onCompletedTask(){
    this.completed.emit(this.tasks.id)
  }

}
