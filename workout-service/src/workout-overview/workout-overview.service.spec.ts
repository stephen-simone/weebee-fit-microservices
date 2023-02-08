import { Test, TestingModule } from '@nestjs/testing';
import { WorkoutOverviewService } from './workout-overview.service';

describe('WorkoutOverviewService', () => {
  let service: WorkoutOverviewService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WorkoutOverviewService],
    }).compile();

    service = module.get<WorkoutOverviewService>(WorkoutOverviewService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
