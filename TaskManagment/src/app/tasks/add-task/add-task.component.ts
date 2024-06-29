import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { addNewTask } from '../task-list/task-list.model';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
 @Output() cancel = new  EventEmitter<void>()
@Output() add = new EventEmitter<addNewTask>()
 InputDue_Date=''
 InputSummary=''
 InputTitle =''
 oncancel(){
  this.cancel.emit()
 }
 onsubmit(){


  this.add.emit({
    Title :this.InputTitle,
    Summary :this.InputSummary,
    Date : this.InputDue_Date
  })
 }
}
