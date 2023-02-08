import { Module } from '@nestjs/common';
import { ActivityService } from './activity.service';
import { ActivityController } from './activity.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CalorieBurn } from './entities/calorie-burn';
import { CalorieIntake } from './entities/calorie-intake';
import { CompletedWorkout } from './entities/completed-workout';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      CalorieBurn,
      CalorieIntake,
      CompletedWorkout,
    ])
  ],
  controllers: [ActivityController],
  providers: [ActivityService]
})
export class ActivityModule {}
