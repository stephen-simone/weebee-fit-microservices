import { Module } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkoutOverviewModule } from './workout-overview/workout-overview.module';
import { WorkoutModule } from './workout/workout.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'postgres',
      port: 5432,
      username: 'root',
      password: '123456',
      database: 'weebee_fit',
      synchronize: true,
      autoLoadEntities: true,
    }),
    WorkoutOverviewModule,
    WorkoutModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}

