import { Injectable } from '@nestjs/common';
import { CreateWorkoutOverviewDto } from './dto/create-workout-overview.dto';
import { UpdateWorkoutOverviewDto } from './dto/update-workout-overview.dto';

@Injectable()
export class WorkoutOverviewService {
  create(createWorkoutOverviewDto: CreateWorkoutOverviewDto) {
    return 'This action adds a new workoutOverview';
  }

  findAll() {
    return `This action returns all workoutOverview`;
  }

  findOne(id: number) {
    return `This action returns a #${id} workoutOverview`;
  }

  update(id: number, updateWorkoutOverviewDto: UpdateWorkoutOverviewDto) {
    return `This action updates a #${id} workoutOverview`;
  }

  remove(id: number) {
    return `This action removes a #${id} workoutOverview`;
  }
}
