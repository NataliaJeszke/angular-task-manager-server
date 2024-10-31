import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { TaskDto } from './task.dto';

@ApiTags('tasks')
@Controller('tasks')
export class TaskController {
  private tasks: TaskDto[] = [
    { id: 1, title: 'Task 1', description: 'task 1', date: '2024-11-01', completed: false },
    { id: 2, title: 'Task 2', description: 'task 2', date: '2024-11-01', completed: false },
    { id: 3, title: 'Task 3', description: 'task 3', date: '2024-11-01', completed: false },
  ];

  @Get()
  @ApiOperation({ summary: 'Pobierz wszystkie taski' })
  @ApiResponse({ status: 200, description: 'Lista wszystkich tasków', type: [TaskDto] })
  findAll(): TaskDto[] {
    return this.tasks;
  }

  @Get(':id')
  @ApiOperation({ summary: 'Pobierz task po ID' })
  @ApiResponse({ status: 200, description: 'Zwraca jeden task', type: TaskDto })
  findOne(@Param('id') id: string): TaskDto {
    return this.tasks.find(task => task.id === +id);
  }

  @Post()
  @ApiOperation({ summary: 'Dodaj nowy task' })
  @ApiResponse({ status: 201, description: 'Dodany task', type: TaskDto })
  create(@Body() task: TaskDto): TaskDto {
    const newTask = { ...task, id: this.tasks.length + 1 };
    this.tasks.push(newTask);
    return newTask;
  }

  @Put(':id')
  @ApiOperation({ summary: 'Edytuj istniejący task' })
  @ApiResponse({ status: 200, description: 'Edytowany task', type: TaskDto })
  update(@Param('id') id: string, @Body() updatedTask: TaskDto): TaskDto {
    const taskIndex = this.tasks.findIndex(task => task.id === +id);
    if (taskIndex > -1) {
      this.tasks[taskIndex] = { ...updatedTask, id: +id };
      return this.tasks[taskIndex];
    }
    return null;
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Usuń task po ID' })
  @ApiResponse({ status: 200, description: 'Usunięty task', type: TaskDto })
  remove(@Param('id') id: string): TaskDto {
    const taskIndex = this.tasks.findIndex(task => task.id === +id);
    if (taskIndex > -1) {
      const removedTask = this.tasks.splice(taskIndex, 1)[0];
      return removedTask;
    }
    return null;
  }
}
