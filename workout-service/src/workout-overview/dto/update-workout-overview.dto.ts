import { PartialType } from '@nestjs/mapped-types';
import { CreateWorkoutOverviewDto } from './create-workout-overview.dto';

export class UpdateWorkoutOverviewDto extends PartialType(CreateWorkoutOverviewDto) {}
