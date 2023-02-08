import { Test, TestingModule } from '@nestjs/testing';
import { WorkoutOverviewController } from './workout-overview.controller';
import { WorkoutOverviewService } from './workout-overview.service';

describe('WorkoutOverviewController', () => {
  let controller: WorkoutOverviewController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WorkoutOverviewController],
      providers: [WorkoutOverviewService],
    }).compile();

    controller = module.get<WorkoutOverviewController>(WorkoutOverviewController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
