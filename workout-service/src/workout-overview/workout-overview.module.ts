import { Module } from '@nestjs/common';
import { WorkoutOverviewService } from './workout-overview.service';
import { WorkoutOverviewController } from './workout-overview.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkoutCategory } from './entities/category.entity';
import { RequiredEquipment } from './entities/required-equipment.entity';
import { WorkoutOverview } from './entities/workout-overview.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      WorkoutCategory,
      RequiredEquipment,
      WorkoutOverview
    ])
  ],
  controllers: [WorkoutOverviewController],
  providers: [WorkoutOverviewService]
})
export class WorkoutOverviewModule {}
