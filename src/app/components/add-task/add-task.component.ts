import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ITask } from '../../../mock/task/task.interface';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask : EventEmitter<ITask> = new EventEmitter();

  taskName! : string;
  taskDay!: string;
  taskReminder: boolean = false;
  subscription! : Subscription
  showAddTask : boolean = false;

  constructor(private readonly uiService : UiService) { 
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddTask = value)
  }

  ngOnInit(): void {
  }

  onSubmit(){
    if(!this.taskName && !this.taskDay){
      alert("Please add task's information")
      return;
    }

    const newTask : ITask = {
      name: this.taskName, 
      day: this.taskDay,
      reminder: this.taskReminder
    }

    // Emit event and clear cache
    this.onAddTask.emit(newTask)

    this.taskDay = '';
    this.taskName = '';
    this.taskReminder=false;

  }
}
