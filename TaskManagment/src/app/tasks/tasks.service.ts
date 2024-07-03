import { Injectable } from '@angular/core';
import { addNewTask } from './task-list/task-list.model';

@Injectable({
  providedIn: 'root',
})
export class TasksService {

  constructor() {
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
      this.Tasks = JSON.parse(tasks);
    }
  }
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
  ];
  getuserTasks(userID: string) {
    return this.Tasks.filter((task) => task.userId === userID);
  }
  addTasks(taskdata: addNewTask, userId: string) {
    this.Tasks.push({
      id: new Date().getTime().toString(),
      userId: userId,
      title: taskdata.Title,
      summary: taskdata.Summary,
      dueDate: taskdata.Date,
    });
    this.savetasks()
  }
  removeTask(id: string) {
    this.Tasks = this.Tasks.filter((task) => task.id !== id);
    this.savetasks()
  }
  private savetasks(){
    localStorage.setItem('tasks', JSON.stringify(this.Tasks));
  }
}
