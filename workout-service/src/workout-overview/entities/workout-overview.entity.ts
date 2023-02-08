import { Workout } from 'src/workout/entities/workout.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, Index } from 'typeorm';
import { WorkoutCategory } from './category.entity';
import { RequiredEquipment } from './required-equipment.entity';

@Entity()
export class WorkoutOverview {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  title: string;

  @Column()
  imageUrl: string;

  @Column()
  numberOfExercises: number;

  @Column({ default: null })
  description?: number;

  @Column()
  daysPerWeek: number;

  @Column()
  favoriteCount: number;

  @Index()
  @Column()
  trainerId: string;

  @ManyToOne(() => Workout, (workout) => workout.workoutOverview)
  workouts: Workout[];

  @ManyToOne(() => RequiredEquipment, (requiredEquipment) => requiredEquipment.workoutOverview)
  requiredEquipment: RequiredEquipment[];

  @ManyToOne(() => WorkoutCategory, (workoutCategory) => workoutCategory.workoutOverview)
  category: WorkoutCategory[];
}
