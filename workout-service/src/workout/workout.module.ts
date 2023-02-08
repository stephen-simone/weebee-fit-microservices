import { Module } from '@nestjs/common';
import { WorkoutService } from './workout.service';
import { WorkoutController } from './workout.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkoutDescription } from './entities/description.entity';
import { Workout } from './entities/workout.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      WorkoutDescription,
      Workout
    ])
  ],
  controllers: [WorkoutController],
  providers: [WorkoutService]
})
export class WorkoutModule {}
