import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WorkoutOverviewService } from './workout-overview.service';
import { CreateWorkoutOverviewDto } from './dto/create-workout-overview.dto';
import { UpdateWorkoutOverviewDto } from './dto/update-workout-overview.dto';

@Controller('workout-overview')
export class WorkoutOverviewController {
  constructor(private readonly workoutOverviewService: WorkoutOverviewService) {}

  @Post()
  create(@Body() createWorkoutOverviewDto: CreateWorkoutOverviewDto) {
    return this.workoutOverviewService.create(createWorkoutOverviewDto);
  }

  @Get()
  findAll() {
    return this.workoutOverviewService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.workoutOverviewService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWorkoutOverviewDto: UpdateWorkoutOverviewDto) {
    return this.workoutOverviewService.update(+id, updateWorkoutOverviewDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.workoutOverviewService.remove(+id);
  }
}
