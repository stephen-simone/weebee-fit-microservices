import { Module } from '@nestjs/common';
import { TrainerService } from './trainer.service';
import { TrainerController } from './trainer.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Subscriber } from 'rxjs';
import { SubscriptionPlan } from './entities/subscription-plans.entity';
import { Trainer } from './entities/trainer.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Trainer,
      Subscriber,
      SubscriptionPlan,
    ])
  ],
  controllers: [TrainerController],
  providers: [TrainerService]
})
export class TrainerModule {}
