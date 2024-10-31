import { ApiProperty } from '@nestjs/swagger';

export class TaskDto {
  @ApiProperty({ example: '1', description: 'Unikalny identyfikator zadania' })
  id: number;

  @ApiProperty({ example: 'Wykonać zadanie', description: 'Tytuł zadania' })
  title: string;

  @ApiProperty({ example: 'Opis zadania', description: 'Szczegółowy opis zadania' })
  description: string;

  @ApiProperty({ example: false, description: 'Czy zadanie zostało ukończone?' })
  completed: boolean;

  @ApiProperty({ example: '31-10-2024', description: 'Deadline dla zadania' })
  date: string;
}