import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { TaskController } from './tasks/tasks.controller';
import { TasksService } from './tasks/tasks.service';

@Module({
  imports: [TasksModule],
  controllers: [AppController, TaskController],
  providers: [AppService, TasksService],
})
export class AppModule {}
