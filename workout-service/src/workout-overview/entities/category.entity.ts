import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { WorkoutOverview } from './workout-overview.entity';

@Entity()
export class WorkoutCategory {
	@PrimaryGeneratedColumn("uuid")
	id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  shortName: string;

  @Column()
  imageUrl: string;

  @OneToMany(() => WorkoutOverview, (workoutOverview) => workoutOverview.category)
  workoutOverview: WorkoutOverview;
}
