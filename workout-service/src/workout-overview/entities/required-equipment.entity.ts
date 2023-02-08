import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { WorkoutOverview } from './workout-overview.entity';

@Entity()
export class RequiredEquipment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  equipment: string;

  @OneToMany(() => WorkoutOverview, (workoutOverview) => workoutOverview.requiredEquipment)
  workoutOverview: WorkoutOverview;
}
