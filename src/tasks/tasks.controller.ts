import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { TaskDto } from './task.dto';
import { TasksService } from './tasks.service';

@ApiTags('tasks')
@Controller('tasks')
export class TaskController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  @ApiOperation({ summary: 'Pobierz wszystkie taski' })
  @ApiResponse({ status: 200, description: 'Lista wszystkich tasków', type: [TaskDto] })
  async getTasks(): Promise<TaskDto[]> {
    return this.tasksService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Pobierz task po ID' })
  @ApiResponse({ status: 200, description: 'Zwraca jeden task', type: TaskDto })
  findOne(@Param('id') id: string): TaskDto {
    return this.tasksService.findOne(+id);
  }

  @Post()
  @ApiOperation({ summary: 'Dodaj nowy task' })
  @ApiResponse({ status: 201, description: 'Dodany task', type: TaskDto })
  create(@Body() task: TaskDto): TaskDto {
    const newTask = { ...task};
    return this.tasksService.create(newTask);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Edytuj istniejący task' })
  @ApiResponse({ status: 200, description: 'Edytowany task', type: TaskDto })
  update(@Param('id') id: string, @Body() updatedTask: TaskDto): TaskDto {
   return this.tasksService.update(+id, updatedTask);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Usuń task po ID' })
  @ApiResponse({ status: 200, description: 'Usunięty task', type: TaskDto })
  delete(@Param('id') id: string): TaskDto {
    this.tasksService.delete(+id);
    return;
  }
}
