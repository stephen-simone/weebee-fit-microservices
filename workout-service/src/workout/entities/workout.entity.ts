import { WorkoutOverview } from 'src/workout-overview/entities/workout-overview.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { WorkoutDescription } from './description.entity';

@Entity()
export class Workout {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  sets: number;

  @Column({ default: null })
  numberPerSet?: number;

  @Column({ default: null })
  holdPeriod?: number;

  @Column()
  restPeriod: number;

  @Column()
  imageUrl: string;

  @Column()
  sortOrder: number;

  @OneToMany(() => WorkoutOverview, (workoutOverview) => workoutOverview.workouts)
  workoutOverview: WorkoutOverview;

  @ManyToOne(() => WorkoutDescription, (workoutDescription) => workoutDescription.workout)
  descriptions: WorkoutDescription[]
}
