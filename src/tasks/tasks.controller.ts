import { Controller, Get, Param, Render } from '@nestjs/common';

@Controller('tasks')
export class TasksController {
  @Get('/:id')
  @Render('home')
  root(@Param('id') id: string) {
    const tasks = [
      {
        tarefa: 'Criar blog',
      },
      { tarefa: 'Criar API' },
    ];

    return { task: tasks[parseInt(id)] };
  }
}
