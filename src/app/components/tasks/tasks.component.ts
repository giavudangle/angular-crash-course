import { Component, OnInit } from '@angular/core';
import { ITask } from '../../../mock/task/task.interface';
import { TASKS } from '../../../mock/task/task.mock';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: ITask[] = TASKS

  constructor() { }

  ngOnInit(): void {
  }

}
