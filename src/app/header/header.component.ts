import { Component } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import { TaskComponent } from '../task/task.component';
import { Task2Component } from '../task2/task2.component';
import { Task3Component } from '../task3/task3.component';
import { Task4Component } from '../task4/task4.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LogoComponent, TaskComponent, Task2Component, Task3Component, Task4Component],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
