import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { Workout } from './workout.entity';

@Entity()
export class WorkoutDescription {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @Column()
  sortOrder: number;

  @OneToMany(() => Workout, (workout) => workout.descriptions)
  workout: Workout;
}
