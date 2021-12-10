import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title : string = 'Kanban Board';
  constructor() { }


  toogleAddTask(){
    console.log('hehe')
  }

  ngOnInit(): void {
  }

}

