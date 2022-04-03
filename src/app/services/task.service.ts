import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Task {
  id?: number;
  text: string;
  day: string;
  reminder: boolean;
}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = 'http://localhost:3000/tasks';

  constructor(private http: HttpClient) {}

  getTasks() {
    return this.http.get<Task[]>(this.apiUrl);
  }

  deleteTask(id?: number) {
    const url = `${this.apiUrl}/${id}`;

    return this.http.delete<Task>(url);
  }

  toggleReminder(task?: Task) {
    const url = `${this.apiUrl}/${task?.id}`;

    return this.http.patch<Task>(
      url,
      { reminder: !task?.reminder },
      httpOptions
    );
  }

  addTask(task: Task) {
    return this.http.post<Task>(this.apiUrl, task);
  }
}
