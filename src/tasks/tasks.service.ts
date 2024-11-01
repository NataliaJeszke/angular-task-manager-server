import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskDto } from '../tasks/task.dto';

@Injectable()
export class TasksService {
    private tasks: TaskDto[] = [
        { id: 1, title: 'Task 1', description: 'task 1', date: '2024-11-01', completed: false },
        { id: 2, title: 'Task 2', description: 'task 2', date: '2024-11-01', completed: false },
        { id: 3, title: 'Task 3', description: 'task 3', date: '2024-11-01', completed: false },
      ];
    

  findAll(): TaskDto[] {
    return this.tasks;
  }

  findOne(id: number): TaskDto {
    const task = this.tasks.find(task => task.id === id);
    if (!task) throw new NotFoundException(`Task with ID ${id} not found`);
    return task;
  }

  create(task: TaskDto): TaskDto {
    task.id = this.tasks.length + 1;
    this.tasks.push(task);
    return task;
  }

  update(id: number, updatedTask: TaskDto): TaskDto {
    const taskIndex = this.tasks.findIndex(task => task.id === id);
    if (taskIndex === -1) throw new NotFoundException(`Task with ID ${id} not found`);
    this.tasks[taskIndex] = updatedTask;
    return updatedTask;
  }

  delete(id: number): void {
    const taskIndex = this.tasks.findIndex(task => task.id === id);
    if (taskIndex === -1) throw new NotFoundException(`Task with ID ${id} not found`);
    this.tasks.splice(taskIndex, 1);
  }
}
