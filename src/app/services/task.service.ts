import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ITask } from '../../mock/task/task.interface';
import { TASKS } from '../../mock/task/task.mock';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private API_ENDPOINT = 'http://localhost:5000'


  constructor(private readonly httpClient: HttpClient) { }


  getTasks(): Observable<ITask[]> {
    return this.httpClient.get<ITask[]>(`${this.API_ENDPOINT}/tasks`, {
      // provide http options
    })
  }

  deleteTasks(task : ITask): Observable<ITask> {
    return this.httpClient.delete<ITask>(`${this.API_ENDPOINT}/tasks/${task.id}`)
  }
}
