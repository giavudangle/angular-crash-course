import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ITask } from '../../../mock/task/task.interface';
import { TASKS } from '../../../mock/task/task.mock';
import { TaskService } from '../../services/task.service';



@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: ITask[] = [];

  constructor(private readonly taskService : TaskService) { }

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks(){
    this.taskService.getTasks().subscribe((tasks) => this.tasks = tasks);
  }

  deleteTask(task : ITask){
    this.taskService
      .deleteTask(task)
      .subscribe(() => 
        (this.tasks = this.tasks.filter(t => t.id !== task.id)))
  }
  
  toggleReminder(task : ITask){
    task.reminder=!task.reminder
    this.taskService.updateTaskReminder(task).subscribe()
  }

  addTask(task :ITask){
    console.log(task)
    this.taskService.addTask(task).subscribe(t => this.tasks.push(t))
  }

}
