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
    this.taskService.getTasks().subscribe((tasks) => this.tasks = tasks);
  }

}
