import { Controller, Get } from '@nestjs/common';

@Controller('tasks')
export class TaskController {
  @Get()
  findAll() {
    return [
      { id: 1, title: 'Task 1', description: "task 1", date:"1-11-2024", completed: false },
      { id: 2, title: 'Task 2', description: "task 2", date:"1-11-2024", completed: false },
      { id: 3, title: 'Task 3', description: "task 3", date:"1-11-2024", completed: false },
    ];
  }
}
