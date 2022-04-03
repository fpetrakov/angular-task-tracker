import { Component, OnInit } from '@angular/core';

import { Task, TaskService } from '../../services/task.service';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss'],
})
export class TasksListComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

  deleteTask(taskId?: number) {
    this.taskService
      .deleteTask(taskId)
      .subscribe(
        () => (this.tasks = this.tasks.filter((task) => task.id !== taskId))
      );
  }

  toggleReminder(task?: Task) {
    this.taskService.toggleReminder(task).subscribe((updatedTask) => {
      if (task) {
        task.reminder = updatedTask.reminder;
      }
    });
  }

  addTask(task: Task) {
    this.taskService.addTask(task).subscribe(() => {
      this.tasks.push(task);
    });
  }
}
