import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { Task } from '../../services/task.service';

@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.scss'],
})
export class TasksItemComponent implements OnInit {
  @Input() task: Task | undefined;
  @Output() onDeleteTask: EventEmitter<number | undefined> = new EventEmitter();
  @Output() onDoubleClickTask: EventEmitter<Task | undefined> =
    new EventEmitter();
  faTimes = faTimes;

  constructor() {}

  ngOnInit(): void {}

  onDelete(taskId?: number) {
    this.onDeleteTask.emit(taskId);
  }

  onDoubleClick(task?: Task) {
    this.onDoubleClickTask.emit(task);
  }
}
