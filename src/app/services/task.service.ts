import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ITask } from '../../mock/task/task.interface';
import { TASKS } from '../../mock/task/task.mock';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }


  getTasks() : Observable<ITask[]>{
    const tasks = of(TASKS)
    return tasks;
  }
}
