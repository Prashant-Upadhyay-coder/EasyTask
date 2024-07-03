import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { addNewTask } from '../task-list/task-list.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  @Input({required:true})userId !: string;
 @Output() close = new  EventEmitter<void>()
 InputDue_Date=''
 InputSummary=''
 InputTitle =''
 private taskService = inject(TasksService)
 oncancel(){
  this.close.emit()
 }
 onsubmit(){
   this.taskService.addTasks(
    {
      Title:this.InputTitle,
      Summary:this.InputSummary,
      Date:this.InputDue_Date,

   }, this.userId);
   this.close.emit()
 }
}
