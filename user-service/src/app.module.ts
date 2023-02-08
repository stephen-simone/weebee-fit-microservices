import { Module } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { TrainerModule } from './trainer/trainer.module';
import { Trainer } from './trainer/entities/trainer.entity';
import { User } from './user/entities/user.entity';
import { Subscriber } from './trainer/entities/subscriber.entity';
import { SubscriptionPlan } from './trainer/entities/subscription-plans.entity';

@Module({
  imports: [
    UserModule,
    TrainerModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'postgres',
      port: 5432,
      username: 'root',
      password: '123456',
      database: 'weebee_fit',
      synchronize: true,
      entities:[
        Trainer,
        User,
        Subscriber,
        SubscriptionPlan
      ]
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}

