import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActivityModule } from './activity/activity.module';

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
    ActivityModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
