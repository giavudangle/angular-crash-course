import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { ITask } from '../../../mock/task/task.interface';
import {faTimes} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  @Input() task! : ITask
  @Output() onDeleteTask : EventEmitter<ITask> = new EventEmitter();
  faTimes = faTimes

  onDelete(task : ITask){
    this.onDeleteTask.emit(task)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
